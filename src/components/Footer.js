import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Logo from './Logo';
import { Icon } from '@iconify/react';

const Section = styled.section`
  min-height: auto;
  width: 100%;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 4rem 0 2rem;
  
  @media (max-width: 48em) {
    padding: 3rem 0 1.5rem;
  }
`;

const Container = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 2rem;

  @media (max-width: 64em) {
    width: 95%;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 1.5rem;
  }
  
  @media (max-width: 48em) {
    width: 100%;
    padding: 0 1rem 1.5rem;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    margin-bottom: 1rem;
  }
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);

    &:hover {
      background: ${(props) => props.theme.primary};
      transform: translateY(-3px) scale(1.1);
      box-shadow: 0 8px 20px rgba(142, 68, 173, 0.4);
    }
    
    @media (max-width: 48em) {
      width: 36px;
      height: 36px;
    }
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 0;

  @media (max-width: 48em) {
    flex-direction: column;
    align-items: center;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    color: #fff;
    transform: translateY(-2px);
  }
  
  @media (max-width: 48em) {
    margin: 0.5rem 0;
    font-size: 0.9rem;
  }
`;

const Bottom = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 2rem auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  span {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    text-align: center;
    
    @media (max-width: 48em) {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 48em) {
    width: 100%;
    padding: 1rem 1rem 0;
  }
`;

const Footer = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a href="https://github.com/atakamran" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Icon icon="simple-icons:github" width="25" height="25" />
            </a>
            <a href="https://www.instagram.com/babywolvesnft/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Icon icon="simple-icons:instagram" width="25" height="25" />
            </a>
            <a href="https://twitter.com/babywolvesnft" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Icon icon="simple-icons:twitter" width="25" height="25" />
            </a>
          </IconList>
        </Left>
        <Menu>
          <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo('about')}>About</MenuItem>
          <MenuItem onClick={() => scrollTo('roadmap')}>Roadmap</MenuItem>
          <MenuItem onClick={() => scrollTo('showcase')}>Showcase</MenuItem>
          <MenuItem onClick={() => scrollTo('team')}>Team</MenuItem>
          <MenuItem onClick={() => scrollTo('faq')}>Faq</MenuItem>
        </Menu>
      </Container>
      <Bottom>
        <span>&copy; {new Date().getFullYear()} Baby Wolves. All rights reserved.</span>
      </Bottom>
    </Section>
  );
};

export default Footer;