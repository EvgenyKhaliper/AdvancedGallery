import styled from "styled-components";
import React from "react";
import Image from "./Image";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 15px;
`;

const Gallery = (props) => {
  const { images } = props;
  return (
    <Wrapper>
      {images.map((image) => {
        return <Image key={image.id} {...image} />;
      })}
    </Wrapper>
  );
};

export default Gallery;
