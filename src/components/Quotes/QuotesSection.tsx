"use client";

import { useState } from "react";

import type { Quote } from "@/types/quote";

import {
  Carousel,
  MainSlide,
  Section,
} from "./carousel.styles";

import { CarouselNavigation } from "./CarouselNavigation";
import { CarouselPreview } from "./CarouselPreview";
import { QuoteCard } from "./QuoteCard";

interface QuotesSectionProps {
  quotes: Quote[];
}

export function QuotesSection({
  quotes,
}: QuotesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeQuote = quotes[activeIndex];

  const goToPreviousQuote = () => {
    if (quotes.length === 0) {
      return;
    }

    setActiveIndex(
      (currentIndex) =>
        (currentIndex - 1 + quotes.length) % quotes.length
    );
  };

  const goToNextQuote = () => {
    if (quotes.length === 0) {
      return;
    }

    setActiveIndex(
      (currentIndex) =>
        (currentIndex + 1) % quotes.length
    );
  };

  return (
    <Section>
      <Carousel>
        <CarouselPreview side="left" />

        <MainSlide>
          <QuoteCard quote={activeQuote} />

          <CarouselNavigation
            activeIndex={activeIndex}
            quoteCount={quotes.length}
            onPrevious={goToPreviousQuote}
            onNext={goToNextQuote}
          />
        </MainSlide>

        <CarouselPreview side="right" />
      </Carousel>
    </Section>
  );
}