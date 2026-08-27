import { FAQ } from "@/components/FAQ/FAQ";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { QuotesSection } from "@/components/Quotes/QuotesSection";

import { getRandomQuotes } from "@/lib/getRandomQuotes";
import { parseQuotes } from "@/lib/parseQuotes";

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

      <Footer />
    </>
  );
}