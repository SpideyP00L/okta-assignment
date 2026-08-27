import {
  HeroVisualImage,
  HeroVisualWrapper,
} from "./hero.styles";

/*
 * Decorative hero artwork exported directly from Figma.
 */
export function HeroVisual() {
  return (
    <HeroVisualWrapper aria-hidden="true">
      <HeroVisualImage
        src="/images/hero/hero-visual.svg"
        alt=""
      />
    </HeroVisualWrapper>
  );
}