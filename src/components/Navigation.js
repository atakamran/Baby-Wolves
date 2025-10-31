import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import WalletConnectButton from './wallet/WalletConnectButton';

import './wallet/NFTVerify';

const Section = styled.section`
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  
  @media (max-width: 64rem) {
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1400px;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;
  padding: 0 2rem;

  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    width: 100%;
    padding: 0 1.5rem;
    
    .desktop {
      display: none;
    }
    .mobile {
      display: inline-block;
    }
  }
  
  @media (max-width: 48em) {
    padding: 0 1rem;
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
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 249, 250, 0.98) 100%);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);

    transform: ${(props) => (props.click ? 'translateY(0)' : 'translateY(100%)')};
    opacity: ${(props) => (props.click ? '1' : '0')};
    visibility: ${(props) => (props.click ? 'visible' : 'hidden')};
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

    flex-direction: column;
    justify-content: flex-start;
    padding-top: 3rem;
    gap: 0.5rem;
  }
`;

const MenuItem = styled.li`
  margin: 0 1.5rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  transition: color 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &::after {
    content: '';
    display: block;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, ${(props) => props.theme.primary}, #3498db);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }

  &:hover {
    color: ${(props) => props.theme.primary};
    
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 64rem) {
    margin: 1.5rem 0;
    font-size: 1.1rem;
    padding: 0.5rem 0;

    &::after {
      display: none;
    }
    
    &:hover {
      transform: translateX(5px);
      transition: transform 0.3s ease;
    }
  }
  
  @media (max-width: 48em) {
    font-size: 1rem;
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