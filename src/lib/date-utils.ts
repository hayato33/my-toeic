export function getStartOfDay(date = new Date()): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function getEndOfDay(date = new Date()): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
