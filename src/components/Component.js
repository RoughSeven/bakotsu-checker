import React, { Component } from "react";
import styled, { css } from "styled-components";
import merchandises from "../data/data.json";
import Modal from "./Modal";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], isModalOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    merchandises.forEach((m) => (m.checked = false));
    this.setState({ items: merchandises });
  }

  handleChange(index) {
    let newState = this.state.items;
    newState[index].checked = !newState[index].checked;
    this.setState({
      items: newState,
    });
  }

  handleClick() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  render() {
    const { items, isModalOpen } = this.state;

    return (
      <Wrapper>
        <Grid>
          {items.map((i, index) => (
            <Item key={index} checked={i.checked}>
              <Name checked={i.checked}>{i.title}</Name>
              <input
                type="checkbox"
                checked={i.checked}
                onChange={() => {
                  this.handleChange(index);
                }}
              />
            </Item>
          ))}
        </Grid>
        <Button onClick={() => this.handleClick()}>決定</Button>
        {isModalOpen && <Modal items={items} handleClick={this.handleClick} />}
      </Wrapper>
    );
  }
}

const Item = styled.label`
  box-sizing: border-box;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 4px;
  height: 150px;
  width: 150px;
  padding: 10px;
  cursor: pointer;
  transition: 0.2s;
  border: 1px solid;
  ${(props) =>
    props.checked
      ? css`
          border-color: #1aa1aa;
          background-color: #1aa1aa;
          box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.3);
        `
      : css`
          border-color: #4f4f4f;
          background-color: rgba(0, 0, 0, 0.2);
        `};
  &:active {
    transform: scale(0.96);
  }
  > input {
    display: none;
  }
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: bold;
  ${(props) =>
    props.checked &&
    css`
      text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.3);
    `}
`;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, 150px);
  justify-content: center;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background: none;
  border: 2px solid #1aa1aa;
  background-color: #1aa1aa;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  padding: 4px 10px;
  border-radius: 2px;
  transition: 0.2s;
  &:hover {
    filter: brightness(1.1);
  }
`;

export default Page;
