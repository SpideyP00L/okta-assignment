import styled from "styled-components";

import { breakpoints } from "@/styles/breakpoints";
import { colors, radius, spacing } from "@/styles/tokens";

export const Section = styled.section`
  width: 100%;

  overflow: visible;

  background: ${colors.snow};

  padding: 96px 32px 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${spacing.xl} ${spacing.md} 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.xl} 0 0;

    overflow: hidden;
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

  overflow: visible;

  @media (max-width: ${breakpoints.tablet}) {
    width: min(100%, 834px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    height: 626px;

    overflow: hidden;
  }
`;

export const PreviewCard = styled.div`
  position: absolute;

  top: 50%;

  width: 298px;
  height: 560px;

  overflow: hidden;

  z-index: 1;

  transform: translateY(-50%);

  @media (max-width: ${breakpoints.tablet}) {
    width: 250px;
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

  border-radius: ${radius.large};

  /*
   * Light-mode radial fill.
   */
  background: radial-gradient(
    ellipse at 61% 62%,
    var(--carousel-start) 0%,
    var(--carousel-end) 84%
  );

  /*
   * Light-mode accessibility gradient.
   */
  &::after {
    content: "";

    position: absolute;
    inset: 0;

    z-index: 0;

    pointer-events: none;

    background: linear-gradient(
      to bottom,
      rgba(25, 25, 25, 0) 0%,
      rgba(25, 25, 25, 0) 55%,
      rgba(25, 25, 25, 0.5) 100%
    );

    opacity: 0.6;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  /*
   * Dark desktop carousel.
   *
   * Figma:
   * #FF6217 -> #490186 -> #191919
   */
  html[data-theme="dark"] & {
    background: radial-gradient(
      ellipse at 61% 62%,
      var(--carousel-start) 0%,
      var(--carousel-middle) 62%,
      var(--carousel-end) 96%
    );

    &::after {
      display: none;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: calc(100% - 128px);

    background: radial-gradient(
      ellipse at 57% 60%,
      var(--carousel-start) 0%,
      var(--carousel-end) 92%
    );

    &::after {
      background: linear-gradient(
        to bottom,
        rgba(25, 25, 25, 0) 0%,
        rgba(25, 25, 25, 0) 58%,
        rgba(25, 25, 25, 0.5) 100%
      );

      opacity: 1;
    }

    html[data-theme="dark"] & {
      background: radial-gradient(
        ellipse at 57% 60%,
        var(--carousel-start) 0%,
        var(--carousel-middle) 62%,
        var(--carousel-end) 96%
      );

      &::after {
        display: none;
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: calc(100% - 32px);
    height: 566px;

    margin: 30px auto;

    padding: ${spacing.sm};

    border-radius: 16px;

    background: radial-gradient(
      ellipse at 55% 56%,
      var(--carousel-start) 0%,
      var(--carousel-end) 92%
    );

    &::after {
      background: linear-gradient(
        to bottom,
        rgba(25, 25, 25, 0) 0%,
        rgba(25, 25, 25, 0) 60%,
        rgba(25, 25, 25, 0.5) 100%
      );

      opacity: 0.8;
    }

    html[data-theme="dark"] & {
      background: radial-gradient(
        ellipse at 55% 56%,
        var(--carousel-start) 0%,
        var(--carousel-middle) 62%,
        var(--carousel-end) 96%
      );

      &::after {
        display: none;
      }
    }
  }
`;

export const TextContentBox = styled.div`
  width: min(496px, 100%);

  min-height: 200px;

  padding: 32px ${spacing.md};

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

    padding: ${spacing.md} ${spacing.sm};

    gap: ${spacing.sm};
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

export const ProgressBar = styled.span<{
  $active?: boolean;
}>`
  display: block;

  flex: 1;

  height: 5px;

  border-radius: ${radius.large};

  background-color: ${({ $active }) =>
    $active
      ? "var(--carousel-indicator-active)"
      : "var(--carousel-indicator-inactive)"};

  opacity: ${({ $active }) => ($active ? 1 : 0.65)};

  transition:
    background-color 220ms ease,
    opacity 220ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (max-width: ${breakpoints.mobile}) {
    &:not(:last-child) {
      margin-right: ${spacing.sm};
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

export const DesktopArrow = styled.span`
  display: inline;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const MobileArrow = styled.span`
  display: none;

  @media (max-width: ${breakpoints.mobile}) {
    display: inline;
  }
`;