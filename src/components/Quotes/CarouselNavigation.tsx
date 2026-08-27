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
  activeIndex: number;
  quoteCount: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function CarouselNavigation({
  activeIndex,
  quoteCount,
  onPrevious,
  onNext,
}: CarouselNavigationProps) {
  return (
    <BottomNav>
      <WayfindingWrapper>
        <Progress aria-hidden="true">
          {Array.from(
            { length: quoteCount },
            (_, index) => (
              <ProgressBar
                key={index}
                $active={index === activeIndex}
              />
            )
          )}
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