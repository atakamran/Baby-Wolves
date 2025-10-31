import React from 'react';
import styled from 'styled-components';
import ImageComponent from '../media/ImageComponent';

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 5rem 0;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  width: fit-content;
  border-bottom: 2px solid ${(props) => props.theme.primary};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 85%;
  margin: 3rem auto;
`;

const ImgContainer = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
`;

const NFTItem = ({ img }) => {
  return (
    <ImgContainer>
      <ImageComponent url={img} alt="Baby Wolves" />
    </ImgContainer>
  );
};

const Showcase = () => {
  const images = [
    'https://s6.uupload.ir/files/bev7zju_8fje.png',
    'https://s6.uupload.ir/files/en05awy_95h5.png',
    'https://s6.uupload.ir/files/0qc90fx_kd6o.png',
    'https://s6.uupload.ir/files/bifz8vu_nqd2.png',
    'https://s6.uupload.ir/files/ag5tuvh_cnjd.png',
    'https://s6.uupload.ir/files/2xyq13g_4iyc.png',
    'https://s6.uupload.ir/files/s4o6wh1_0jiq.png',
    'https://s6.uupload.ir/files/0dl8ffz_32wq.png',
    'https://s6.uupload.ir/files/sygnfjm_srfp.png',
    'https://s6.uupload.ir/files/vgf4o3o_1nag.png',
  ];

  return (
    <Section id="showcase">
      <Title>NFT Showcase</Title>
      <Grid>
        {images.map((img, index) => (
          <NFTItem key={index} img={img} />
        ))}
      </Grid>
    </Section>
  );
};

export default Showcase;