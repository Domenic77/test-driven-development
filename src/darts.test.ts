import { calcPoints, possibleCheckout } from "./darts";

describe("calcPoints", () => {
  test("berechnet korrekte Punktzahl für volle Runde", () => {
    expect(calcPoints("3 20 1 17 2 4")).toBe(85); // 60 + 17 + 8
    expect(calcPoints("2 15 1 18 3 19")).toBe(105); // 30 + 18 + 57
  });

  test("berechnet Punkte bei weniger als 3 Treffern", () => {
    expect(calcPoints("3 20 1 5")).toBe(65); // 60 + 5
    expect(calcPoints("2 10")).toBe(20);
    expect(calcPoints("1 13")).toBe(13);
  });

  test("leere Eingabe ergibt 0 Punkte", () => {
    expect(calcPoints("")).toBe(0);
  });

  test("ignoriert ungerade Anzahl an Zahlen (z. B. letzter Treffer fehlt)", () => {
    expect(calcPoints("3 20 1")).toBe(60); // 3×20, 1 ist unvollständig
  });

  test("ungültige Eingaben führen zu 0", () => {
    expect(calcPoints("abc def")).toBe(0);
    expect(calcPoints("4 25")).toBe(0); // 4 ist kein gültiger Multiplikator
  });
});

describe("possibleCheckout", () => {
  test("liefert gültigen Double Checkout bei gerader verbleibender Punktzahl ≤ 40", () => {
    expect(possibleCheckout(477)).toBe("Double 12"); // 501-477 = 24
    expect(possibleCheckout(481)).toBe("Double 10"); // 20
    expect(possibleCheckout(499)).toBe("Double 1"); // 2
  });

  test("gibt 'Kein Checkout möglich' bei ungerader verbleibender Punktzahl", () => {
    expect(possibleCheckout(480)).toBe("Kein Checkout möglich");
    expect(possibleCheckout(498)).toBe("Kein Checkout möglich"); // 3 übrig
  });

  test("gibt 'Kein Checkout möglich' bei zu hoher Zahl (> 40)", () => {
    expect(possibleCheckout(441)).toBe("Kein Checkout möglich"); // 60 übrig
    expect(possibleCheckout(400)).toBe("Kein Checkout möglich"); // 101 übrig
  });
});
