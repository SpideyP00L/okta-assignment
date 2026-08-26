import {
  HeroVisualWrapper,
  VisualAccent,
  VisualCard,
} from "./hero.styles";

/*
 * Decorative visual shown on the right side
 * of the Hero.
 */
export function HeroVisual() {
  return (
    <HeroVisualWrapper aria-hidden="true">
      <VisualCard>
        <VisualAccent />
      </VisualCard>
    </HeroVisualWrapper>
  );
}