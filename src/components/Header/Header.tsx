"use client";

import styled from "styled-components";
import { colors, spacing } from "@/styles/tokens";

const HeaderWrapper = styled.header`
  width: 100%;
  background: ${colors.snow};
  color: ${colors.carbon};
`;

const HeaderInner = styled.div`
  width: min(100%, 1312px);
  margin: 0 auto;
  min-height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-inline: ${spacing.sm};
`;

const LogoMark = styled.div`
  width: 40px;
  height: 40px;
  border: 6px solid ${colors.carbon};
  border-radius: 50%;
`;

const ThemeButton = styled.button`
  width: 40px;
  height: 40px;

  display: grid;
  place-items: center;

  border: 0;
  background: transparent;
  color: inherit;

  border-radius: ${spacing.xs};

  &:focus-visible {
    outline: 2px solid ${colors.carbon};
    outline-offset: 2px;
  }
`;

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <LogoMark aria-hidden="true" />

        <ThemeButton
          type="button"
          aria-label="Toggle color theme"
          title="Toggle color theme"
        >
          ☼
        </ThemeButton>
      </HeaderInner>
    </HeaderWrapper>
  );
}