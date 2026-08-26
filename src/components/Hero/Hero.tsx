"use client";

import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

import {
  HeroInner,
  HeroSection,
} from "./hero.styles";

/*
 * Hero is the composition layer.
 *
 * Content, visual presentation, and styling
 * are handled by focused child modules.
 */
export function Hero() {
  return (
    <HeroSection>
      <HeroInner>
        <HeroContent />
        <HeroVisual />
      </HeroInner>
    </HeroSection>
  );
}