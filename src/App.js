import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import {light} from './styles/Themes';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Roadmap from './components/sections/Roadmap';
import Faq from './components/sections/Faq';
import Showcase from './components/sections/Showcase';
import Team from './components/sections/Team';
import SmartContract from './components/sections/SmartContract';

function App() {
  return (
    <>
    <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        <Showcase />
        <Team />
        <Faq />
        <SmartContract />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
