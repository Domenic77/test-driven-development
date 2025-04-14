
describe("isValid", () => {
  test("gültige ISBNs werden erkannt", () => {
    expect(isValid("9780306406157")).toBe(true);
    expect(isValid("9783161484100")).toBe(true);
    expect(isValid("9791234567896")).toBe(true);
  });

  test("ungültige ISBNs werden erkannt", () => {
    expect(isValid("9780306406158")).toBe(false); // falsche Prüfziffer
    expect(isValid("9783161484101")).toBe(false);
  });

  test("ISBN mit ungültiger Länge", () => {
    expect(isValid("97803064061")).toBe(false);  // zu kurz
    expect(isValid("97803064061573")).toBe(false); // zu lang
  });

  test("ISBN mit ungültigen Zeichen", () => {
    expect(isValid("97803A6406157")).toBe(false);
    expect(isValid("abcdefghijklm")).toBe(false);
  });

  test("ISBN mit Leerzeichen oder Bindestrichen", () => {
    expect(isValid("978-0-306-40615-7")).toBe(true);
    expect(isValid(" 978 0306 40615 7 ")).toBe(true);
  });
});
import { isValid } from "./isbn13";

describe("isValid", () => {
  test("gültige ISBNs werden erkannt", () => {
    expect(isValid("9780306406157")).toBe(true);
    expect(isValid("9783161484100")).toBe(true);
    expect(isValid("9791234567896")).toBe(true);
  });

  test("ungültige ISBNs werden erkannt", () => {
    expect(isValid("9780306406158")).toBe(false); // falsche Prüfziffer
    expect(isValid("9783161484101")).toBe(false);
  });

  test("ISBN mit ungültiger Länge", () => {
    expect(isValid("97803064061")).toBe(false);  // zu kurz
    expect(isValid("97803064061573")).toBe(false); // zu lang
  });

  test("ISBN mit ungültigen Zeichen", () => {
    expect(isValid("97803A6406157")).toBe(false);
    expect(isValid("abcdefghijklm")).toBe(false);
  });

  test("ISBN mit Leerzeichen oder Bindestrichen", () => {
    expect(isValid("978-0-306-40615-7")).toBe(true);
    expect(isValid(" 978 0306 40615 7 ")).toBe(true);
  });
});
