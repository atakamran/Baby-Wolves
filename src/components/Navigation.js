import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import WalletConnectButton from './wallet/WalletConnectButton';

import './wallet/NFTVerify';

const Section = styled.section`
  width: 100%;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;

  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    .desktop {
      display: none;
    }
    .mobile {
      display: inline-block;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  @media (max-width: 64rem) {
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(5px);

    transform: ${(props) => (props.click ? 'translateY(0)' : `translateY(1000%)`)};
    transition: all 0.3s ease;

    flex-direction: column;
    justify-content: center;
  }
`;

const MenuItem = styled.li`
  margin: 0 1.5rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  position: relative;

  &::after {
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.primary};
    transition: width 0.3s ease;
    position: absolute;
    bottom: -5px;
    left: 0;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 64rem) {
    margin: 1.5rem 0;

    &::after {
      display: none;
    }
  }
`;

const HamburgerMenu = styled.span`
  display: none;

  @media (max-width: 64rem) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    position: relative;
    z-index: 51;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 1.5rem;
      height: 2px;
      background: ${(props) => props.theme.text};
      transition: all 0.3s ease;
    }

    &::before {
      transform: ${(props) => (props.click ? 'rotate(45deg)' : 'translateY(-5px)')};
    }

    &::after {
      transform: ${(props) => (props.click ? 'rotate(-45deg)' : 'translateY(5px)')};
    }
  }
`;

const Navigation = () => {
  const [click, setClick] = useState(false);

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });

    setClick(false);
  };

  return (
    <Section>
      <Navbar>
        <Logo />
        <HamburgerMenu click={click} onClick={() => setClick(!click)} />
        <Menu click={click}>
          <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo('about')}>About</MenuItem>
          <MenuItem onClick={() => scrollTo('roadmap')}>RoadMap</MenuItem>
          <MenuItem onClick={() => scrollTo('showcase')}>Showcase</MenuItem>
          <MenuItem onClick={() => scrollTo('team')}>Team</MenuItem>
          <MenuItem onClick={() => scrollTo('faq')}>FAQ</MenuItem>
          <MenuItem>
            <div className="mobile">
              <WalletConnectButton />
            </div>
          </MenuItem>
        </Menu>
        <div className="desktop">
          <WalletConnectButton />
        </div>
      </Navbar>
    </Section>
  );
};

export default Navigation;