export function calcPoints(hits: string): number {
  if (!hits.trim()) return 0;

  const parts = hits.trim().split(/\s+/).map(Number);
  if (parts.some(isNaN)) return 0;

  let sum = 0;
  for (let i = 0; i < parts.length - 1; i += 2) {
    const multiplier = parts[i];
    const sector = parts[i + 1];
    if (![1, 2, 3].includes(multiplier)) return 0;
    if (sector < 1 || sector > 20) return 0;

    sum += multiplier * sector;
  }
  return sum;
}

export function possibleCheckout(x: number): string {
  const remaining = 501 - x;
  if (remaining <= 0 || remaining % 2 !== 0) {
    return "Kein Checkout möglich";
  }

  const sector = remaining / 2;
  if (sector >= 1 && sector <= 20) {
    return `Double ${sector}`;
  }

  return "Kein Checkout möglich";
}
