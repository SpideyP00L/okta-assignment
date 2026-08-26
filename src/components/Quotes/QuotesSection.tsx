"use client";

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

/*
 * QuotesSection now acts only as the composition layer.
 *
 * Visual responsibilities are delegated to focused
 * child components:
 *
 * - CarouselPreview
 * - QuoteCard
 * - CarouselNavigation
 */
export function QuotesSection({
  quotes,
}: QuotesSectionProps) {
  const activeQuote = quotes[0];

  return (
    <Section>
      <Carousel>
        <CarouselPreview side="left" />

        <MainSlide>
          <QuoteCard quote={activeQuote} />

          <CarouselNavigation />
        </MainSlide>

        <CarouselPreview side="right" />
      </Carousel>
    </Section>
  );
}