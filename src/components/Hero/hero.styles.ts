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
  width: min(100%, 1312px);
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 64px;

  padding: 64px 16px;

  box-sizing: border-box;

  background: ${colors.surfaceSecondary};

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;

    grid-template-columns: 1fr;

    padding: 48px 64px;

    gap: 40px;

    border-radius: 0 0 24px 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 40px 16px;

    gap: 32px;

    border-radius: 0 0 16px 16px;
  }
`;

export const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    margin-top: 40px;
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
  min-height: 420px;

  display: grid;
  place-items: center;

  position: relative;

  border-radius: ${radius.large};

  background: linear-gradient(
    135deg,
    #f9f6ef 0%,
    #ece8df 50%,
    #b8c6ce 100%
  );

  @media (max-width: ${breakpoints.tablet}) {
    min-height: 360px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    min-height: 300px;
  }
`;

export const VisualCard = styled.div`
  width: min(70%, 280px);
  min-height: 360px;

  position: relative;

  border-radius: ${radius.small};
  background: ${colors.snow};

  box-shadow: 0 20px 40px rgba(25, 25, 25, 0.18);

  @media (max-width: ${breakpoints.tablet}) {
    width: 220px;
    min-height: 300px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 180px;
    min-height: 240px;
  }
`;

export const VisualAccent = styled.div`
  position: absolute;
  top: 55%;
  left: 20%;
  right: 20%;

  height: 44px;

  border-radius: 999px;

  background: #5066ff;
  filter: blur(10px);
`;