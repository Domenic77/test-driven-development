import { formatDuration } from "./duration";

describe("formatDuration", () => {
  test("formats seconds under 60", () => {
    expect(formatDuration(0)).toBe("0s");
    expect(formatDuration(33)).toBe("33s");
  });

  test("formats seconds into minutes and seconds", () => {
    expect(formatDuration(123)).toBe("2m3s");
    expect(formatDuration(500)).toBe("8m20s");
  });

  test("formats full hours only", () => {
    expect(formatDuration(3600)).toBe("1h");
  });

  test("formats hours, minutes and seconds", () => {
    expect(formatDuration(3999)).toBe("1h6m39s"); // Rundung beachten
  });

  test("rounds non-integer seconds", () => {
    expect(formatDuration(59.7)).toBe("1m");
    expect(formatDuration(59.4)).toBe("59s");
    expect(formatDuration(3599.5)).toBe("1h");
  });

  test("throws an error on negative input", () => {
    expect(() => formatDuration(-1)).toThrow("seconds must be non-negative");
    expect(() => formatDuration(-100)).toThrow();
  });
});
