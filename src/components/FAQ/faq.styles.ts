import styled from "styled-components";

import { breakpoints } from "@/styles/breakpoints";
import { colors, spacing } from "@/styles/tokens";

export const FAQSection = styled.section`
  width: 100%;

  padding: 96px 144px;

  box-sizing: border-box;

  background: ${colors.snow};

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.xl} 97px 96px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.xl} ${spacing.sm};
  }
`;

export const FAQInner = styled.div`
  width: min(100%, 1312px);

  margin: 0 auto;

  display: grid;
  grid-template-columns: 600px minmax(0, 640px);

  column-gap: 72px;

  align-items: start;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;

    grid-template-columns: 1fr;

    row-gap: ${spacing.lg};
  }

  @media (max-width: ${breakpoints.mobile}) {
    row-gap: 32px;
  }
`;

export const FAQIntro = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: ${spacing.sm};

  @media (max-width: ${breakpoints.tablet}) {
    gap: 32px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: ${spacing.sm};
  }
`;

export const FAQHeading = styled.h2`
  margin: 0;

  font-size: 40px;
  line-height: 48px;
  font-weight: 400;

  color: ${colors.carbon};
`;

export const FAQSubcopy = styled.p`
  margin: 0;

  font-size: 20px;
  line-height: 28px;
  font-weight: 400;

  color: ${colors.slate};
`;

export const AccordionGroup = styled.div`
  width: 100%;

  border-top: 1px solid ${colors.carbon};
`;

export const AccordionItem = styled.div`
  width: 100%;

  border-bottom: 1px solid ${colors.carbon};
`;

export const AccordionButton = styled.button`
  width: 100%;

  padding: ${spacing.md} 0;

  border: 0;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: ${spacing.md};

  background: transparent;
  color: ${colors.carbon};

  text-align: left;

  cursor: pointer;

  appearance: none;

  font-family: inherit;

  &:focus-visible {
    outline: 2px solid ${colors.carbon};
    outline-offset: -2px;
  }
`;

export const AccordionQuestion = styled.span`
  flex: 1;

  font-size: 20px;
  line-height: 28px;
  font-weight: 600;

  color: ${colors.carbon};
`;

export const AccordionIcon = styled.span`
  width: 24px;
  height: 24px;

  flex: 0 0 24px;

  display: grid;
  place-items: center;

  font-size: 28px;
  line-height: 24px;
  font-weight: 300;

  color: ${colors.carbon};
`;

export const AccordionAnswer = styled.p`
  margin: -12px 0 ${spacing.md};

  padding-right: 48px;

  font-size: 20px;
  line-height: 28px;
  font-weight: 400;

  color: ${colors.slate};

  @media (max-width: ${breakpoints.mobile}) {
    padding-right: 0;
  }
`;