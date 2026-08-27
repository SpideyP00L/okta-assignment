import {
  Breadcrumb,
  Button,
  ButtonGroup,
  Description,
  HeroContentWrapper,
  Title,
} from "./hero.styles";

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