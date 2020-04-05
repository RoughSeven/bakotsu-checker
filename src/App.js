import React from "react";
import styled from "styled-components";
import Page from "./components/Component";
import "./App.css";

function App() {
  return (
    <Wrapper className="App">
      <Title>テスラカイトCDコンプリートチェッカー</Title>
      <Page />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #313235;
  color: #f2f2f2;
  min-height: 100vh;
`;

const Title = styled.h1`
  margin-bottom: 40px;
  background: #1b1b1d;
  font-size: 20px;
  padding: 6px 0;
`;

export default App;
