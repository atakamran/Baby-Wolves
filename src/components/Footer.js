import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import Logo from './Logo'

import { Icon } from '@iconify/react';

const Section = styled.section `
  min-height: 10vh;
  width: 100%;
  background-color: ${props => props.theme.body};
  display: flex;

  flex-direction: column;
  position: relative;
`

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.text};

  @media (max-width: 48em){
    width: 90%;

    h1{
      font-size: ${props => props.theme.fontxl};
    }
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em){
    width: 100%;
  }
`

const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  a{
    padding-left: 25px;
  }

  &>*{
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover{
      transform: scale(1.1);
    }
  }
`

const Footer = () => {
  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
        </Left>
        <IconList>
          <a href="https://discord.gg/DKptPuNW9H" target="_blank" rel="noopener">
            <Icon icon="simple-icons:discord" width="35" height="35" />
          </a>
          <a href="https://www.instagram.com/babywolvesnft/" target="_blank" rel="noopener">
            <Icon icon="simple-icons:instagram" width="35" height="35" />
          </a>
          <a href="https://twitter.com/babywolvesnft" target="_blank" rel="noopener">
            <Icon icon="simple-icons:twitter" width="35" height="35" />
          </a>
        </IconList>
      </Container>
    </Section>
  )
}

export default Footer