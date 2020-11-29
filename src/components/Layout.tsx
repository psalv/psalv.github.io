import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Spacer = styled.div<{size: number}>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`