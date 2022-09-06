import React from 'react'
import styled from 'styled-components'
import Carousel from '../Carousel'
import Button from '../Button'

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text}
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 70em){
    width: 85%;
  }

  @media (max-width: 64em){
    width: 100%;
    flex-direction: column;

    &>*:last-child{
      width: 80%;
    }
  }
  @media (max-width: 40em){
    
    &>*:last-child{
      width: 90%;
    }
  }
`

const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  button{
    background: linear-gradient(90deg, #0600ff, #00dbff);
    background-size: 400% 400%;
  
    -webkit-animation: AnimationName 20s ease infinite;
    -moz-animation: AnimationName 20s ease infinite;
    animation: AnimationName 20s ease infinite;
  
    
    @-webkit-keyframes AnimationName {
        0%{background-position:91% 0%}
        50%{background-position:10% 100%}
        100%{background-position:91% 0%}
    }
    @-moz-keyframes AnimationName {
        0%{background-position:91% 0%}
        50%{background-position:10% 100%}
        100%{background-position:91% 0%}
    }
    @keyframes AnimationName {
        0%{background-position:91% 0%}
        50%{background-position:10% 100%}
        100%{background-position:91% 0%}
    }
  }
  @media (max-width: 64em){
      min-height: 50vh;
    }
`

const Title = styled.h2`
  font-size: ${props => props.theme.fontxxl};
  letter-spacing: 10px;
  font-family: "Bangers", cursive;
  text-transform: capitalize;
  width: 100%;
  color: ${props => props.theme.text};
  align-self: flex-start;

  margin: 0rem auto;

  @media (max-width: 64em){
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em){
    font-size: ${props => props.theme.fontxl};
  }
  @media (max-width: 30em){
    font-size: ${props => props.theme.fontlg};
  }
`
const SubText = styled.p`
  font-size: ${props => props.theme.fontlg};
  width: 100%;
  color: ${props => props.theme.text};
  align-self: flex-start;

  margin: 2rem auto;
  font-weight: 400;
  
  @media (max-width: 64em){
    width: 100%;
    text-align: center;
    font-size: ${props => props.theme.fontmd};
  }
  @media (max-width: 40em){
    font-size: ${props => props.theme.fontmd};
  }
  @media (max-width: 30em){
    font-size: ${props => props.theme.fontsm};
  }
`
const SubTextLight = styled.p`
  font-size: ${props => props.theme.fontlg};
  width: 100%;
  color: ${props => `rgba(${props.theme.dark})`};
  align-self: flex-start;

  margin: 2rem auto;
  font-weight: 400;

  @media (max-width: 64em){
    width: 100%;
    text-align: center;
    font-size: ${props => props.theme.fontsm};
  }
  @media (max-width: 40em){
    font-size: ${props => props.theme.fontsm};
  }
  @media (max-width: 30em){
    font-size: ${props => props.theme.fontxs};
  }
`

const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  display: flex;

  @media (max-width: 64em) {
    width: 100%;
    
    button {
      margin: 0 auto;
    }
  }
`

const About = () => {
  return (
    <Section id="about">
      <Container>
      <Box>
          <Title>
            WELCOME TO THE PACK
          </Title>
          <SubText>
            The Baby Wolves is a collection of uniqe deigital collectibles, The 2D Wolves are stored as ERC-721 tokens on the Polygon blockchain and hosted on IPFS.
          </SubText>
          <SubTextLight>
          With more than 33+ traits, each NFT is unique and comes with a membership to an exclusive group of people like you. Join an ambitious ever-growing community with multiple benefits and utilities.
          </SubTextLight>
          <ButtonContainer>
            <Button text="OpenSea" link="https://opensea.io/collection/baby-wolves" />
          </ButtonContainer>      
        </Box>
        <Box>
          <Carousel/>
        </Box>
      </Container>
    </Section>
  )
}

export default About