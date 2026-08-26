import {
  Breadcrumb,
  Button,
  ButtonGroup,
  Description,
  HeroContentWrapper,
  Title,
} from "./hero.styles";

/*
 * Text and CTA content for the Hero.
 *
 * Keeping this separate from the visual allows
 * either side of the Hero to change independently.
 */
export function HeroContent() {
  return (
    <HeroContentWrapper>
      <Breadcrumb>
        Platform or Solution › Feature or Page Title
      </Breadcrumb>

      <Title>
        Lorem ipsum dolor sit amet consect alora
      </Title>

      <Description>
        Adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi.
      </Description>

      <ButtonGroup>
        <Button type="button" $variant="primary">
          Primary CTA
        </Button>

        <Button type="button" $variant="secondary">
          Secondary CTA
        </Button>
      </ButtonGroup>
    </HeroContentWrapper>
  );
}