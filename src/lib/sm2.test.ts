import { describe, it, expect } from 'vitest';
import { sm2, SM2Input } from './sm2';

const DEFAULT_EASE = 2.5;

function makeInput(overrides: Partial<SM2Input> = {}): SM2Input {
  return {
    repetitions: 0,
    interval: 1,
    easeFactor: DEFAULT_EASE,
    quality: 4,
    ...overrides,
  };
}

describe('sm2', () => {
  describe('初回正解 (quality=4)', () => {
    it('interval=1, repetitions=1 になる', () => {
      const result = sm2(makeInput({ quality: 4 }));
      expect(result.repetitions).toBe(1);
      expect(result.interval).toBe(1);
      expect(result.easeFactor).toBeCloseTo(2.5);
    });
  });

  describe('2回目正解', () => {
    it('interval=6 になる', () => {
      const result = sm2(
        makeInput({ repetitions: 1, interval: 1, quality: 4 }),
      );
      expect(result.repetitions).toBe(2);
      expect(result.interval).toBe(6);
    });
  });

  describe('3回目以降の正解', () => {
    it('interval = round(prev_interval * easeFactor)', () => {
      const result = sm2(
        makeInput({ repetitions: 2, interval: 6, easeFactor: 2.5, quality: 4 }),
      );
      expect(result.repetitions).toBe(3);
      expect(result.interval).toBe(15); // round(6 * 2.5) = 15
    });
  });

  describe('不正解 (quality=1)', () => {
    it('repetitions=0, interval=1 にリセットされる', () => {
      const result = sm2(
        makeInput({
          repetitions: 5,
          interval: 30,
          easeFactor: 2.5,
          quality: 1,
        }),
      );
      expect(result.repetitions).toBe(0);
      expect(result.interval).toBe(1);
    });

    it('easeFactor が下がるが最低値 1.3 を下回らない', () => {
      const result = sm2(makeInput({ easeFactor: 1.3, quality: 1 }));
      expect(result.easeFactor).toBe(1.3);
    });
  });

  describe('quality=3 (ボーダー)', () => {
    it('間隔が伸びる（リセットされない）', () => {
      const result = sm2(
        makeInput({ repetitions: 2, interval: 6, easeFactor: 2.5, quality: 3 }),
      );
      expect(result.repetitions).toBe(3);
      expect(result.interval).toBe(15);
    });

    it('easeFactor が下がる', () => {
      const result = sm2(makeInput({ easeFactor: 2.5, quality: 3 }));
      expect(result.easeFactor).toBeCloseTo(2.36);
    });
  });

  describe('quality=5 (最高評価)', () => {
    it('easeFactor が上がる', () => {
      const result = sm2(makeInput({ easeFactor: 2.5, quality: 5 }));
      expect(result.easeFactor).toBeCloseTo(2.6);
    });
  });

  describe('easeFactor の最低値制限', () => {
    it('どれだけ低い quality でも 1.3 を下回らない', () => {
      const result = sm2(makeInput({ easeFactor: 1.3, quality: 0 }));
      expect(result.easeFactor).toBe(1.3);
    });
  });

  describe('連続正解シミュレーション', () => {
    it('正解を重ねると間隔が伸びていく', () => {
      let state = { repetitions: 0, interval: 1, easeFactor: 2.5 };
      const intervals: number[] = [];

      for (let i = 0; i < 5; i++) {
        state = sm2({ ...state, quality: 4 });
        intervals.push(state.interval);
      }

      // 1, 6, 15, 38, 95 のような増加パターン
      expect(intervals[0]).toBe(1);
      expect(intervals[1]).toBe(6);
      for (let i = 2; i < intervals.length; i++) {
        expect(intervals[i]).toBeGreaterThan(intervals[i - 1]);
      }
    });
  });

  describe('不正解後の復帰シミュレーション', () => {
    it('不正解でリセット後、正解で再びスケジュールが伸びる', () => {
      // 3回正解 → 不正解 → 2回正解
      let state = { repetitions: 0, interval: 1, easeFactor: 2.5 };

      // 3回正解
      for (let i = 0; i < 3; i++) {
        state = sm2({ ...state, quality: 4 });
      }
      expect(state.repetitions).toBe(3);
      expect(state.interval).toBeGreaterThan(6);

      // 不正解でリセット
      state = sm2({ ...state, quality: 1 });
      expect(state.repetitions).toBe(0);
      expect(state.interval).toBe(1);

      // 再び正解
      state = sm2({ ...state, quality: 4 });
      expect(state.repetitions).toBe(1);
      expect(state.interval).toBe(1);

      state = sm2({ ...state, quality: 4 });
      expect(state.repetitions).toBe(2);
      expect(state.interval).toBe(6);
    });
  });

  describe('入力バリデーション', () => {
    it('quality が範囲外のとき RangeError を投げる', () => {
      expect(() => sm2(makeInput({ quality: -1 }))).toThrow(RangeError);
      expect(() => sm2(makeInput({ quality: 6 }))).toThrow(RangeError);
    });

    it('quality が小数のとき RangeError を投げる', () => {
      expect(() => sm2(makeInput({ quality: 3.5 }))).toThrow(RangeError);
    });

    it('repetitions が負のとき RangeError を投げる', () => {
      expect(() => sm2(makeInput({ repetitions: -1 }))).toThrow(RangeError);
    });

    it('interval が 0 以下のとき RangeError を投げる', () => {
      expect(() => sm2(makeInput({ interval: 0 }))).toThrow(RangeError);
      expect(() => sm2(makeInput({ interval: -1 }))).toThrow(RangeError);
    });

    it('easeFactor が 0 以下のとき RangeError を投げる', () => {
      expect(() => sm2(makeInput({ easeFactor: 0 }))).toThrow(RangeError);
    });
  });
});
