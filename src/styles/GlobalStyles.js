import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    
    @media (max-width: 48em) {
      font-size: 15px;
    }
    
    @media (max-width: 30em) {
      font-size: 14px;
    }
  }

  body {
    font-family: 'Poppins', 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    line-height: 1.7;
    background-color: #fff;
    color: #2c3e50;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.5px;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  button {
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Smooth scrolling for anchor links */
  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }
`;

export default GlobalStyles;