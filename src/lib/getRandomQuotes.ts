import type { Quote } from "@/types/quote";

/**
 * Returns a random set of unique quotes without mutating
 * the original array.
 */
export function getRandomQuotes(
  quotes: Quote[],
  count = 3
): Quote[] {
  if (count <= 0 || quotes.length === 0) {
    return [];
  }

  const shuffledQuotes = [...quotes];

  for (let i = shuffledQuotes.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(
      Math.random() * (i + 1)
    );

    [
      shuffledQuotes[i],
      shuffledQuotes[randomIndex],
    ] = [
      shuffledQuotes[randomIndex],
      shuffledQuotes[i],
    ];
  }

  const safeCount = Math.min(
    count,
    shuffledQuotes.length
  );

  return shuffledQuotes.slice(0, safeCount);
}