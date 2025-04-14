export function play(player1: string, player2: string): number {
  const normalize = (input: string): string =>
    input.trim().toLowerCase();

  const validMoves = ["rock", "paper", "scissors"];
  const p1 = normalize(player1);
  const p2 = normalize(player2);

  if (!validMoves.includes(p1) || !validMoves.includes(p2)) {
    throw new Error("Invalid move: must be rock, paper, or scissors");
  }

  if (p1 === p2) return 0;

  const winsAgainst: Record<string, string> = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  return winsAgainst[p1] === p2 ? 1 : 2;
}
