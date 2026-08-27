import styled from "styled-components";

import { colors, radius, spacing } from "@/styles/tokens";
import { breakpoints } from "@/styles/breakpoints";

export const HeroSection = styled.section`
  width: 100%;

  background: ${colors.surfaceSecondary};

  @media (max-width: ${breakpoints.tablet}) {
    padding-inline: 33px;

    background: ${colors.snow};
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding-inline: 0;
  }
`;

export const HeroInner = styled.div`
  width: min(100%, 1440px);
  margin: 0 auto;

  display: grid;
  grid-template-columns:
    minmax(0, 600px)
    600px;

  gap: 112px;

  padding-inline: ${spacing.xl};

  box-sizing: border-box;

  background: ${colors.surfaceSecondary};

  /*
   * Desktop Figma geometry:
   * 64 + 600 + 112 + 600 + 64 = 1440px
   */
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;

    grid-template-columns: 1fr;

    gap: 0;

    padding: 0;

    border-radius: 0 0 ${radius.large} ${radius.large};

    overflow: hidden;
  }

  @media (max-width: ${breakpoints.mobile}) {
    border-radius: 0 0 16px 16px;
  }
`;

export const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  min-height: 548px;

  @media (max-width: ${breakpoints.tablet}) {
    min-height: 0;

    padding: 48px ${spacing.xl};

    box-sizing: border-box;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spacing.lg} ${spacing.sm};
  }
`;

export const Breadcrumb = styled.p`
  margin: 0 0 ${spacing.sm};

  font-size: 16px;
  line-height: 24px;

  color: ${colors.carbon};
`;

export const Title = styled.h1`
  margin: 0;
  max-width: 600px;

  font-size: 56px;
  line-height: 64px;
  font-weight: 400;

  color: ${colors.carbon};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 40px;
    line-height: 48px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const Description = styled.p`
  margin: ${spacing.md} 0 0;
  max-width: 600px;

  font-size: 24px;
  line-height: 32px;

  color: ${colors.slate};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
    line-height: 28px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${spacing.sm};

  margin-top: ${spacing.xl};

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;

    margin-top: ${spacing.lg};
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 32px;
  }
`;

export const Button = styled.button<{
  $variant: "primary" | "secondary";
}>`
  min-height: 64px;

  padding: 16px 48px;

  border-radius: ${radius.small};

  border: ${({ $variant }) =>
    $variant === "secondary"
      ? `1.5px solid ${colors.carbon}`
      : "1.5px solid transparent"};

  background: ${({ $variant }) =>
    $variant === "primary"
      ? colors.carbon
      : "transparent"};

  color: ${({ $variant }) =>
    $variant === "primary"
      ? colors.snow
      : colors.carbon};

  font-size: 20px;
  line-height: 32px;
  font-weight: 500;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }

  &:focus-visible {
    outline: 2px solid ${colors.carbon};
    outline-offset: 3px;
  }
`;

export const HeroVisualWrapper = styled.div`
  position: relative;

  width: 600px;
  height: 548px;

  overflow: hidden;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 560px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 390px;
  }
`;

/*
 * The exported Figma artwork fills each responsive
 * image frame directly.
 */
export const HeroVisualImage = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: fill;

  pointer-events: none;
  user-select: none;
`;