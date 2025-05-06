import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Section3() {
  const headerTextRef = useRef(null);
  const numberOfComingSoon = 1005;

  useEffect(() => {
    const headerTextElement = headerTextRef.current;
    if (headerTextElement) {
      const duration = 2050;
      const totalHeight = headerTextElement.offsetHeight;

      gsap.to(headerTextElement, {
        y: -totalHeight,
        repeat: -1,
        ease: 'linear',
        duration: duration,
        onRepeat: () => {
          gsap.set(headerTextElement, { y: 0 });
        },
      });
    }
  }, []);

  return (
    <>
      <div className="h-screen bg-gray-800 flex justify-center items-center overflow-hidden ">
        <div className="header-text flex flex-col gap-4" ref={headerTextRef}>
          {Array.from({ length: numberOfComingSoon }).map((_, index) => (
            <h1 key={index} className="font-bold text-gray-800 stroked-text">
              COMING SOON
            </h1>
          ))}
        </div>
      </div>
    </>
  );
}

export default Section3;