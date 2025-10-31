import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import DrawSvg from '../DrawSvg';

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  position: relative;
  padding: 2rem 0;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  width: fit-content;
  border-bottom: 2px solid ${(props) => props.theme.primary};
`;

const Container = styled.div`
  width: 80%;
  height: 200vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64rem) {
    width: 90%;
  }
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > *:nth-of-type(2n + 1) {
    justify-content: flex-start;
    div {
      text-align: right;
    }
  }
  & > *:nth-of-type(2n) {
    justify-content: flex-end;
    div {
      text-align: left;
    }
  }
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ItemContainer = styled.div`
  width: 45%;
  height: fit-content;
  padding: 1.5rem;
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Box = styled.div`
  padding: 1rem;
`;

const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  font-family: 'Poppins', sans-serif;
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Text = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontmd};
  color: #555;
  font-weight: 400;
`;

const Done = styled.span`
  text-decoration: line-through;
  color: #aaa;
`;

const RoadMapItem = ({ title, subtext, addToRefs, doneTitle, doneSub }) => {
  return (
    <Item ref={addToRefs}>
      <ItemContainer>
        <Box>
          <SubTitle>
            {title} <Done>{doneTitle}</Done>
          </SubTitle>
          <Text>
            {subtext} <Done>{doneSub}</Done>
          </Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const Roadmap = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let t1 = gsap.timeline();

    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: '0',
        },
        {
          y: '-20',
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=100px',
            end: 'bottom center',
            scrub: true,
          },
        }
      );
    });

    return () => {};
  }, []);

  return (
    <Section id="roadmap">
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem
            addToRefs={addToRefs}
            doneTitle="Phase 1:"
            doneSub="Mint 3,333 of Baby Wolves (2D version)"
          />
          <RoadMapItem
            addToRefs={addToRefs}
            title="Phase 2:"
            subtext="Grow the pack (we will try to collaborate with other NFT projects)"
          />
          <RoadMapItem
            addToRefs={addToRefs}
            title="Phase 3:"
            subtext="Mint 3,333 of Walking Baby Wolves (Animated Version)"
          />
          <RoadMapItem
            addToRefs={addToRefs}
            title="Phase 4:"
            subtext="Mint 3,333 Meta Baby Wolves (3D version)"
          />
          <RoadMapItem
            addToRefs={addToRefs}
            title="Phase 5:"
            subtext="The holders of the Baby Wolves will have a pet in the Metaverse"
          />
        </Items>
      </Container>
    </Section>
  );
};

export default Roadmap;