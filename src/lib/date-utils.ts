// Vercel（UTC）でも JST の「今日」が正しく計算されるよう UTC+9 固定で算出する
const JST_OFFSET_MS = 9 * 60 * 60 * 1000;

export function getStartOfDay(date?: Date): Date {
  if (date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }
  const nowJst = new Date(Date.now() + JST_OFFSET_MS);
  return new Date(
    Date.UTC(
      nowJst.getUTCFullYear(),
      nowJst.getUTCMonth(),
      nowJst.getUTCDate(),
    ) - JST_OFFSET_MS,
  );
}

export function getEndOfDay(date?: Date): Date {
  if (date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  }
  const nowJst = new Date(Date.now() + JST_OFFSET_MS);
  return new Date(
    Date.UTC(
      nowJst.getUTCFullYear(),
      nowJst.getUTCMonth(),
      nowJst.getUTCDate() + 1,
    ) - JST_OFFSET_MS,
  );
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
