import React from 'react';
import styled from 'styled-components';
import FoxImage from '../assets/fox.jpg';

const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 20px;
    width: 90%;
    height: auto;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 64em) {
    min-width: 40vh;

    img {
      border-radius: 15px !important;
    }
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <img src={FoxImage} alt="fox" />
    </VideoContainer>
  );
};

export default CoverVideo;