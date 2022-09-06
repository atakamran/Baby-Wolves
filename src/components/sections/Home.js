import React from 'react'
import styled from 'styled-components'
import CoverVideo from '../CoverVideo'
import TypeWriterText from '../TypeWriterText'

const Section = styled.section`
  min-height: ${props => `calc(100vh - ${props.theme.navHeight})`}
  width: 100%;
  position: relative;
  background-color: ${props => props.theme.body};
`

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;

    &>*:first-child{
      width: 100%;
      margin-top: 2rem;
    }    
    img {
      border-radius: 25px;
      padding: 10%;
    }
  }
`

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Home = () => {
  return (
    <Section id="home">
      <Container>
        <Box>
          <CoverVideo/>
        </Box>
        <Box>
          <TypeWriterText/>
        </Box>
      </Container>
    </Section>
  )
}

export default Home