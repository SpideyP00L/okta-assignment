import styled from "styled-components";

import { colors } from "@/styles/tokens";
import { breakpoints } from "@/styles/breakpoints";

/*
 * Shared styled-components for the Quotes carousel.
 *
 * Keeping layout styles here makes the individual
 * carousel components smaller and easier to debug.
 */

export const Section = styled.section`
  width: 100%;
  overflow: hidden;

  background: ${colors.snow};

  padding: 0 32px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 16px;
  }
`;

export const Carousel = styled.div`
  position: relative;

  width: min(100%, 1536px);
  height: 628px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  @media (max-width: ${breakpoints.tablet}) {
    width: min(100%, 834px);
    height: 628px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    height: auto;

    overflow: visible;
  }
`;

export const PreviewCard = styled.div`
  position: absolute;

  top: 50%;
  transform: translateY(-50%);

  width: 298px;
  height: 560px;

  overflow: hidden;

  border-radius: 18px;

  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    width: 250px;
    height: 560px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const MainSlide = styled.div`
  position: relative;

  z-index: 2;

  width: min(1312px, calc(100% - 224px));
  height: 628px;

  padding: 32px;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow: hidden;

  border-radius: 24px;

  background:
    radial-gradient(
      circle at 50% 35%,
      rgb(151, 169, 255) 0%,
      rgb(180, 192, 244) 38%,
      rgb(214, 220, 239) 68%,
      rgb(164, 169, 185) 100%
    );

  @media (max-width: ${breakpoints.tablet}) {
    width: calc(100% - 128px);
    padding: 32px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    height: 566px;

    padding: 16px;

    border-radius: 16px;
  }
`;

export const TextContentBox = styled.div`
  width: min(496px, 100%);

  min-height: 200px;

  padding: 32px 24px;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: 20px;

  border-radius: 16px;

  background: ${colors.surfaceSecondary};

  @media (max-width: ${breakpoints.tablet}) {
    width: min(368px, 100%);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    min-height: 0;

    padding: 24px 16px;

    gap: 16px;
  }
`;

export const QuoteText = styled.blockquote`
  margin: 0;

  font-size: 20px;
  line-height: 28px;
  font-weight: 400;

  color: ${colors.slate};

  &::before {
    content: "“";
  }

  &::after {
    content: "”";
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const QuoteAuthor = styled.p`
  margin: 0;

  font-size: 24px;
  line-height: 32px;
  font-weight: 400;

  color: ${colors.carbon};
`;

export const EmptyMessage = styled.p`
  margin: 0;

  font-size: 18px;
  line-height: 28px;

  color: ${colors.slate};
`;

export const BottomNav = styled.div`
  width: 100%;
  height: 40px;

  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    90px;

  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    height: 90px;

    grid-template-columns:
      minmax(0, 1fr)
      40px;

    align-items: end;
  }
`;

export const WayfindingWrapper = styled.div`
  width: 100%;
  height: 40px;

  padding-left: 90px;

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.mobile}) {
    height: 21px;

    padding-left: 0;

    justify-content: flex-start;
  }
`;

export const Progress = styled.div`
  width: 250px;
  height: 40px;

  display: flex;
  align-items: center;

  gap: 12px;

  @media (max-width: ${breakpoints.mobile}) {
    width: 254px;
    height: 21px;

    gap: 0;
  }
`;

export const ProgressBar = styled.span<{ $active?: boolean }>`
  display: block;

  flex: 1;

  height: 5px;

  border-radius: 24px;

  background: ${({ $active }) =>
    $active
      ? colors.surfaceSecondary
      : "rgba(255, 255, 255, 0.45)"};

  @media (max-width: ${breakpoints.mobile}) {
    &:not(:last-child) {
      margin-right: 16px;
    }
  }
`;

export const ArrowGroup = styled.div`
  width: 90px;
  height: 40px;

  display: flex;

  gap: 10px;

  @media (max-width: ${breakpoints.mobile}) {
    width: 40px;
    height: 90px;

    flex-direction: column;

    gap: 10px;
  }
`;

export const ArrowButton = styled.button`
  width: 40px;
  height: 40px;

  flex: 0 0 40px;

  padding: 0;

  border: 0;
  border-radius: 50%;

  display: grid;
  place-items: center;

  background: ${colors.surfaceSecondary};
  color: ${colors.carbon};

  font-family: inherit;
  font-size: 22px;
  line-height: 1;

  cursor: pointer;

  appearance: none;

  &:focus-visible {
    outline: 2px solid ${colors.carbon};
    outline-offset: 2px;
  }
`;