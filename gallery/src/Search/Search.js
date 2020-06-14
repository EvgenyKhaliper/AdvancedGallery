import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SAVE_QUERY_URL } from "../constants";
import { saveQuery } from "../networking";

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  border: 1px inset grey;
  padding: 10px 15px;
  border-radius: 5px;
`;

const Input = styled.input`
  border-radius: 5px;
`;

const Search = (props) => {
  const { onSearch, disabled } = props;

  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      onSearch(e.target.value);
    }
  };

  return (
    <Wrapper>
      <Content>
        <Input
          placeholder="Search"
          type="text"
          onKeyUp={onKeyUp}
          disabled={disabled}
        />
      </Content>
    </Wrapper>
  );
};

export default Search;
