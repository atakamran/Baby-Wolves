import React from 'react';
import styled from 'styled-components';
import ImageComponent from './media/ImageComponent';
import Button from './Button';

const Section = styled.section`
  width: 100%;
  height: 25rem;
  position: relative;
  border-top: 2px solid black;
  background-color: darkgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 48em) {
    height: 15rem;
    flex-direction: column;
  }

  button {
    color: black;
    font-size: 25px !important;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;

  img {
    margin-right: 30px;
    border-radius: 15px;
    width: 12rem;
    height: auto;
  }

  @media (max-width: 48em) {
    img {
      width: 10rem;
      height: auto;
    }
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.text};
  padding: 1rem 2rem;
  z-index: 10;
  width: 35%;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
    text-align: center;
    width: 40%;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxl};
    width: 100%;
    padding: 2rem 0;
  }
`;

const BottomContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 48em) {
    width: 100%;
    justify-content: center;
  }
`;

const Banner = () => {
  return (
    <Section>
      <ImgContainer>
        <ImageComponent url="https://s6.uupload.ir/files/bev7zju_8fje.png" />
        <ImageComponent url="https://s6.uupload.ir/files/en05awy_95h5.png" />
        <ImageComponent url="https://s6.uupload.ir/files/0qc90fx_kd6o.png" />
        <ImageComponent url="https://s6.uupload.ir/files/bifz8vu_nqd2.png" />
        <ImageComponent url="https://s6.uupload.ir/files/ag5tuvh_cnjd.png" />
      </ImgContainer>
      <Title>Join the pack!</Title>
      <BottomContainer>
        <Button text="View GitHub" link="https://github.com/atakamran" />
      </BottomContainer>
    </Section>
  );
};

export default Banner