import * as React from "react";

import SwipeableViews from "react-swipeable-views";
import { virtualize } from "react-swipeable-views-utils";
import styled from "styled-components";
import { bookData } from "./bookData";

const StyledSwipeableViews = styled(SwipeableViews)`
  width: 100%;
`;
const VirtualizedSwipeableViews = virtualize(StyledSwipeableViews);

export function circularMod(a: number, b: number): number {
  return ((a % b) + b) % b;
}

export class Carousel extends React.Component<
  {
    setCurrentIndex: (index: number) => void;
    currentIndex: number;
  },
  { preloadedIndices: Set<number> }
> {
  state = {
    preloadedIndices: new Set<number>(),
  };

  preloadImages = (indices: number[]) => {
    const totalNumberOfBooks = bookData.length;
    indices.forEach((originalIndex) => {
      const index = circularMod(originalIndex, totalNumberOfBooks);
      if (this.state.preloadedIndices.has(index)) {
        return;
      }
      this.state.preloadedIndices.add(index);
      const img = new Image();
      img.src = bookData[index]?.imageUrl;
    });
  };

  handleChangeSlideIndex = (index: number) => {
    this.props.setCurrentIndex(index);
  };

  slideRenderer = (params: any) => {
    const currentIndex = circularMod(params.index, bookData.length);
    return (
      <React.Fragment key={params.index}>
        {bookData[currentIndex]?.name}
      </React.Fragment>
    );
  };

  render() {
    return (
      <VirtualizedSwipeableViews
        index={this.props.currentIndex}
        onChangeIndex={this.handleChangeSlideIndex}
        slideRenderer={this.slideRenderer}
      />
    );
  }
}
