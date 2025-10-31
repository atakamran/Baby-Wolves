import React from 'react';
import styled from 'styled-components';
import ImageComponent from '../media/ImageComponent';

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 6rem 0;
  
  @media (max-width: 48em) {
    padding: 4rem 0;
  }
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 90%;
  max-width: 1400px;
  margin: 3rem auto;
  padding: 0 2rem;
  
  @media (max-width: 64em) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
    width: 95%;
  }
  
  @media (max-width: 48em) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    width: 100%;
    padding: 0 1rem;
  }
  
  @media (max-width: 30em) {
    grid-template-columns: 1fr;
  }
`;

const ImgContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(142, 68, 173, 0.1) 0%, rgba(52, 152, 219, 0.1) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-15px) scale(1.03);
    box-shadow: 0 20px 50px rgba(142, 68, 173, 0.25);
    
    &::before {
      opacity: 1;
    }
    
    img {
      transform: scale(1.1);
    }
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    display: block;
    transition: transform 0.4s ease;
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