/**
 * SM-2 間隔反復アルゴリズム
 *
 * MVP では正解=4, 不正解=1 の簡略化スケールを使用。
 * 将来的に 0〜5 スケールへの拡張を想定。
 */

export type SM2Input = {
  repetitions: number;
  interval: number;
  easeFactor: number;
  quality: number; // 0〜5（MVP: 正解=4, 不正解=1）
};

export type SM2Output = {
  repetitions: number;
  interval: number;
  easeFactor: number;
};

const MIN_EASE_FACTOR = 1.3;

export function sm2(input: SM2Input): SM2Output {
  const { repetitions, interval, easeFactor, quality } = input;

  // quality が 3 未満 → リセット
  if (quality < 3) {
    return {
      repetitions: 0,
      interval: 1,
      easeFactor: Math.max(
        MIN_EASE_FACTOR,
        easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)),
      ),
    };
  }

  // quality が 3 以上 → 間隔を伸ばす
  let newInterval: number;
  if (repetitions === 0) {
    newInterval = 1;
  } else if (repetitions === 1) {
    newInterval = 6;
  } else {
    newInterval = Math.round(interval * easeFactor);
  }

  const newEaseFactor = Math.max(
    MIN_EASE_FACTOR,
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)),
  );

  return {
    repetitions: repetitions + 1,
    interval: newInterval,
    easeFactor: newEaseFactor,
  };
}
