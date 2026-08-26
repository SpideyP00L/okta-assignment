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

const LeftPreviewImage = styled(PreviewImage)`
  left: 52px;
`;

const RightPreviewImage = styled(PreviewImage)`
  right: 52px;
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