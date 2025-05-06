import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "../assets/384546R-removebg-preview.png";
import Image2 from "../assets/il_794xN.2317900691_aisr-removebg-preview.png";

gsap.registerPlugin(ScrollTrigger);

function Section2() {
  const canvasRef = useRef(null);
  const canvasRef2 = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvas2 = canvasRef2.current;
    const ctx = canvas.getContext("2d");
    const ctx2 = canvas2.getContext("2d");
    const image1 = new window.Image();
    const image2 = new window.Image();

    image1.onload = () => {
      ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
    };
    image2.onload = () => {
      ctx2.drawImage(image2, 0, 0, canvas2.width, canvas2.height);
    };

    image1.src = Image;
    image2.src = Image2;

    return () => {
      image1.onload = null;
      image2.onload = null;
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas1Element = canvasRef.current;
    const canvas2Element = canvasRef2.current;

    if (!container || !canvas1Element || !canvas2Element) return;

    gsap.fromTo(
      canvas1Element,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: container,
          start: "center top",
          end: "center bottom",
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      canvas2Element,
      { y: 0, opacity: 1 },
      {
        y: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: container,
          start: "center center",
          end: "bottom center",
          scrub: 1,
          markers: false,
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.to(container, {
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${container.scrollHeight * 2}`,
        pin: true,
        scrub: 1,
        markers: false,
      },
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="bg-gray-200">
      <section
        ref={containerRef}
        className="h-screen flex flex-col items-center justify-center"
      >
        <div className="text-4xl font-bold text-center flex flex-col items-center">
          <div className="flex flex-wrap justify-center items-center">
            <span>
              <span className="text-orange-600 ">FRESH FISH</span> HIGH QUALITY
              FISH ORGANIC FISH, FRESH FISH
            </span>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            <span>HIGH QUALITY FISH ORGANIC FISH</span>
            <canvas
              ref={canvasRef2}
              width={200}
              height={200}
              className="mx-2 absolute left-260"
              style={{ verticalAlign: "middle" }}
            />
            <canvas
              ref={canvasRef}
              width={200}
              height={200}
              className="inline-block mx-2 relative"
              style={{ verticalAlign: "middle" }}
            />
            <span>FRESH FISH</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section2;
