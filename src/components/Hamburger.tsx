import * as React from "react";
import styled, { css } from "styled-components";

const deg = 40;

const Container = styled.div`
  position: relative;
  min-width: 20px;
  min-height: 14px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
`;

const Span = styled.span<IProps>`
  display: block;
  position: absolute;
  height: 1px;
  width: 100%;
  background: #333;

  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
`;

interface IProps {
  open?: boolean;
}

const One = styled(Span)<IProps>`
  top: 0;
  ${(props) =>
    props.open
      ? css`
          top: 7px;
          width: 0;
          left: 50%;
        `
      : ""};
`;

const Two = styled(Span)<IProps>`
  top: 7px;
  ${({ open }) =>
    open
      ? css`
          -webkit-transform: rotate(${deg}deg);
          -moz-transform: rotate(${deg}deg);
          -o-transform: rotate(${deg}deg);
          transform: rotate(${deg}deg);
        `
      : ""};
`;

const Three = styled(Span)<IProps>`
  top: 7px;
  ${({ open }) =>
    open
      ? css`
          -webkit-transform: rotate(-${deg}deg);
          -moz-transform: rotate(-${deg}deg);
          -o-transform: rotate(-${deg}deg);
          transform: rotate(-${deg}deg);
        `
      : ""};
`;

const Four = styled(Span)<IProps>`
  top: 14px;
  ${(props) =>
    props.open
      ? css`
          top: 7px;
          width: 0;
          left: 50%;
        `
      : ""};
`;

export class Hamburger extends React.Component<IProps> {
  static defaultProps: IProps = {
    open: false,
  };

  render() {
    const { open } = this.props;
    return (
      <Container data-test-id="mobile-menu">
        <One open={open} />
        <Two open={open} />
        <Three open={open} />
        <Four open={open} />
      </Container>
    );
  }
}
