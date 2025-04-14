
export function isValid(isbn13: string): boolean {
  // Nur Ziffern berücksichtigen
  const digitsOnly = isbn13.replace(/[^0-9]/g, "");

  if (digitsOnly.length !== 13) {
    return false;
  }

  if (!/^\d{13}$/.test(digitsOnly)) {
    return false;
  }

  const digits = digitsOnly.split("").map(Number);
  const checksum =
    digits
      .slice(0, 12)
      .reduce((sum, digit, index) => sum + digit * (index % 2 === 0 ? 1 : 3), 0);

  const checkDigit = (10 - (checksum % 10)) % 10;
  return checkDigit === digits[12];
}
