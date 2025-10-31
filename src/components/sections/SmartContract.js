import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
`;

const Text = styled.h3`
  padding: 1.5rem;
  margin: 0;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: ${(props) => props.theme.fontlg};
  color: #555;

  a {
    color: ${(props) => props.theme.primary};
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.primaryDark};
    }
  }
`;

const SmartContract = () => {
  return (
    <Section>
      <Text>
        2D BW VERIFIED POLYGON SMART CONTRACT ADDRESS:{' '}
        <a href="https://polygonscan.com/token/0x704ce86d5dd52f854e90ca379d670ba46b60f3e9" target="_blank" rel="noopener noreferrer">
          0x704ce86d5dd52f854e90ca379...
        </a>
      </Text>
    </Section>
  );
};

export default SmartContract;