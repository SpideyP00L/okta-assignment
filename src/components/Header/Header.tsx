"use client";

import {
  HeaderInner,
  HeaderWrapper,
  LogoMark,
  ThemeButton,
} from "./header.styles";

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