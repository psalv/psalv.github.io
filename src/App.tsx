import * as React from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { GlobalStyleResets } from "./globalStyleReset";

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
      <div>
        <GlobalStyleResets />
        <Header setCurrentIndex={this.setCurrentIndex} />
        <Content
          setCurrentIndex={this.setCurrentIndex}
          currentIndex={this.state.currentIndex}
        />
      </div>
    );
  }
}
