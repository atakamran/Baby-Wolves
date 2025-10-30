import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import Button from './Button';

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: 'Poppins', sans-serif;
  text-transform: capitalize;
  width: 80%;
  color: #333;
  align-self: flex-start;

  span {
    color: #8e44ad;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
  @media (max-width: 40em) {
    width: 90%;
  }
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  color: #555;
  font-weight: 500;
  margin-bottom: 1.5rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const ButtonContainer = styled.div`
  align-self: flex-start;
  font-size: 18px;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button {
      margin-bottom: 2rem;
    }
  }
`;

const TypeWriterText = () => {
  return (
    <>
      <Title>
        Your meta pet
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span>Fluffy</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span>Cute</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span>Adorable</span>')
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <SubTitle>explore the pack</SubTitle>
      <ButtonContainer>
        <Button text="Discord" link="https://discord.gg/DKptPuNW9H" />
      </ButtonContainer>
    </>
  );
};

export default TypeWriterText;