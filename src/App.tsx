import styled from "styled-components";
import * as React from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { GlobalStyleResets } from "./globalStyleReset";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white !important;
`;

export class App extends React.Component<{}, { currentIndex: number }> {
  state = {
    currentIndex: 0,
  };

  setCurrentIndex = (index: number) => {
    this.setState({
      currentIndex: index,
    });
  };

  render() {
    return (
      <Wrapper>
        <GlobalStyleResets />
        <Header setCurrentIndex={this.setCurrentIndex} />
        <Content
          setCurrentIndex={this.setCurrentIndex}
          currentIndex={this.state.currentIndex}
        />
      </Wrapper>
    );
  }
}
