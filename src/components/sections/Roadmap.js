import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'

const Section = styled.section`
  min-height: 100vh;
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

  @media (max-width: 40rem){
  font-size: ${props => props.theme.fontxl};
  }
`

const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64rem){
    width: 80%;
  }
  @media (max-width: 48rem){
    width: 90%;
  }
`

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 48rem){
    width: 90%;
  }

  &>*:nth-of-type(2n +1){
    justify-content: start;

    @media (max-width: 48rem){
      justify-content: center;
    }
    
    div{
      border-radius: 40px 0 40px 0;
      text-align: right;

      @media (max-width: 48rem){
        text-align: left;
        border-radius: 0;

        p {
          border-radius: 0;
        }
      }
    }
    p{
      border-radius: 40px 0 40px 0;
    }
  }
  &>*:nth-of-type(2n){
    justify-content: end;

    @media (max-width: 48rem){
      justify-content: center;
    }

    div{
      border-radius: 0 40px 0 40px;
      text-align: left;

      @media (max-width: 48rem){
        text-align: left;
        border-radius: 0;

        p {
          border-radius: 0;
        }
      }
    }
    }
    p{
      border-radius: 0 40px 0 40px;
    }
  }
`

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 64rem){
    &nbsp{
      display: none;
    }
  }

  @media (max-width: 48rem){
    justify-content: flex-end !important;
  }
`

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid violet;

  @media (max-width: 48rem){
    width: 70%;
  }
`

const Box = styled.p`
  height: fit-content;
  background-color: ${props => props.theme.carouseColor}
  color: ${props => props.theme.text};
  padding: 1rem;
  possition: relative;
  border: 1px solid blue;
`

const SubTitle = styled.span`
  display: block;
  font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${props => props.theme.text};

  font-weight: 400;
  margin: 0.5rem 0;

  @media (max-width: 40rem){
    font-size: ${props => props.theme.fontlg};
    font-weight: 600;
  }
`

const Text = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontsm};
  color: black;

  font-weight: 400;
  margin: 0.5rem 0;

  @media (max-width: 48rem){
    font-size: ${props => props.theme.fontlg};]
    font-weight: 600;
  }
`

const Done = styled.span`
  text-decoration-line: line-through; 
`
const RoadMapItem = ({title, subtext, addToRefs, doneTitle, doneSub}) => {

  return(
    <Item ref={addToRefs}>
      <ItemContainer>
        <Box>
          <SubTitle> {title} <Done>{doneTitle}</Done> </SubTitle>
          <Text> {subtext} <Done>{doneSub}</Done> </Text>
        </Box>
      </ItemContainer>
    </Item>
  )
}

const Roadmap = () => {

  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if(el && !revealRefs.current.includes(el)){
      revealRefs.current.push(el);
    }
  }

  useLayoutEffect(() => {
    let t1 = gsap.timeline();

    revealRefs.current.forEach( (el, index) => {

      t1.fromTo(
        el.childNodes[0],
        {
          y: '0'
        },{
          y: '-30',
          
          scrollTrigger:{
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=2--px',
            end: 'bottom center',
            scrub: true,
          }
        }
      )
      
    } )

    return () => {

    };
  }, [])

  return (
    <Section id="roadmap">
      <Title>
        Roadmap
      </Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem addToRefs={addToRefs} doneTitle="phase 1:" doneSub="Mint 3,333 of Baby Wolves (2D version)"></RoadMapItem>
          <RoadMapItem addToRefs={addToRefs} title="phase 2:" subtext="Grow the pack (we will try to collaborate with other NFT projects)"></RoadMapItem>
          <RoadMapItem addToRefs={addToRefs} title="phase 3:" subtext="Mint 3,333 of Walking Baby Wolves (Animated Version)"></RoadMapItem>
          <RoadMapItem addToRefs={addToRefs} title="phase 4" subtext="mint 3,333 Meta Baby Wolves (3D version)"></RoadMapItem>
          <RoadMapItem addToRefs={addToRefs} title="phase 5" subtext="the holders of the Baby Wolves will have a pet in the Metaverse"></RoadMapItem>
        </Items>
      </Container>
    </Section>
  )
}

export default Roadmap