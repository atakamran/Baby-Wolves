import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const {
    animation = 'fadeUp',
    delay = 0,
    duration = 1,
    stagger = 0,
    trigger = null,
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const triggerElement = trigger || element;

    let animationConfig = {};

    switch (animation) {
      case 'fadeUp':
        animationConfig = {
          opacity: 0,
          y: 60,
          ease: 'power3.out',
        };
        break;
      case 'fadeIn':
        animationConfig = {
          opacity: 0,
          ease: 'power2.out',
        };
        break;
      case 'scaleIn':
        animationConfig = {
          opacity: 0,
          scale: 0.8,
          ease: 'back.out(1.7)',
        };
        break;
      case 'slideLeft':
        animationConfig = {
          opacity: 0,
          x: -60,
          ease: 'power3.out',
        };
        break;
      case 'slideRight':
        animationConfig = {
          opacity: 0,
          x: 60,
          ease: 'power3.out',
        };
        break;
      default:
        animationConfig = {
          opacity: 0,
          y: 60,
          ease: 'power3.out',
        };
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top 85%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        once: true,
      },
    });

    if (stagger > 0) {
      const children = element.querySelectorAll(':scope > *');
      tl.from(children, {
        ...animationConfig,
        duration,
        stagger: stagger,
        delay,
      });
    } else {
      tl.from(element, {
        ...animationConfig,
        duration,
        delay,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [animation, delay, duration, stagger, trigger]);

  return elementRef;
};

