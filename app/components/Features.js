"use client";
import { useRef, useState } from "react";
const BentoTilt=({children, className=''})=>{
  const [transforStyle, settransforStyle] = useState('')
  const itemRef=useRef()
  const handleMouseMove=(e)=>{
    if(!itemRef.current) return;

    const{left,top,width,height}=itemRef.current.getBoundingClientRect();
    const relativeX=(e.clientX-left)/width
    const relativeY=(e.clientY-top)/height

    const tiltX=(relativeY-0.5)*5
    const tiltY=(relativeX-0.5)*-5
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
     settransforStyle(newTransform)
  }
  const handleMouseLeave=()=>{
     settransforStyle('')
  }
  return(
    <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform:transforStyle}}>
      {children}
    </div>
  )

}
const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="uppercase md:text-6xl text-4xl font-black special-font">
            <b>{title}</b>
          </h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base ">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { TiLocationArrow } from "react-icons/ti";

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Welcome to the Spider-Verse
          </p>

          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            A fan hub dedicated to all things Spidey — from multiversal heroes
            to epic showdowns and legendary web-slingers.
          </p>
        </div>

        <BentoTilt className="border border-white/20 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h[65vh]">
          <BentoCard
            src="videos/anim2.mp4"
            title="Peter Parker"
            description="The original web-slinger, struggling with the responsibilities of being a hero and living a normal life."
          />
        </BentoTilt>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="relative border-hsla col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/miles.mp4"
              title="Miles Morales"
              description="The new kid on the block with big shoes to fill — and an even bigger heart. He's not just another Spider-Man, he's THE Spider-Man."
            />
          </BentoTilt>

          <BentoTilt className="relative border-hsla col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/gwen.mp4"
              title="Spider-Gwen"
              description="Graceful, fierce, and full of rhythm — Gwen Stacy fights crime in her own spectacular style."
            />
          </BentoTilt>

          <BentoTilt
            className="relative border-hsla col-span-2 overflow-hidden rounded-md transition-transform 
            duration-300 ease-out me-14 md:col-span-1 md:me-0"
          >
            <BentoCard
              src="videos/spidey-pointing.mp4"
              title="The Multiverse War"
              description="When worlds collide, only the web of destiny can hold the balance. Dive into the chaos of Spideys united."
            />
          </BentoTilt>

          <div className="relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out">
            <div className="flex size-full flex-col justify-between bg-violet-500 p-5">
              <h1 className=" uppercase md:text-6xl text-4xl font-black special-font max-w-64 text-black">
                <b>Coming Soon</b>
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </div>

          <div className="relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out">
            <video
              src="videos/anim.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
