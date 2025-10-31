import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  margin: 3rem 0;

  @media (max-width: 48em) {
    margin: 2rem 0;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Reveal = styled.div`
  display: ${(props) => (props.clicked ? 'block' : 'none')};
  margin-top: 1rem;
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontsm};
  font-weight: 300;
  line-height: 1.1rem;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
`;

const Indicator = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Accordian = ({ title, children }) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <Container>
      <Title onClick={() => setCollapse(!collapse)}>
        <Name>
          <span>{title}</span>
        </Name>
        {collapse ? <Indicator>-</Indicator> : <Indicator>+</Indicator>}
      </Title>
      <Reveal clicked={collapse}>
        {children}
      </Reveal>
    </Container>
  );
};

export default Accordian