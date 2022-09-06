import React from 'react'
import styled from 'styled-components'
import Accordian from '../Accordian'

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100%;
  background-color: ${props => props.theme.body};
  position: relative;
`

const Title = styled.h1`
  font-family: "dosis", cursive; 
  font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${props => props.theme.text};
  display: flex;

  justify-content: center;
  align-items: center;
  margin: 0rem auto;
  border-bottom: 1px solid black;
  width: 80%;

  @media (max-width: 64em){
    font-size: ${props => props.theme.fontxl};
  }
`

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 64em){
    width: 80%;
  }
  @media (max-width: 48em){
    width: 90%;
    flex-direction: column;

    &>*:last-child{
      &>*:last-child{
         margin-top: 0;
      }
    }
  }
`

const Box = styled.div`
  width: 45%;

  a{
    color: blue;
    font-size: 15px;
  }

  @media (max-width: 64em){
    width: 90%;
    align-self: center;
  }
`

const Faq = () => {
  return (
    <Section id="faq">
      <Title>FAQ</Title>
      <Container>
        <Box>
          <Accordian title="What are Baby Wolves?">
            Baby Wolves is an NFT collection of 9,999 (3,333 2D, 3,333 Animated, 3,333 3D) In the project 3D versions of the collection will be used as pets in the metaverse.
          </Accordian>
          <Accordian title="What perks do I get from owning your NFT?">
            There will be so many things to unlock when adopting a baby wolf, such as membership in the alpha community and a pet in the metaverse.          </Accordian>
          <Accordian title="How much is the NFT?">
            The floor price for the 2D version of the BW is 0.01 ETH for an offer in the POLYGON Blockchain          </Accordian>
        </Box>
        <Box>
          <Accordian title="How many tokens are there?">
            9,999 (3,333 2D, 3,333 Animated, 3,333 3D)
          </Accordian>
          <Accordian title="Where can I buy or trade the NFTs?">
            The NFTs can be traded on POLYGON blockchains marketplaces such as Opensea and Rarible
            <a target="_blank" href='https://opensea.io/collection/baby-wolves'>OpenSea</a> and
            <a target="_blank" href='https://rarible.com/baby-wolves'>Rarible</a> 
          </Accordian>
        </Box>
      </Container>
    </Section>
  )
}

export default Faq