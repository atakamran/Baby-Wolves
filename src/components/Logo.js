import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoText = styled.h1`
  font-family: "Bangers", cursive;
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.text};
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }

  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
`;

const Logo = () => {
  return (
    <LogoText>
      <Link to="#">
        <span className="desktop">Baby Wolves</span>
        <span className="mobile">BW</span>
      </Link>
    </LogoText>
  );
};

export default Logo