import {
  ArrowButton,
  ArrowGroup,
  BottomNav,
  DesktopArrow,
  MobileArrow,
  Progress,
  ProgressBar,
  WayfindingWrapper,
} from "./carousel.styles";

/*
 * Carousel controls are isolated here so that
 * navigation behaviour can later be added without
 * affecting the quote card or carousel geometry.
 */
export function CarouselNavigation() {
  return (
    <BottomNav>
      <WayfindingWrapper>
        <Progress aria-hidden="true">
          <ProgressBar $active />
          <ProgressBar />
          <ProgressBar />
        </Progress>
      </WayfindingWrapper>

      <ArrowGroup>
        <ArrowButton type="button" aria-label="Previous quote">
          <DesktopArrow aria-hidden="true">←</DesktopArrow>
          <MobileArrow aria-hidden="true">↑</MobileArrow>
        </ArrowButton>

        <ArrowButton type="button" aria-label="Next quote">
          <DesktopArrow aria-hidden="true">→</DesktopArrow>
          <MobileArrow aria-hidden="true">↓</MobileArrow>
        </ArrowButton>
      </ArrowGroup>
    </BottomNav>
  );
}