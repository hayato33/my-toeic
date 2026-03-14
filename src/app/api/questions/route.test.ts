import { describe, it, expect, vi, beforeEach } from 'vitest';
import { NextRequest } from 'next/server';
import { GET } from './route';

vi.mock('@/lib/prisma', () => import('@/lib/__mocks__/prisma'));

import { prisma } from '@/lib/prisma';

const mockFindMany = prisma.question.findMany as ReturnType<typeof vi.fn>;

const makeQuestion = (overrides = {}) => ({
  id: '1',
  type: 'vocabulary',
  content: 'test',
  choices: '["a","b","c","d"]',
  answer: 'a',
  explanation: 'explanation',
  createdAt: new Date(),
  ...overrides,
});

describe('GET /api/questions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('全件取得できる', async () => {
    mockFindMany.mockResolvedValue([makeQuestion()]);

    const req = new NextRequest('http://localhost/api/questions');
    const res = await GET(req);
    const data = await res.json();

    expect(data).toHaveLength(1);
    expect(data[0].choices).toEqual(['a', 'b', 'c', 'd']);
    expect(mockFindMany).toHaveBeenCalledWith(
      expect.objectContaining({ where: {} }),
    );
  });

  it('type=vocabulary でフィルタされる', async () => {
    mockFindMany.mockResolvedValue([makeQuestion({ type: 'vocabulary' })]);

    const req = new NextRequest(
      'http://localhost/api/questions?type=vocabulary',
    );
    await GET(req);

    expect(mockFindMany).toHaveBeenCalledWith(
      expect.objectContaining({ where: { type: 'vocabulary' } }),
    );
  });

  it('無効な type はフィルタを無視する', async () => {
    mockFindMany.mockResolvedValue([makeQuestion()]);

    const req = new NextRequest('http://localhost/api/questions?type=invalid');
    await GET(req);

    expect(mockFindMany).toHaveBeenCalledWith(
      expect.objectContaining({ where: {} }),
    );
  });

  it('limit=5 で take が設定される', async () => {
    mockFindMany.mockResolvedValue([]);

    const req = new NextRequest('http://localhost/api/questions?limit=5');
    await GET(req);

    expect(mockFindMany).toHaveBeenCalledWith(
      expect.objectContaining({ take: 5 }),
    );
  });

  it('無効な limit は無視される', async () => {
    mockFindMany.mockResolvedValue([]);

    const req = new NextRequest('http://localhost/api/questions?limit=-1');
    await GET(req);

    const call = mockFindMany.mock.calls[0][0];
    expect(call.take).toBeUndefined();
  });

  it('date フィルタで createdAt 範囲が設定される', async () => {
    mockFindMany.mockResolvedValue([]);

    const req = new NextRequest(
      'http://localhost/api/questions?date=2026-01-01',
    );
    await GET(req);

    const call = mockFindMany.mock.calls[0][0];
    expect(call.where.createdAt).toBeDefined();
    expect(call.where.createdAt.gte).toEqual(new Date('2026-01-01'));
  });
});
