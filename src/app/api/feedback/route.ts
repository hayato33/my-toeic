import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { anthropic } from '@/lib/anthropic';

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

  try {
    const message = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 500,
      messages: [
        {
          role: 'user',
          content: `あなたはTOEIC学習のチューターです。以下の問題に対するフィードバックを日本語で簡潔に提供してください。

問題タイプ: ${question.type === 'vocabulary' ? '単語' : '文法'}
問題: ${question.content}
選択肢: ${JSON.parse(question.choices).join(', ')}
正解: ${question.answer}
ユーザーの回答: ${userAnswer}
結果: ${isCorrect ? '正解' : '不正解'}

以下の観点でフィードバックしてください:
${isCorrect ? '- なぜこれが正解なのか簡単な補足\n- 関連する表現や覚え方のヒント' : '- なぜ間違えたのかの分析\n- 正解の覚え方のヒント\n- 似た表現との違い'}

3〜5文程度で簡潔にお願いします。`,
        },
      ],
    });

    const feedback =
      message.content[0].type === 'text' ? message.content[0].text : '';

    return NextResponse.json({ feedback });
  } catch {
    return NextResponse.json(
      { error: 'フィードバックの生成に失敗しました。' },
      { status: 500 },
    );
  }
}
