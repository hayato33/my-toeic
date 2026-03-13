import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { QuestionType } from '@/generated/prisma/client';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const date = searchParams.get('date');
  const limit = searchParams.get('limit');

  const where: {
    type?: QuestionType;
    createdAt?: { gte: Date; lt: Date };
  } = {};

  if (type === 'vocabulary' || type === 'grammar') {
    where.type = type;
  }

  if (date) {
    const start = new Date(date);
    if (!isNaN(start.getTime())) {
      const end = new Date(start);
      end.setDate(end.getDate() + 1);
      where.createdAt = { gte: start, lt: end };
    }
  }

  const questions = await prisma.question.findMany({
    where,
    ...(limit ? { take: parseInt(limit, 10) } : {}),
    orderBy: { createdAt: 'asc' },
  });

  const parsed = questions.map((q) => ({
    ...q,
    choices: JSON.parse(q.choices),
  }));

  return NextResponse.json(parsed);
}
