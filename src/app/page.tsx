import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { QuotesSection } from "@/components/Quotes/QuotesSection";
import { FAQ } from "@/components/FAQ/FAQ";

import { parseQuotes } from "@/lib/parseQuotes";
import { getRandomQuotes } from "@/lib/getRandomQuotes";

export default function Home() {
  const quotes = parseQuotes();
  const featuredQuotes = getRandomQuotes(quotes, 3);

  return (
    <>
      <Header />

      <main>
        <Hero />

        <QuotesSection quotes={featuredQuotes} />
        <FAQ />
      </main>
    </>
  );
}