import { vi } from 'vitest';

export const prisma = {
  question: {
    findMany: vi.fn(),
    findUnique: vi.fn(),
  },
  userAnswer: {
    create: vi.fn(),
    count: vi.fn(),
  },
  reviewSchedule: {
    findMany: vi.fn(),
    findUnique: vi.fn(),
    upsert: vi.fn(),
    count: vi.fn(),
  },
  $queryRaw: vi.fn(),
  $transaction: vi.fn(),
};
