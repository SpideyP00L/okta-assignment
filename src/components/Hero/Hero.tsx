import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

import {
  HeroInner,
  HeroSection,
} from "./hero.styles";

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