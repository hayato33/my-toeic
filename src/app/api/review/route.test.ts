import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GET } from './route';

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

const mockFindMany = prisma.reviewSchedule.findMany as ReturnType<typeof vi.fn>;

const makeSchedule = () => ({
  id: 's-1',
  questionId: 'q-1',
  nextReviewAt: new Date(),
  interval: 1,
  easeFactor: 2.5,
  repetitions: 1,
  question: {
    id: 'q-1',
    type: 'vocabulary',
    content: 'test',
    choices: '["a","b","c","d"]',
    answer: 'a',
    explanation: 'x',
    createdAt: new Date(),
  },
});

describe('GET /api/review', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('復習対象が返り choices が JSON パースされている', async () => {
    mockFindMany.mockResolvedValue([makeSchedule()]);

    const res = await GET();
    const data = await res.json();

    expect(data).toHaveLength(1);
    expect(data[0].question.choices).toEqual(['a', 'b', 'c', 'd']);
  });

  it('復習対象がないとき空配列を返す', async () => {
    mockFindMany.mockResolvedValue([]);

    const res = await GET();
    const data = await res.json();

    expect(data).toEqual([]);
  });
});
