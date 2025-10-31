import React from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const SectionWrapper = styled.section`
  opacity: 0;
`;

const AnimatedSection = ({
  children,
  className,
  animation = 'fadeUp',
  delay = 0,
  stagger = 0,
}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    let fromVars = {};

    switch (animation) {
      case 'fadeUp':
        fromVars = { opacity: 0, y: 80 };
        break;
      case 'fadeIn':
        fromVars = { opacity: 0 };
        break;
      case 'scaleIn':
        fromVars = { opacity: 0, scale: 0.85 };
        break;
      case 'slideLeft':
        fromVars = { opacity: 0, x: -100 };
        break;
      case 'slideRight':
        fromVars = { opacity: 0, x: 100 };
        break;
      default:
        fromVars = { opacity: 0, y: 80 };
    }

    if (stagger > 0) {
      const children = element.querySelectorAll(':scope > *');
      gsap.from(children, {
        ...fromVars,
        duration: 1,
        stagger: stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    } else {
      gsap.from(element, {
        ...fromVars,
        duration: 1.2,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars && trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [animation, delay, stagger]);

  return (
    <SectionWrapper ref={sectionRef} className={className}>
      {children}
    </SectionWrapper>
  );
};

export default AnimatedSection;

