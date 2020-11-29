import * as React from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { GlobalStyleResets } from "./globalStyleReset";

export class App extends React.Component<
  {},
  { currentIndex: number; headerOpen: boolean }
> {
  state = {
    currentIndex: 0,
    headerOpen: false,
  };

  setCurrentIndex = (index: number) => {
    this.setState({
      currentIndex: index,
    });
  };

  toggleHeaderOpen = () => {
    this.setState({
      headerOpen: !this.state.headerOpen,
    });
  };

  render() {
    return (
      <div>
        <GlobalStyleResets />
        <Header
          setCurrentIndex={this.setCurrentIndex}
          toggleHeaderOpen={this.toggleHeaderOpen}
          isHeaderOpen={this.state.headerOpen}
        />
        <Content
          setCurrentIndex={this.setCurrentIndex}
          currentIndex={this.state.currentIndex}
          headerOpen={this.state.headerOpen}
        />
      </div>
    );
  }
}
