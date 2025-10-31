import React from "react";
import styled from "styled-components";
import CoverVideo from "../CoverVideo";
import TypeWriterText from "../TypeWriterText";

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100%;
  position: relative;
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 25%,
    #f093fb 50%,
    #4facfe 75%,
    #00f2fe 100%
  );
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  overflow: hidden;

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.85);
    z-index: 0;
  }

  @media (max-width: 48em) {
    min-height: auto;
    padding: 3rem 0;
  }
`;

const Container = styled.div`
  width: 90%;
  max-width: 1400px;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  position: relative;
  z-index: 1;
  padding: 4rem 2rem;

  @media (max-width: 64em) {
    width: 95%;
    gap: 3rem;
    padding: 3rem 1.5rem;
  }

  @media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;
    min-height: auto;
    gap: 2rem;
    padding: 2rem 1rem;

    & > *:first-child {
      width: 100%;
      margin-top: 0;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 48em) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const Home = () => {
  return (
    <Section id="home">
      <Container>
        <Box>
          <TypeWriterText />
        </Box>
        <Box>
          <CoverVideo />
        </Box>
      </Container>
    </Section>
  );
};

export default Home;
