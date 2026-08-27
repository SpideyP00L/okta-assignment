import type { Quote } from "@/types/quote";

import {
  EmptyMessage,
  QuoteAuthor,
  QuoteText,
  TextContentBox,
} from "./carousel.styles";

interface QuoteCardProps {
  quote?: Quote;
}

export function QuoteCard({ quote }: QuoteCardProps) {
  if (!quote) {
    return (
      <TextContentBox>
        <EmptyMessage>
          No quotes are available.
        </EmptyMessage>
      </TextContentBox>
    );
  }

  return (
    <TextContentBox>
      <QuoteText>{quote.quote}</QuoteText>
      <QuoteAuthor>{quote.author}</QuoteAuthor>
    </TextContentBox>
  );
}