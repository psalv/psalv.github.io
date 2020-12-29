import styled from "styled-components";

interface ITypographyProps {
  bold?: boolean;
  variant?: "p" | "h2" | "h1";
  align?: "center" | "left" | "right";
}

const stylesFromVariant = {
  p: {
    lineHeight: 24,
    fontSize: 18,
  },
  h2: {
    lineHeight: 32,
    fontSize: 23,
  },
  h1: {
    lineHeight: 40,
    fontSize: 32,
  },
};

export const Typography = styled.div<ITypographyProps>`
  font-family: ${(props) =>
    (props.variant || "p") !== "p"
      ? '"Raleway", sans-serif'
      : '"Roboto", sans-serif'};
  font-size: ${(props) => stylesFromVariant[props.variant || "p"].fontSize}px;
  line-height: ${(props) =>
    stylesFromVariant[props.variant || "p"].lineHeight}px;
  font-weight: ${(props) => (props.bold ? 700 : 300)};
  color: #333;
  text-align: ${(props) => props.align || "left"};
`;
