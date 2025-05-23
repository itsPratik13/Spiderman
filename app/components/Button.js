import React from 'react';

const Button = ({ title, id, leftIcon,rightIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 inline-flex items-center space-x-2 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
     
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
     
     
      <span className="relative inline-flex overflow-hidden font-mono text-xs uppercase">
        {title}
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
