import fs from "node:fs";
import path from "node:path";
import Papa from "papaparse";

import type { Quote } from "@/types/quote";

interface QuoteCsvRow {
  id: string;
  author: string;
  quote: string;
}

/**
 * Reads and validates the quotes CSV on the server.
 */
export function parseQuotes(): Quote[] {
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "quotes.csv"
  );

  const csvFile = fs.readFileSync(filePath, "utf8");

  const result = Papa.parse<QuoteCsvRow>(csvFile, {
    header: true,
    skipEmptyLines: true,
  });

  if (result.errors.length > 0) {
    throw new Error(
      `Failed to parse quotes CSV: ${result.errors[0].message}`
    );
  }

  return result.data.map((row, index) => {
    const id = Number(row.id);
    const author = row.author?.trim();
    const quote = row.quote?.trim();

    if (!Number.isFinite(id) || !author || !quote) {
      throw new Error(
        `Invalid quote data found at CSV row ${index + 2}`
      );
    }

    return {
      id,
      author,
      quote,
    };
  });
}