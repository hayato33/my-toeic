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

const mockReviewCount = prisma.reviewSchedule.count as ReturnType<typeof vi.fn>;
const mockAnswerCount = prisma.userAnswer.count as ReturnType<typeof vi.fn>;
const mockQueryRaw = prisma.$queryRaw as ReturnType<typeof vi.fn>;

describe('GET /api/dashboard', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('正常系: 各フィールドが返る', async () => {
    mockReviewCount.mockResolvedValue(3);
    mockAnswerCount.mockResolvedValue(2);
    mockQueryRaw.mockResolvedValue([
      { answer_date: new Date().toISOString().split('T')[0] },
    ]);

    const res = await GET();
    const data = await res.json();

    expect(data.reviewCount).toBe(3);
    expect(data.answeredTodayCount).toBe(2);
    expect(data.newQuotaRemaining).toBe(8); // 10 - 2
    expect(typeof data.streak).toBe('number');
  });

  it('未学習状態: streak=0, answeredTodayCount=0, newQuotaRemaining=10', async () => {
    mockReviewCount.mockResolvedValue(0);
    mockAnswerCount.mockResolvedValue(0);
    mockQueryRaw.mockResolvedValue([]);

    const res = await GET();
    const data = await res.json();

    expect(data.streak).toBe(0);
    expect(data.answeredTodayCount).toBe(0);
    expect(data.newQuotaRemaining).toBe(10);
  });

  it('ノルマ達成済み: newQuotaRemaining=0', async () => {
    mockReviewCount.mockResolvedValue(0);
    mockAnswerCount.mockResolvedValue(10);
    mockQueryRaw.mockResolvedValue([
      { answer_date: new Date().toISOString().split('T')[0] },
    ]);

    const res = await GET();
    const data = await res.json();

    expect(data.newQuotaRemaining).toBe(0);
    expect(data.answeredTodayCount).toBe(10);
  });
});
