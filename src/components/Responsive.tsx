import styled from "styled-components";

export const TABLET_BREAKPOINT = 768;
export const DESKTOP_BREAKPOINT = 1024;

export const DesktopAndAbove = styled.div`
  display: inherit;
  @media screen and (max-width: ${DESKTOP_BREAKPOINT - 1}px) {
    display: none;
  }
`;

export const TabletAndAbove = styled.div`
  display: inherit;
  @media screen and (max-width: ${TABLET_BREAKPOINT - 1}px) {
    display: none;
  }
`;

export const TabletAndBelow = styled.div`
  display: inherit;
  @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
    display: none;
  }
`;

export const Mobile = styled.div`
  display: inherit;
  @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
    display: none;
  }
`;
