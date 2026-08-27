"use client";

import { useEffect, useState } from "react";

import {
  HeaderInner,
  HeaderWrapper,
  LogoMark,
  ThemeButton,
} from "./header.styles";

type Theme = "light" | "dark";

export function Header() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const savedTheme = window.localStorage.getItem("theme");

    return savedTheme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <HeaderWrapper>
      <HeaderInner>
        <LogoMark aria-hidden="true" />

        <ThemeButton
          type="button"
          aria-label={`Switch to ${
            theme === "light" ? "dark" : "light"
          } mode`}
          title={`Switch to ${
            theme === "light" ? "dark" : "light"
          } mode`}
          onClick={toggleTheme}
        >
          {theme === "light" ? "☼" : "☾"}
        </ThemeButton>
      </HeaderInner>
    </HeaderWrapper>
  );
}