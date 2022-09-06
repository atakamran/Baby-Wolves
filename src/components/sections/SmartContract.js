import React from 'react'
import styled from 'styled-components'

const Section = styled.section `
  min-height: 1vh;
  width: 100%;
  background-color: ${props => props.theme.body};
  display: flex;

  flex-direction: column;
  position: relative;
  overflow: hidden;
`

const Text = styled.h3`
  padding: 1rem;
  margin: 1rem auto;
  align-items: center;
  justify-center: center;

  a{
      color: blue;
  }
`

const SmartContract = () => {
  return (
    <Section>
        <Text>2D BW VERIFIED POLYGON SMART CONTRACT ADDRESS : <a href="https://polygonscan.com/token/0x704ce86d5dd52f854e90ca379d670ba46b60f3e9" target="_blank">0x704ce86d5dd52f854e90ca379...</a></Text>
    </Section>
  )
}

export default SmartContract