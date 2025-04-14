import { play } from "./rock-paper-scissors";

describe("play", () => {
  test.each([
    ["rock", "scissors", 1],
    ["scissors", "paper", 1],
    ["paper", "rock", 1],
    ["scissors", "rock", 2],
    ["paper", "scissors", 2],
    ["rock", "paper", 2],
    ["rock", "rock", 0],
    ["scissors", "scissors", 0],
    ["paper", "paper", 0],
  ])('play("%s", "%s") should return %i', (p1, p2, expected) => {
    expect(play(p1, p2)).toBe(expected);
  });

  test("ignores case and whitespace", () => {
    expect(play(" Rock ", "SCISSORS")).toBe(1);
    expect(play(" PAPER", "rock ")).toBe(1);
    expect(play("Scissors", "  paper")).toBe(1);
  });

  test("throws error on invalid input", () => {
    expect(() => play("banana", "rock")).toThrow("Invalid move");
    expect(() => play("rock", "lizard")).toThrow();
    expect(() => play("", "rock")).toThrow();
  });
});
