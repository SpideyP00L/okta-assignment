import styled from "styled-components";

import { colors, spacing } from "@/styles/tokens";

export const HeaderWrapper = styled.header`
  width: 100%;

  background: var(--header-background);
  color: ${colors.carbon};
`;

export const HeaderInner = styled.div`
  width: min(100%, 1312px);
  min-height: 80px;

  margin: 0 auto;

  padding-inline: ${spacing.sm};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoMark = styled.div`
  width: 40px;
  height: 40px;

  border: 6px solid ${colors.carbon};
  border-radius: 50%;
`;

export const ThemeButton = styled.button`
  width: 40px;
  height: 40px;

  display: grid;
  place-items: center;

  border: 0;
  border-radius: ${spacing.xs};

  background: var(--theme-button-background);

  color: ${colors.carbon};

  font-size: 22px;
  line-height: 1;

  &:focus-visible {
    outline: 2px solid ${colors.carbon};
    outline-offset: 2px;
  }
`;