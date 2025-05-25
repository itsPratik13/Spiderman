"use client";

import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      ease: "power1.inOut",
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px] text-black">
          Welcome to Spider Society
        </h2>

        <AnimatedTitle
          title="<b>Uniting</b> <b>Every</b>  <b>Spider</b> <b>Across</b> <b>Multi-Verse</b>"
          containerClass="mt-5 !text-black text-center special-font"
        />

        <div className="absolute bottom-[-80dvh] left-1/2 w-full max-w-96 -translate-x-1/2 text-center font-general">
          <p>Protecting the Web of Life, one dimension at a time.</p>
          {/* <p>"From shadows to skylines, we swing together"</p> */}
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path absolute left-1/2 top-0 z-20 h-[60vh] w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw]">
          <img
            src="img/abt.jpg"
            alt="Background"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
