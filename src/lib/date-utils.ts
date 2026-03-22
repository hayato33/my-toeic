// Vercel（UTC）でも JST の「今日」が正しく計算されるよう UTC+9 固定で算出する
const JST_OFFSET_MS = 9 * 60 * 60 * 1000;

export function getStartOfDay(date?: Date): Date {
  const targetJst = new Date(
    (date ? date.getTime() : Date.now()) + JST_OFFSET_MS,
  );
  return new Date(
    Date.UTC(
      targetJst.getUTCFullYear(),
      targetJst.getUTCMonth(),
      targetJst.getUTCDate(),
    ) - JST_OFFSET_MS,
  );
}

export function getEndOfDay(date?: Date): Date {
  const targetJst = new Date(
    (date ? date.getTime() : Date.now()) + JST_OFFSET_MS,
  );
  return new Date(
    Date.UTC(
      targetJst.getUTCFullYear(),
      targetJst.getUTCMonth(),
      targetJst.getUTCDate() + 1,
    ) - JST_OFFSET_MS,
  );
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
