import * as React from "react";
import { Carousel } from "./Carousel";
import styled, { css } from "styled-components";
import { boxShadow, headerHeight } from "./common";
import { Column } from "./components/Layout";

const CarouselButton = styled.button<{ left: boolean }>`
  ${boxShadow};

  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 1;

  position: absolute;
  top: calc(50% - 20px);
  ${(props) =>
    props.left
      ? css`
          left: 32px;
        `
      : css`
          right: 32px;
        `};

  @media screen and (max-width: 748px) {
    opacity: 0;
    top: -50px;
  }
`;

const ContentWrapper = styled(Column)`
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: calc(100vh - ${headerHeight}px);
`;

export class Content extends React.Component<{
  setCurrentIndex: (index: number) => void;
  currentIndex: number;
}> {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPressed);
  }

  handleKeyPressed: any = (e: React.KeyboardEvent) => {
    e.preventDefault();
    switch (e.which) {
      case 37: // LEFT
      case 38: // UP
        this.props.setCurrentIndex(this.props.currentIndex - 1);
        break;
      case 13: // ENTER
      case 32: // SPACE
      case 39: // RIGHT
      case 40: // DOWN
        this.props.setCurrentIndex(this.props.currentIndex + 1);
        break;
      default:
    }
  };

  render() {
    return (
      <ContentWrapper>
        <Carousel
          setCurrentIndex={this.props.setCurrentIndex}
          currentIndex={this.props.currentIndex}
        />
        <CarouselButton
          name="previous review"
          left
          onClick={() =>
            this.props.setCurrentIndex(this.props.currentIndex - 1)
          }
        />
        <CarouselButton
          name="next review"
          left={false}
          onClick={() =>
            this.props.setCurrentIndex(this.props.currentIndex + 1)
          }
        />
      </ContentWrapper>
    );
  }
}
