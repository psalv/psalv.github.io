import * as React from "react";
import { Carousel } from "./Carousel";
import styled, { css } from "styled-components";

const CarouselButton = styled.button<{ left: boolean }>`
  position: absolute;
  top: 50%;
  ${(props) =>
    props.left
      ? css`
          left: 16px;
        `
      : css`
          right: 16px;
        `};
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
      <>
        <Carousel
          setCurrentIndex={this.props.setCurrentIndex}
          currentIndex={this.props.currentIndex}
        />
        <CarouselButton
          left
          onClick={() =>
            this.props.setCurrentIndex(this.props.currentIndex - 1)
          }
        >
          <div className="fa-angle-down" />
        </CarouselButton>
        <CarouselButton
          left={false}
          onClick={() =>
            this.props.setCurrentIndex(this.props.currentIndex + 1)
          }
        >
          <div className="fa-angle-down" />
        </CarouselButton>
      </>
    );
  }
}
