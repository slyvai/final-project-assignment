import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Section1() {
  const headerTextRef = useRef(null);
  const numberOfFish = 1005;

  useEffect(() => {
    const headerTextElement = headerTextRef.current;
    if (headerTextElement) {
      const duration = 2050;
      const totalWidth = headerTextElement.offsetWidth;

      gsap.to(headerTextElement, {
        x: -totalWidth,
        repeat: -1,
        ease: 'linear',
        duration: duration,
        onRepeat: () => {
          gsap.set(headerTextElement, { x: 0 });
        },
      });
    }
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 p-4 text-white flex gap-4 nav-text ">
        <p>ABOUT</p>
        <p>CONTACT</p>
      </div>

      <div className="line-stroke"></div>
      <div className="h-screen bg-orange-500 flex justify-center items-center overflow-hidden ">
        <div className="header-text flex gap-4" ref={headerTextRef}>
          {Array.from({ length: numberOfFish }).map((_, index) => (
            <h1 key={index} className="font-bold text-orange-500 stroked-text">
              Fish
            </h1>
          ))}
        </div>
      </div>
    </>
  );
}

export default Section1;