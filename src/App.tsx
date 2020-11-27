import styled from "styled-components";
import * as React from "react";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white !important;
`;

export const App: React.FC = () => <Wrapper>hello world!</Wrapper>;
