import React from 'react'
import styled from 'styled-components'
import ImageComponent from '../media/ImageComponent'

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

  @media (max-width: 40em){
    font-size: ${props => props.theme.fontxl};
  }
`

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 60rem){
    width: 80%;
  }

  @media (max-width: 48rem){
    width: 90%;
    justify-content: center;
  }
`

const ImageContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background: darkgrey;

  border-radius: 20px;
  cursor: pointer;

  img{
    width: 100%;
    height: auto;
  }
`

const Item = styled.div`
  background: darkgrey;
  padding: 1rem 0;
  color: ${props => props.theme.body};
  margin: 2rem 1rem;
  position: relative;

  border: 2px solid black;
  border-radius: 20px;

  &:hover{
    img{
      transform: scale(1.01);
    }
  }
`

const Name = styled.h2`
  font-size: ${props => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${props => props.theme.text};
  margin-top: 1rem;
`

const Position = styled.h2`
  font-size: ${props => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${props => props.theme.text};
  margin-top: 1rem;
`

const MemberComponent = ({img, name= "", position= ""}) => {
  
  return(
    <a href="https://www.atakamran.com" target="_blank">
      <Item>
      <ImageContainer>
        <ImageComponent url="https://s6.uupload.ir/files/6xd5ebl_6j39.png" alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
    </a>
  )
}

const Team = () => {
  return (
    <Section id="team">
      <Title>Team</Title>
      <Container>
        <MemberComponent img={ImageComponent} name="Ata Kamran" position="founder" />
      </Container>
    </Section>
  )
}

export default Team