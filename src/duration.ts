export function formatDuration(seconds: number): string {
  const secs = Math.round(seconds);

  if (secs < 0) {
    throw new Error("seconds must be non-negative");
  }

  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;

  let result = "";
  if (h > 0) result += `${h}h`;
  if (m > 0) result += `${m}m`;
  if (s > 0 || result === "") result += `${s}s`;

  return result;
}
