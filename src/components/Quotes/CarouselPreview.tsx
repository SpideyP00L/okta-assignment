import styled from "styled-components";

import { PreviewCard } from "./carousel.styles";

type CarouselPreviewSide = "left" | "right";

interface CarouselPreviewProps {
  side: CarouselPreviewSide;
}

const LeftPreview = styled(PreviewCard)`
  left: 0;
`;

const RightPreview = styled(PreviewCard)`
  right: 0;
`;

const PreviewImage = styled.img`
  position: absolute;

  top: 0;

  width: 60px;
  height: 560px;

  display: block;

  object-fit: cover;

  opacity: 1;
`;

/*
 * Keep the current positioning unchanged during
 * the refactor. We will correct the Figma preview
 * geometry after the component split is complete.
 */
const LeftPreviewImage = styled(PreviewImage)`
  left: 0;
`;

const RightPreviewImage = styled(PreviewImage)`
  right: 0;
`;

export function CarouselPreview({
  side,
}: CarouselPreviewProps) {
  if (side === "left") {
    return (
      <LeftPreview aria-hidden="true">
        <LeftPreviewImage
          src="/images/carousel/left-preview.svg"
          alt=""
        />
      </LeftPreview>
    );
  }

  return (
    <RightPreview aria-hidden="true">
      <RightPreviewImage
        src="/images/carousel/right-preview.svg"
        alt=""
      />
    </RightPreview>
  );
}