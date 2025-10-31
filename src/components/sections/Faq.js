import React from 'react';
import styled from 'styled-components';
import Accordian from '../Accordian';

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  position: relative;
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 48em) {
    padding: 4rem 0;
  }
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  margin: 1rem auto;
  width: fit-content;
  border-bottom: 2px solid ${(props) => props.theme.primary};
`;

const Container = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;

  @media (max-width: 64em) {
    width: 95%;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 0 2rem;
  }
  
  @media (max-width: 48em) {
    width: 100%;
    padding: 0 1rem;
    gap: 1.5rem;
  }
`;

const Box = styled.div`
  width: 45%;
  flex: 1;

  @media (max-width: 64em) {
    width: 100%;
    max-width: 700px;
  }

  a {
    color: ${(props) => props.theme.primary};
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.primaryDark};
    }
  }
`;

const Faq = () => {
  return (
    <Section id="faq">
      <Title>FAQ</Title>
      <Container>
        <Box>
          <Accordian title="What are Baby Wolves?">
            Baby Wolves is an NFT collection of 9,999 (3,333 2D, 3,333 Animated, 3,333 3D). In the project, 3D versions of the collection will be used as pets in the metaverse.
          </Accordian>
          <Accordian title="What perks do I get from owning your NFT?">
            There will be so many things to unlock when adopting a baby wolf, such as membership in the alpha community and a pet in the metaverse.
          </Accordian>
          <Accordian title="How much is the NFT?">
            The floor price for the 2D version of the BW is 0.01 ETH for an offer in the POLYGON Blockchain.
          </Accordian>
        </Box>
        <Box>
          <Accordian title="How many tokens are there?">
            9,999 (3,333 2D, 3,333 Animated, 3,333 3D).
          </Accordian>
          <Accordian title="Where can I buy or trade the NFTs?">
            The NFTs can be traded on POLYGON blockchains marketplaces such as{' '}
            <a target="_blank" href="https://opensea.io/collection/baby-wolves" rel="noopener noreferrer">
              OpenSea
            </a>{' '}
            and{' '}
            <a target="_blank" href="https://rarible.com/baby-wolves" rel="noopener noreferrer">
              Rarible
            </a>
            .
          </Accordian>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;