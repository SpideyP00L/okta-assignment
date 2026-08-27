import styled from "styled-components";

import { colors, spacing } from "@/styles/tokens";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 68px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-block: ${spacing.md};

  box-sizing: border-box;

  background: ${colors.carbon};
`;

export const Copyright = styled.p`
  margin: 0;

  font-size: 14px;
  line-height: 20px;
  font-weight: 400;

  color: ${colors.snow};

  text-align: center;
  white-space: nowrap;
`;