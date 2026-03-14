import { describe, it, expect } from 'vitest';
import { getStartOfDay, getEndOfDay, addDays } from './date-utils';

describe('getStartOfDay', () => {
  it('returns midnight of the given date', () => {
    const date = new Date(2026, 2, 14, 15, 30, 45);
    const result = getStartOfDay(date);
    expect(result.getFullYear()).toBe(2026);
    expect(result.getMonth()).toBe(2);
    expect(result.getDate()).toBe(14);
    expect(result.getHours()).toBe(0);
    expect(result.getMinutes()).toBe(0);
    expect(result.getSeconds()).toBe(0);
  });

  it('defaults to today when no argument is provided', () => {
    const now = new Date();
    const result = getStartOfDay();
    expect(result.getDate()).toBe(now.getDate());
    expect(result.getHours()).toBe(0);
  });
});

describe('getEndOfDay', () => {
  it('returns midnight of the next day', () => {
    const date = new Date(2026, 2, 14, 15, 30, 45);
    const result = getEndOfDay(date);
    expect(result.getFullYear()).toBe(2026);
    expect(result.getMonth()).toBe(2);
    expect(result.getDate()).toBe(15);
    expect(result.getHours()).toBe(0);
  });

  it('handles end of month correctly', () => {
    const date = new Date(2026, 0, 31);
    const result = getEndOfDay(date);
    expect(result.getMonth()).toBe(1);
    expect(result.getDate()).toBe(1);
  });

  it('handles end of year correctly', () => {
    const date = new Date(2025, 11, 31);
    const result = getEndOfDay(date);
    expect(result.getFullYear()).toBe(2026);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(1);
  });
});

describe('addDays', () => {
  it('adds positive days', () => {
    const date = new Date(2026, 2, 14);
    const result = addDays(date, 5);
    expect(result.getDate()).toBe(19);
  });

  it('does not mutate the original date', () => {
    const date = new Date(2026, 2, 14);
    addDays(date, 5);
    expect(date.getDate()).toBe(14);
  });

  it('handles month boundary', () => {
    const date = new Date(2026, 0, 30);
    const result = addDays(date, 3);
    expect(result.getMonth()).toBe(1);
    expect(result.getDate()).toBe(2);
  });
});
