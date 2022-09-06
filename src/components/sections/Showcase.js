import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import ImageComponent from '../media/ImageComponent'

const Section = styled.section `
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.body};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
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
`

const move = keyframes `
0%{ transform: translateX(100%) };
100%{ transform: translateX(-100%) };
`

const Row = styled.div `
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;

  animation: ${move} 10s linear infinite ${props => props.direction};

  div{
    width: 5rem;
    height: 5rem;
    margin: 2rem;
  }
`

const ImgContainer = styled.div`
  width: 12.5rem !important;
  background-color: ${props => props.theme.body};

  cursor: pointer;

  @media (max-width: 48em){
      width: 10rem !important;
  }
  @media (max-width: 30em){
      width: 8rem !important;
  }
  img{
    border-radius: 15px;
    width: 200%;
    height: auto;
  }
`

const Details = styled.div `
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${props => props.theme.text};
  border: 2px solid ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

const NFTItem = ({ img, number = 0, price = 0 }) => {
  
  return(
    <ImgContainer>
      <ImageComponent url={img} alt="Baby Wolves" />
    </ImgContainer>
  )
}

const Showcase = () => {
  return (
    <Section id="showcase">
      <Title>
        NFT ShowCase
      </Title>
      <Row direction="none">
        <NFTItem img="https://s6.uupload.ir/files/bev7zju_8fje.png" />
        <NFTItem img="https://s6.uupload.ir/files/en05awy_95h5.png" />
        <NFTItem img="https://s6.uupload.ir/files/0qc90fx_kd6o.png" />
        <NFTItem img="https://s6.uupload.ir/files/bifz8vu_nqd2.png" />
        <NFTItem img="https://s6.uupload.ir/files/ag5tuvh_cnjd.png" />
      </Row>
      <Row direction="reverse">
        <NFTItem img="https://s6.uupload.ir/files/2xyq13g_4iyc.png" />
        <NFTItem img="https://s6.uupload.ir/files/s4o6wh1_0jiq.png" />
        <NFTItem img="https://s6.uupload.ir/files/0dl8ffz_32wq.png" />
        <NFTItem img="https://s6.uupload.ir/files/sygnfjm_srfp.png" />
        <NFTItem img="https://s6.uupload.ir/files/vgf4o3o_1nag.png" />
      </Row>
    </Section>
  )
}

export default Showcase