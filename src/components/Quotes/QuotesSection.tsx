"use client";

import styled from "styled-components";

import type { Quote } from "@/types/quote";

import { colors, radius, spacing } from "@/styles/tokens";
import { breakpoints } from "@/styles/breakpoints";

interface QuotesSectionProps {
  quotes: Quote[];
}

const Section = styled.section`
  background: ${colors.snow};
`;

const SectionInner = styled.div`
  width: min(100%, 1312px);
  margin: 0 auto;
  padding: ${spacing.xl} ${spacing.sm};

  @media (max-width: ${breakpoints.mobile}) {
    padding: 40px 16px;
  }
`;

const SectionTitle = styled.h2`
  margin: 0 0 ${spacing.lg};

  font-size: 40px;
  line-height: 48px;
  font-weight: 400;

  color: ${colors.carbon};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const QuoteList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${spacing.md};

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const QuoteCard = styled.article`
  padding: ${spacing.lg};

  border-radius: ${radius.large};
  background: ${colors.surfaceSecondary};
`;

const QuoteText = styled.blockquote`
  margin: 0;

  font-size: 24px;
  line-height: 32px;
  color: ${colors.carbon};

  &::before {
    content: "“";
  }

  &::after {
    content: "”";
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 20px;
    line-height: 28px;
  }
`;

const QuoteAuthor = styled.p`
  margin: ${spacing.md} 0 0;

  font-size: 18px;
  line-height: 28px;
  font-weight: 500;

  color: ${colors.carbon};
`;

const EmptyMessage = styled.p`
  margin: 0;
  color: ${colors.slate};
`;

export function QuotesSection({
  quotes,
}: QuotesSectionProps) {
  return (
    <Section>
      <SectionInner>
        <SectionTitle>Quotes</SectionTitle>

        {quotes.length > 0 ? (
          <QuoteList>
            {quotes.map((quote) => (
              <QuoteCard key={quote.id}>
                <QuoteText>{quote.quote}</QuoteText>

                <QuoteAuthor>{quote.author}</QuoteAuthor>
              </QuoteCard>
            ))}
          </QuoteList>
        ) : (
          <EmptyMessage>
            No quotes are available.
          </EmptyMessage>
        )}
      </SectionInner>
    </Section>
  );
}