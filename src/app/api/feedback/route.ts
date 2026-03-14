import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAnthropicClient } from '@/lib/anthropic';
import { buildFeedbackPrompt } from '@/lib/prompts/feedback';

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { questionId, userAnswer, isCorrect } = body as Record<string, unknown>;

  if (!questionId || typeof questionId !== 'string') {
    return NextResponse.json(
      { error: 'questionId is required' },
      { status: 400 },
    );
  }
  if (!userAnswer || typeof userAnswer !== 'string') {
    return NextResponse.json(
      { error: 'userAnswer is required' },
      { status: 400 },
    );
  }
  if (typeof isCorrect !== 'boolean') {
    return NextResponse.json(
      { error: 'isCorrect must be a boolean' },
      { status: 400 },
    );
  }

  const question = await prisma.question.findUnique({
    where: { id: questionId },
  });

  if (!question) {
    return NextResponse.json({ error: 'Question not found' }, { status: 404 });
  }

  let choices: string[];
  try {
    choices = JSON.parse(question.choices) as string[];
  } catch {
    return NextResponse.json(
      { error: '不正な選択肢データです。' },
      { status: 500 },
    );
  }

  try {
    const message = await getAnthropicClient().messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 500,
      messages: [
        {
          role: 'user',
          content: buildFeedbackPrompt({
            type: question.type as 'vocabulary' | 'grammar',
            content: question.content,
            choices,
            answer: question.answer,
            userAnswer: userAnswer as string,
            isCorrect: isCorrect as boolean,
          }),
        },
      ],
    });

    const firstContent =
      Array.isArray(message.content) && message.content.length > 0
        ? message.content[0]
        : null;
    const feedback = firstContent?.type === 'text' ? firstContent.text : '';

    return NextResponse.json({ feedback });
  } catch {
    return NextResponse.json(
      { error: 'フィードバックの生成に失敗しました。' },
      { status: 500 },
    );
  }
}
