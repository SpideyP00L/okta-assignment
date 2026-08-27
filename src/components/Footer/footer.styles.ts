import styled from "styled-components";

import { spacing } from "@/styles/tokens";

export const FooterWrapper = styled.footer`
  position: relative;

  width: 100%;
  height: 68px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-block: ${spacing.md};

  box-sizing: border-box;

  background: #191919;

  &::before {
    content: "";

    position: absolute;
    top: 0;
    left: 50%;

    width: min(calc(100% - 32px), 1312px);
    height: 0.5px;

    background: rgba(255, 254, 250, 0.5);

    transform: translateX(-50%);
  }
`;

export const Copyright = styled.p`
  margin: 0;

  font-size: 14px;
  line-height: 20px;
  font-weight: 400;

  color: #fffefa;

  text-align: center;

  white-space: nowrap;
`;