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
  padding-bottom: 250px;
`;

const BookRow = styled.div`
  width: 100%;
  padding: 0 32px;
  cursor: pointer;
  margin: 16px 0;
`;

const MenuButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const HeaderTypography = styled(Typography)`
  @media screen and (max-width: 330px) {
    font-size: 21px !important;
  }
`;
export class Header extends React.Component<{
  setCurrentIndex: (index: number) => void;
  toggleHeaderOpen: () => void;
  isHeaderOpen: boolean;
}> {
  render() {
    return (
      <>
        <StyledRow>
          <Mobile>
            <HeaderTypography variant="h2">
              sometimes paul reads.
            </HeaderTypography>
          </Mobile>
          <TabletAndAbove>
            <HeaderTypography variant="h1">
              sometimes paul reads.
            </HeaderTypography>
          </TabletAndAbove>

          <MenuButton onClick={this.props.toggleHeaderOpen} name="menu">
            <Hamburger open={this.props.isHeaderOpen} />
          </MenuButton>
        </StyledRow>
        {this.props.isHeaderOpen ? (
          <OptionsContainer>
            {bookData.map((book, index) => (
              <BookRow
                role="button"
                key={book.name}
                onClick={() => {
                  this.props.setCurrentIndex(index);
                  this.props.toggleHeaderOpen();
                }}
              >
                <Typography variant="h2" align="right">
                  {book.name}
                </Typography>
              </BookRow>
            ))}
          </OptionsContainer>
        ) : null}
      </>
    );
  }
}
