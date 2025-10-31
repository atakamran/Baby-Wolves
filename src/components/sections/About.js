import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import FoxImage from '../../assets/fox.jpg';

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 70em) {
    width: 90%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 90%;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 64em) {
    min-height: 50vh;
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  color: #333;
  margin-bottom: 1.5rem;

  @media (max-width: 64em) {
    text-align: center;
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: #555;
  margin-bottom: 1.5rem;
  font-weight: 400;

  @media (max-width: 64em) {
    text-align: center;
  }
`;

const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: #777;
  margin-bottom: 2rem;
  font-weight: 400;

  @media (max-width: 64em) {
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  align-self: flex-start;

  @media (max-width: 64em) {
    align-self: center;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
  }
`;

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box>
          <ImageContainer>
            <img src={FoxImage} alt="fox" />
          </ImageContainer>
        </Box>
        <Box>
          <Title>Welcome to the Pack</Title>
          <SubText>
            The Baby Wolves is a collection of unique digital collectibles, stored as ERC-721 tokens on the Polygon blockchain and hosted on IPFS.
          </SubText>
          <SubTextLight>
            With more than 33+ traits, each NFT is unique and comes with a membership to an exclusive group of people like you. Join an ambitious, ever-growing community with multiple benefits and utilities.
          </SubTextLight>
          <ButtonContainer>
            <Button text="OpenSea" link="https://opensea.io/collection/baby-wolves" />
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default About;