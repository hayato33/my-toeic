import { describe, it, expect, vi, beforeEach } from 'vitest';
import { NextRequest } from 'next/server';
import { POST } from './route';

vi.mock('@/lib/prisma', () => import('@/lib/__mocks__/prisma'));
vi.mock('next/headers', () => ({
  headers: vi.fn().mockResolvedValue(new Headers()),
}));
vi.mock('@/lib/auth', () => ({
  auth: {
    api: {
      getSession: vi.fn().mockResolvedValue({
        user: { id: 'test-user', name: 'Test', email: 'test@example.com' },
        session: { id: 'session-1' },
      }),
    },
  },
}));

import { prisma } from '@/lib/prisma';

const mockFindUnique = prisma.question.findUnique as ReturnType<typeof vi.fn>;
const mockTransaction = prisma.$transaction as ReturnType<typeof vi.fn>;

const makeQuestion = () => ({
  id: 'q-1',
  type: 'vocabulary',
  content: 'test',
  choices: '["a","b"]',
  answer: 'a',
  explanation: 'x',
  createdAt: new Date(),
});

const makeRequest = (body: unknown) =>
  new NextRequest('http://localhost/api/answers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

describe('POST /api/answers', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('正解時に 201 と UserAnswer が返る', async () => {
    mockFindUnique.mockResolvedValue(makeQuestion());
    const createdAnswer = {
      id: 'a-1',
      questionId: 'q-1',
      isCorrect: true,
      answeredAt: new Date(),
    };
    mockTransaction.mockImplementation(
      async (fn: (tx: Record<string, unknown>) => Promise<unknown>) =>
        fn({
          userAnswer: { create: vi.fn().mockResolvedValue(createdAnswer) },
          reviewSchedule: {
            findUnique: vi.fn().mockResolvedValue(null),
            upsert: vi.fn().mockResolvedValue({}),
          },
        }),
    );

    const res = await POST(makeRequest({ questionId: 'q-1', isCorrect: true }));
    expect(res.status).toBe(201);
    const data = await res.json();
    expect(data.isCorrect).toBe(true);
  });

  it('不正解時も 201 が返る', async () => {
    mockFindUnique.mockResolvedValue(makeQuestion());
    const createdAnswer = {
      id: 'a-2',
      questionId: 'q-1',
      isCorrect: false,
      answeredAt: new Date(),
    };
    mockTransaction.mockImplementation(
      async (fn: (tx: Record<string, unknown>) => Promise<unknown>) =>
        fn({
          userAnswer: { create: vi.fn().mockResolvedValue(createdAnswer) },
          reviewSchedule: {
            findUnique: vi.fn().mockResolvedValue(null),
            upsert: vi.fn().mockResolvedValue({}),
          },
        }),
    );

    const res = await POST(
      makeRequest({ questionId: 'q-1', isCorrect: false }),
    );
    expect(res.status).toBe(201);
  });

  it('questionId がない場合は 400', async () => {
    const res = await POST(makeRequest({ isCorrect: true }));
    expect(res.status).toBe(400);
  });

  it('isCorrect が boolean でない場合は 400', async () => {
    const res = await POST(
      makeRequest({ questionId: 'q-1', isCorrect: 'yes' }),
    );
    expect(res.status).toBe(400);
  });

  it('存在しない questionId は 404', async () => {
    mockFindUnique.mockResolvedValue(null);
    const res = await POST(
      makeRequest({ questionId: 'not-exist', isCorrect: true }),
    );
    expect(res.status).toBe(404);
  });

  it('不正な JSON は 400', async () => {
    const req = new NextRequest('http://localhost/api/answers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: 'invalid-json',
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });
});
