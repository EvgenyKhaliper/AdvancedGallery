import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  width: 50%;
  height: 50%;
  background-image: ${({ image }) => `url('${image}')`};
`;

export default (props) => {
  return (
    <Wrapper onClick={props.onClose}>
      <Content image={props.image}></Content>
    </Wrapper>
  );
};
