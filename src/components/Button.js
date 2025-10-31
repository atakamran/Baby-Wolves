import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  display: inline-block;
  color: white;
  font-weight: 600;
  outline: none;
  border: none;
  font-size: ${(props) => props.theme.fontmd};
  padding: 1rem 2.5rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 8px 24px rgba(142, 68, 173, 0.3);
  
  background: linear-gradient(135deg, ${(props) => props.theme.primary} 0%, #3498db 50%, ${(props) => props.theme.primary} 100%);
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(142, 68, 173, 0.4);
    
    &::before {
      width: 300px;
      height: 300px;
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(142, 68, 173, 0.3);
  }

  @media (max-width: 48em) {
    padding: 0.9rem 2rem;
    font-size: 0.9rem;
  }
`;

const Button = ({text, link}) => {
  return (
    
    <a href={link} target="_blank" aria-label={text} rel="noreferrer">
      <Btn>{text}</Btn>
    </a>
  );
};

export default Button