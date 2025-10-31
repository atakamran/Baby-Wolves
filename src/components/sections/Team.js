import React from 'react';
import styled from 'styled-components';
import ImageComponent from '../media/ImageComponent';

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  position: relative;
  padding: 6rem 0;
  
  @media (max-width: 48em) {
    padding: 4rem 0;
  }
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
  width: 90%;
  max-width: 1200px;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  
  @media (max-width: 64em) {
    width: 95%;
    gap: 1.5rem;
  }
  
  @media (max-width: 48em) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const Item = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 2.5rem 2rem;
  position: relative;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 20px 60px rgba(142, 68, 173, 0.3);
    
    &::before {
      left: 100%;
    }
  }

  @media (max-width: 48em) {
    max-width: 100%;
    padding: 2rem 1.5rem;
  }
`;

const ImageContainer = styled.div`
  width: 12rem;
  height: 12rem;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid ${(props) => props.theme.primary};
  box-shadow: 0 8px 24px rgba(142, 68, 173, 0.3);
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 50%;
    background: linear-gradient(45deg, #8e44ad, #3498db, #8e44ad);
    background-size: 300% 300%;
    animation: borderGlow 3s ease infinite;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 32px rgba(142, 68, 173, 0.4);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  @media (max-width: 48em) {
    width: 10rem;
    height: 10rem;
  }

  @keyframes borderGlow {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const Position = styled.h3`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.primary};
  margin-top: 0.5rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  
  a {
    color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      color: ${(props) => props.theme.primary};
      transform: translateY(-2px);
    }
  }
`;

const MemberComponent = ({ img, name = '', position = '' }) => {
  return (
    <Item>
      <ImageContainer>
        <ImageComponent url="https://s6.uupload.ir/files/6xd5ebl_6j39.png" alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
      <SocialLinks>
        <a href="https://github.com/atakamran" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/imwolfi" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.23 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
      </SocialLinks>
    </Item>
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