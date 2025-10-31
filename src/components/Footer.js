import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Logo from './Logo';
import { Icon } from '@iconify/react';

const Section = styled.section`
  min-height: 10vh;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Container = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;
    align-items: center;
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

  a {
    margin: 0 0.5rem;
    color: ${(props) => props.theme.text};
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.primary};
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
  color: ${(props) => props.theme.text};
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

const Bottom = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  @media (max-width: 48em) {
    flex-direction: column;
    align-items: center;
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
            <a href="https://discord.gg/DKptPuNW9H" target="_blank" rel="noopener noreferrer">
              <Icon icon="simple-icons:discord" width="25" height="25" />
            </a>
            <a href="https://www.instagram.com/babywolvesnft/" target="_blank" rel="noopener noreferrer">
              <Icon icon="simple-icons:instagram" width="25" height="25" />
            </a>
            <a href="https://twitter.com/babywolvesnft" target="_blank" rel="noopener noreferrer">
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