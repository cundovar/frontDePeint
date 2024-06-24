import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import FetchArticles from '../../utils/fetcharticle';
import { URLimage, UrlPeintureDigital } from '../../utils/varaibleFetch';

const MovingDivs = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const { articles, isLoading } = FetchArticles(UrlPeintureDigital);
  useGSAP(() => {
    animationRef.current = gsap.to(containerRef.current, {
      x: '100vw',
      repeat: -1,
      ease: 'linear',
      duration: 70,
      stagger: 0.2,
    });
  });

  const handleMouseEnter = () => {
    animationRef.current.pause();
  };

  const handleMouseLeave = () => {
    animationRef.current.resume();
  };

  const numbers = [1, 2, 3];

  return (
    <div
      ref={containerRef}
      className=" absolute  h-[5rem]"
      style={{ display: 'flex', gap: '1rem' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {articles && articles.map((article, index) => (
        <div
          key={index}
          style={{
          width:"3rem",
            height: '5rem',
            backgroundColor: 'lightblue',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
           <img src={`${URLimage}/${article.image}`} alt={article.id}/>
        </div>
      ))}
    </div>
  );
};

export default MovingDivs;
