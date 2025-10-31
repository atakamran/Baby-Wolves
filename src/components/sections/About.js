import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../Button";
import FoxImage from "../../assets/fox.jpg";

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 6rem 0;

  @media (max-width: 48em) {
    padding: 4rem 0;
    min-height: auto;
  }
`;

const Container = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media (max-width: 70em) {
    width: 95%;
    gap: 3rem;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;
    gap: 3rem;
    padding: 0 2rem;

    & > *:last-child {
      width: 100%;
    }
  }

  @media (max-width: 48em) {
    padding: 0 1rem;
    gap: 2rem;
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
    width: 100%;
    min-height: auto;
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.2;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.primary} 0%,
    #3498db 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 64em) {
    text-align: center;
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
    margin-bottom: 1.5rem;
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: #34495e;
  margin-bottom: 1.5rem;
  font-weight: 400;
  line-height: 1.8;

  @media (max-width: 64em) {
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    font-size: 1rem;
  }
`;

const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: #7f8c8d;
  margin-bottom: 2.5rem;
  font-weight: 400;
  line-height: 1.8;

  @media (max-width: 64em) {
    text-align: center;
  }

  @media (max-width: 48em) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
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
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(142, 68, 173, 0.1) 0%,
      rgba(52, 152, 219, 0.1) 100%
    );
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 30px 80px rgba(142, 68, 173, 0.25);

    &::before {
      opacity: 1;
    }

    img {
      transform: scale(1.05);
    }
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 24px;
    display: block;
    transition: transform 0.4s ease;
  }

  @media (max-width: 64em) {
    max-width: 600px;
    margin: 0 auto;
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
            The Baby Wolves is a collection of unique digital collectibles,
            stored as ERC-721 tokens on the Polygon blockchain and hosted on
            IPFS.
          </SubText>
          <SubTextLight>
            With more than 33+ traits, each NFT is unique and comes with a
            membership to an exclusive group of people like you. Join an
            ambitious, ever-growing community with multiple benefits and
            utilities.
          </SubTextLight>
          <ButtonContainer>
            <Button
              text="OpenSea"
              link="https://opensea.io/collection/baby-wolves"
            />
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default About;
