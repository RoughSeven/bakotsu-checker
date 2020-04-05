import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import merchandises from "../data/data.json";

const Modal = (props) => {
  return (
    <Wrapper>
      <Curtain onClick={() => props.handleClick()} />
      <Container>
        <Header>テスラカイトCDコンプリートチェッカー</Header>
        {props.items.filter((i) => !i.checked).length === 0 ? (
          <Text>流石です!</Text>
        ) : (
          <div>
            <Text>
              やったね！あと
              <Amount>
                {props.items
                  .filter((i) => !i.checked)
                  .map((i) => i.price)
                  .reduce((acc, current) => acc + current, 0)}
                円
              </Amount>
              納税できます
            </Text>

            <Detail>
              <summary>未所持のCDを確認する</summary>
              <ul>
                {props.items
                  .filter((i) => !i.checked)
                  .map((i, index) => (
                    <Item key={index}>
                      <Title>{i.title}</Title>
                      <Amount>{i.price}円</Amount>
                    </Item>
                  ))}
              </ul>
            </Detail>
          </div>
        )}
      </Container>
    </Wrapper>
  );
};

const feedIn = keyframes`
from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
from {
  transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
`;

const Wrapper = styled.div`
  animation: ${feedIn} 0.2s cubic-bezier(0.1, 1.06, 1, 1.31);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Curtain = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Detail = styled.details`
  margin-top: 20px;
  border: 1px solid #4f4f4f;
  border-radius: 10px;
  max-width: 500px;
  margin: 20px auto;
  overflow: hidden;
  padding: 10px;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.2);
  > summary {
    outline: none;
    color: #949494;
    padding: 6px;
  }
  > ul {
    padding: 10px 30px 0;
    text-align: left;
    list-style: none;
    max-height: 200px;
    overflow: scroll;
  }
`;

const Container = styled.div`
  animation: ${slideIn} 0.2s 0.2s cubic-bezier(0.09, 1.63, 0.61, 1.36) forwards;
  transform: scale(0);
  background-color: #313235;
  min-width: 500px;
  position: relative;
  padding: 20px;
  border-radius: 10px;
`;

const Header = styled.p`
  background-color: #1b1b1d;
  padding: 4px 50px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

const Amount = styled.span`
  font-weight: bold;
  color: #1aa1aa;
`;

const Text = styled.p`
  font-size: 18px;
  > ${Amount} {
    text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.2);
    display: inline-block;
    margin: 0 0.5em;
    font-size: 25px;
  }
`;

const Item = styled.li`
  & + & {
    margin-top: 8px;
  }
  > span {
    display: inline-block;
  }
`;

const Title = styled.span`
  margin-right: 1em;
`;

export default Modal;
