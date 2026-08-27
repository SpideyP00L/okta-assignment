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

interface CarouselNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

/*
 * CarouselNavigation is responsible only for
 * presenting the carousel controls.
 *
 * The parent owns carousel state and provides
 * the previous/next behaviour.
 *
 * Desktop / tablet:
 * left  = previous
 * right = next
 *
 * Mobile:
 * up   = previous
 * down = next
 */
export function CarouselNavigation({
  onPrevious,
  onNext,
}: CarouselNavigationProps) {
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
        <ArrowButton
          type="button"
          aria-label="Previous quote"
          onClick={onPrevious}
        >
          <DesktopArrow aria-hidden="true">
            ←
          </DesktopArrow>

          <MobileArrow aria-hidden="true">
            ↑
          </MobileArrow>
        </ArrowButton>

        <ArrowButton
          type="button"
          aria-label="Next quote"
          onClick={onNext}
        >
          <DesktopArrow aria-hidden="true">
            →
          </DesktopArrow>

          <MobileArrow aria-hidden="true">
            ↓
          </MobileArrow>
        </ArrowButton>
      </ArrowGroup>
    </BottomNav>
  );
}