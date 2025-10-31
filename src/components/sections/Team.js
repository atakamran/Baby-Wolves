import React from 'react';
import styled from 'styled-components';
import ImageComponent from '../media/ImageComponent';

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  position: relative;
  padding: 5rem 0;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  width: fit-content;
  border-bottom: 2px solid ${(props) => props.theme.primary};
`;

const Container = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: calc(20rem - 2vw);
  padding: 1rem 0;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ImageContainer = styled.div`
  width: 10rem;
  height: 10rem;
  margin: 0 auto 1rem;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid ${(props) => props.theme.primary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;

const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  color: #777;
  margin-top: 0.5rem;
`;

const MemberComponent = ({ img, name = '', position = '' }) => {
  return (
    <a href="https://www.atakamran.com" target="_blank" rel="noopener noreferrer">
      <Item>
        <ImageContainer>
          <ImageComponent url="https://s6.uupload.ir/files/6xd5ebl_6j39.png" alt={name} />
        </ImageContainer>
        <Name>{name}</Name>
        <Position>{position}</Position>
      </Item>
    </a>
  );
};

const Team = () => {
  return (
    <Section id="team">
      <Title>Team</Title>
      <Container>
        <MemberComponent name="Ata Kamran" position="Founder" />
      </Container>
    </Section>
  );
};

export default Team;