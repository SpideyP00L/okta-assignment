import type { Quote } from "@/types/quote";

/**
 * Returns a random set of unique quotes without mutating
 * the original input array.
 *
 * Fisher-Yates is used instead of Array.sort(Math.random)
 * because it provides an unbiased shuffle.
 */
export function getRandomQuotes(
  quotes: Quote[],
  count = 3
): Quote[] {
  if (count <= 0 || quotes.length === 0) {
    return [];
  }

  // Fisher-Yates swaps items in place, so we copy the
  // incoming array first to keep the source data immutable.
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