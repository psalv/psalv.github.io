import * as React from "react";
import styled from "styled-components";
import { Column, Row } from "./components/Layout";
import { headerHeight } from "./common";
import { Typography } from "./components/Typography";
import { Hamburger } from "./components/Hamburger";
import { bookData } from "./data/bookData";
import { Mobile, TabletAndAbove } from "./components/Responsive";

const StyledRow = styled(Row)`
  height: ${headerHeight}px;
  align-items: center;
  padding: 0 32px;
  justify-content: space-between;
`;

const OptionsContainer = styled(Column)`
  border-top: 1px solid #eaeaea;
  position: absolute;
  background-color: white;
  z-index: 2;
  transition: 0.3s;
  top: ${headerHeight}px;
  width: 100vw;
  height: calc(100vh - ${headerHeight}px);
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
`;

const BookRow = styled(Row)`
  width: 100%;
  justify-content: flex-end;
  padding: 16px 32px;
`;

const MenuButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export class Header extends React.Component<
  {
    setCurrentIndex: (index: number) => void;
  },
  { open: boolean }
> {
  state = { open: false };

  toggleOpen = () => {
    this.setState({ open: !this.state.open }, () => {
      if (this.state.open) {
        document.body.classList.add("noscroll");
      } else {
        document.body.classList.remove("noscroll");
      }
    });
  };

  render() {
    return (
      <>
        <StyledRow>
          <Mobile>
            <Typography variant="h2">sometimes paul reads.</Typography>
          </Mobile>
          <TabletAndAbove>
            <Typography variant="h1">sometimes paul reads.</Typography>
          </TabletAndAbove>

          <MenuButton onClick={this.toggleOpen}>
            <Hamburger open={this.state.open} />
          </MenuButton>
        </StyledRow>
        {this.state.open ? (
          <OptionsContainer>
            {bookData.map((book, index) => (
              <button
                key={book.name}
                onClick={() => {
                  this.props.setCurrentIndex(index);
                  this.toggleOpen();
                }}
              >
                <BookRow>
                  <Typography variant="h2" align="right">
                    {book.name}
                  </Typography>
                </BookRow>
              </button>
            ))}
          </OptionsContainer>
        ) : null}
      </>
    );
  }
}
