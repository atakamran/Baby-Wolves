import React, {useState} from 'react'
import styled from 'styled-components'
import Button from './Button'
import Logo from './Logo'
import WalletConnectButton from './wallet/WalletConnectButton'

import './wallet/NFTVerify'

const Section = styled.section`
width: 100%;
background-color: #fff;
`

const Navbar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;

width: 97%;
height: ${props => props.theme.navHeight};
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
`

const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;

@media (max-width: 64rem) {
    position: fixed;
    top: ${props => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: ${props => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: rgba(255, 255, 255 ,0.85);
    backdrop-filter: blur(2px);

    transform: ${props => props.click ? 'translateY(0)' : `translateY(1000%)`};
    transition: all 0.3s ease;

    flex-direction: column;
    justify-content: center;
}
`

const MenuItem = styled.li`
margin: 0 1rem;
color: ${props => props.theme.text};
cursor: pointer;

&::after{
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.text};
    transition: width 0.8s ease;
}

&:hover::after{
    width: 100%;
}

@media (max-width: 64rem) {
    margin: 1rem 0;

    &::after{
        display: none;
    }
}

`

const HamburgerMenu = styled.span`
    width: ${props => props.click ? '2rem' : '1.5rem'};
    height: 2px;
    background: ${props => props.theme.text};

    position: absolute;
    top: 2rem;
    left: 50%;
    transform: ${props => props.click ? 'translate(-50%) rotate(90deg)' : 'translate(-50%) rotate(0)'};

    display: none;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: all 0.3s ease;

    @media (max-width: 64rem) {
        display: flex;

    }

    &::after, &::before{
        content: ' ';
        width: ${props => props.click ? '1rem' : '1.5rem'};
        height: 2px;
        right: ${props => props.click ? '-2px' : '0rem'};
        background: ${props => props.theme.text};
        position: absolute;
        transition: all 0.3s ease;
    }

    &::after{
        top: ${props => props.click ? '0.3rem' : '0.5rem'};
        transform: ${props => props.click ? 'rotate(-40deg)' : 'rotate(0)'}
    }
    &::before{
        bottom: ${props => props.click ? '0.3rem' : '0.5rem'};
        transform: ${props => props.click ? 'rotate(40deg)' : 'rotate(0)'}
    }
`

const Navigation = () => {
    
    const [click, setClick] = useState(false);

    const scrollTo = (id) => {

        let element = document.getElementById(id);

        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        })

        setClick(!click);
    }

  return (
      <Section>
          <Navbar>
                <Logo />
                <HamburgerMenu click={click} onClick={() => setClick(!click)}>
                    &nbsp;
                </HamburgerMenu>
                <Menu click={click}>
                    <MenuItem onClick={() => scrollTo('home')} >Home</MenuItem>
                    <MenuItem onClick={() => scrollTo('about')} >About</MenuItem>
                    <MenuItem onClick={() => scrollTo('roadmap')} >RoadMap</MenuItem>
                    <MenuItem onClick={() => scrollTo('showcase')} >Showcase</MenuItem>
                    <MenuItem onClick={() => scrollTo('team')} >Team</MenuItem>
                    <MenuItem onClick={() => scrollTo('faq')} >FAQ</MenuItem>
                    <MenuItem>
                        <div class= "mobile">
                            <WalletConnectButton />
                        </div>
                    </MenuItem>
                </Menu>
                <div class= "desktop">
                    <WalletConnectButton />
                </div>
          </Navbar>
      </Section>
  )
}

export default Navigation