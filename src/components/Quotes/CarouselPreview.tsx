import styled from "styled-components";

import { breakpoints } from "@/styles/breakpoints";
import { PreviewCard } from "./carousel.styles";

type CarouselPreviewSide = "left" | "right";

interface CarouselPreviewProps {
  side: CarouselPreviewSide;
}

/*
 * The exported desktop/tablet SVGs already contain
 * the curved/tapered Figma geometry.
 *
 * Therefore:
 * - do not stretch them to 298px
 * - do not apply clip-path
 * - do not apply masks
 *
 * We simply position the exported artwork correctly.
 */

const LeftPreview = styled(PreviewCard)`
  left: 52.46px;

  width: 60px;
  height: 560px;

  overflow: visible;

  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    left: 39px;

    width: 25px;
    height: 560px;

    overflow: hidden;
  }

  @media (max-width: ${breakpoints.mobile}) {
    left: 50%;
    top: 0;

    width: 325px;
    height: 30px;

    overflow: hidden;

    z-index: 1;

    /* SVG already has the correct shape */
    border-radius: 0;

    transform: translateX(-50%);
  }
`;

const RightPreview = styled(PreviewCard)`
  right: 52.46px;

  width: 64px;
  height: 560px;

  overflow: visible;

  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    right: 39px;

    width: 25px;
    height: 560px;

    overflow: hidden;
  }

  @media (max-width: ${breakpoints.mobile}) {
  right: auto;
  left: 0;
  top: 0;

  width: 325px;
  height: 30px;

  transform: scaleY(-1);
}
`;

/*
 * Desktop left asset:
 *
 * Native export:
 * approximately 60 × 559
 */
const LeftPreviewImage = styled.img`
  position: absolute;

  left: 0;
  top: 50%;

  display: block;

  width: 60px;
  height: 559px;

  max-width: none;

  transform: translateY(-50%);

  @media (max-width: ${breakpoints.tablet}) {
    width: 60px;
    height: 559px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    left: 0;
    top: 0;

    width: 325px;
    height: 30px;

    transform: none;
  }
`;

/*
 * Desktop right asset:
 *
 * Native export:
 * approximately 64 × 558
 */
const RightPreviewImage = styled.img`
  position: absolute;

  right: 0;
  top: 50%;

  display: block;

  width: 64px;
  height: 558px;

  max-width: none;

  transform: translateY(-50%);

  @media (max-width: ${breakpoints.tablet}) {
    width: 64px;
    height: 558px;
  }

  @media (max-width: ${breakpoints.mobile}) {
  right: auto;
  left: 0;
  top: 0;

  width: 325px;
  height: 30px;

  transform: scaleY(-1);
}
`;

export function CarouselPreview({
  side,
}: CarouselPreviewProps) {
  if (side === "left") {
    return (
      <LeftPreview aria-hidden="true">
        <picture>
          <source
            media={`(max-width: ${breakpoints.mobile})`}
            srcSet="/images/carousel/mobile-preview.svg"
          />

          <LeftPreviewImage
            src="/images/carousel/left-preview.svg"
            alt=""
          />
        </picture>
      </LeftPreview>
    );
  }

  return (
    <RightPreview aria-hidden="true">
      <picture>
        <source
          media={`(max-width: ${breakpoints.mobile})`}
          srcSet="/images/carousel/mobile-preview.svg"
        />

        <RightPreviewImage
          src="/images/carousel/right-preview.svg"
          alt=""
        />
      </picture>
    </RightPreview>
  );
}