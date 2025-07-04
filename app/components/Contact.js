"use client"
import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
const ImageBlock = ({src,clipClass}) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);
const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
            {/* <ImageBlock src='img/contact-1.webp' clipClass='contact-clip-path-1'/> */}
            {/* <ImageBlock src='img/contact-2.webp' clipClass='contact-clip-path-2 lg:translate-y-40 translate-y-60'/> */}
        </div>
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
        {/* <ImageBlock src='img/swordman-partial.webp' clipClass='absolute md:scale-125'/> */}
        <ImageBlock src='img/sit.webp' clipClass='sword-man-clip-path md:scale-125 z-10'/>
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Spider Society
          </p>

         
        <AnimatedTitle
          title="<b>Your</b> <b>Destiny</b>  <b>Awaits</b>"
          containerClass="mt-5 !text-white text-center special-font mt-5 pointer-events-none 
 relative z-50"
        />
         
         

          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
        
        

      </div>
    </div>
  );
};

export default Contact;
