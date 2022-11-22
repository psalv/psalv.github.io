import * as React from "react";

import SwipeableViews from "react-swipeable-views";
import { virtualize } from "react-swipeable-views-utils";
import styled from "styled-components";
import { bookData, processReview } from "./data/bookData";
import {
  DesktopAndAbove,
  TABLET_BREAKPOINT,
  TabletAndBelow,
} from "./components/Responsive";
import { Column, Row, Spacer } from "./components/Layout";
import { boxShadow } from "./common";
import { Typography } from "./components/Typography";

const StyledSwipeableViews = styled(SwipeableViews)`
  width: 100%;
`;
const VirtualizedSwipeableViews: any = virtualize(StyledSwipeableViews);

export function circularMod(a: number, b: number): number {
  return ((a % b) + b) % b;
}

const BookCard = styled(Column)<{ imageCard: boolean }>`
  ${boxShadow};
  position: relative;
  padding: 16px;
  width: 400px;
  height: 582px;
  align-items: center;

  @media screen and (max-width: ${TABLET_BREAKPOINT - 1}px) {
    width: 350px;
    height: 509px;
  }

  @media screen and (max-width: ${349}px) {
    width: 305px;
    height: ${(props) => (props.imageCard ? 443 : 509)}px;
  }
`;

const BookCover = styled.img`
  width: 100%;
`;

const ContentWrapper = styled(Row)`
  padding: 20px 0;
  justify-content: center;
`;

const Divider = styled.div`
  width: 90%;
  border-bottom: 1px solid #ccc;
`;

interface IProps {
  setCurrentIndex: (index: number) => void;
  currentIndex: number;
}

export class Carousel extends React.Component<
  IProps,
  { preloadedIndices: Set<number> }
> {
  state = {
    preloadedIndices: new Set<number>(),
  };

  componentDidMount() {
    this.preloadImagesBasedOnCurrentIndex();
  }

  componentDidUpdate(prevProps: IProps) {
    if (this.props.currentIndex !== prevProps.currentIndex) {
      this.preloadImagesBasedOnCurrentIndex();
    }
  }

  preloadImagesBasedOnCurrentIndex = () => {
    const index = this.props.currentIndex;
    const indicesMap = [-2, -1, 1, 2];
    this.preloadImages(indicesMap.map((i) => i + index));
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
      if (!bookData[index]) {
        return;
      }
      img.src = bookData[index].imageUrl;
    });
  };

  handleChangeSlideIndex = (index: number) => {
    this.props.setCurrentIndex(index);
  };

  getBookCards = (index: number) => {
    const bookInfo = bookData[index];
    const review = processReview(bookInfo);
    return (
      <>
        <BookCard imageCard>
          <BookCover src={bookInfo.imageUrl} />
        </BookCard>
        <Spacer size={32} />
        <BookCard imageCard={false}>
          <Spacer size={24} />
          <Typography
            align="center"
            bold
            style={{ textTransform: "uppercase" }}
          >
            {bookInfo.name}
          </Typography>
          <Spacer size={24} />
          <Divider />
          <Spacer size={24} />
          <Typography align="center">{review}</Typography>
          <Spacer size={24} />
        </BookCard>
      </>
    );
  };

  slideRenderer = (params: any) => {
    const currentIndex = circularMod(params.index, bookData.length);
    return (
      <ContentWrapper key={params.index}>
        <TabletAndBelow>
          <Column>{this.getBookCards(currentIndex)}</Column>
        </TabletAndBelow>
        <DesktopAndAbove>
          <Row>{this.getBookCards(currentIndex)}</Row>
        </DesktopAndAbove>
      </ContentWrapper>
    );
  };

  render() {
    return (
      <VirtualizedSwipeableViews
        index={this.props.currentIndex}
        onChangeIndex={this.handleChangeSlideIndex}
        slideRenderer={this.slideRenderer}
        resistance
      />
    );
  }
}
