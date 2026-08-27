"use client";

import {
  HeaderInner,
  HeaderWrapper,
  LogoMark,
  ThemeButton,
  LightThemeIcon,
  DarkThemeIcon,
} from "./header.styles";

export function Header() {
  const toggleTheme = () => {
    const root = document.documentElement;

    const currentTheme =
      root.dataset.theme === "dark"
        ? "dark"
        : "light";

    const nextTheme =
      currentTheme === "light"
        ? "dark"
        : "light";

    root.dataset.theme = nextTheme;

    localStorage.setItem(
      "theme",
      nextTheme
    );
  };

  return (
    <HeaderWrapper>
      <HeaderInner>
        <LogoMark aria-hidden="true" />

        <ThemeButton
          type="button"
          aria-label="Toggle color theme"
          title="Toggle color theme"
          onClick={toggleTheme}
        >
          <LightThemeIcon aria-hidden="true">
            ☼
          </LightThemeIcon>

          <DarkThemeIcon aria-hidden="true">
            ☾
          </DarkThemeIcon>
        </ThemeButton>
      </HeaderInner>
    </HeaderWrapper>
  );
}