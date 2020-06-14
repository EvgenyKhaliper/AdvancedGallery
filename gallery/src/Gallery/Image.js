import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ImageModal from "./ImageModal";

const Wrapper = styled.div`
  width: 33.33%;
  height: 300px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageDiv = styled.div`
  background-image: ${({ src }) => `URL('${src}')`};
  background-size: contain;
  width: 100px;
  height: 100px;
  cursor: pointer;
`;
const Tags = styled.div`
  text-align: left;
`;

const Image = (props) => {
  const { largeImageURL, previewURL, tags } = props;
  const [showImage, setShowImage] = useState(false);

  const onImageClick = () => {
    //window.open(largeImageURL);
    setShowImage(true);
  };

  return (
    <Wrapper>
      <Content>
        <ImageDiv src={previewURL} onClick={onImageClick}></ImageDiv>
        <Tags>{tags}</Tags>
      </Content>
      {showImage && (
        <ImageModal image={largeImageURL} onClose={() => setShowImage(false)} />
      )}
    </Wrapper>
  );
};

export default Image;
