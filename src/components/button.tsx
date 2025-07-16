import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const MainButton = ({ children, className = "", onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    className={`
      bg-[#A3E635] hover:bg-[#BEF264]
      flex justify-center items-center
      h-[3rem]
      text-black 
      rounded-full px-[33px] py-[17px]
      font-medium transition-colors duration-300 ease-in-out
      ${className}
    `}
  >
    {children}
  </button>
);

export const SecondaryButton = ({ children, className = "", onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    className={`
      text-white border border-[#9CA3AF]
      flex justify-center items-center
      h-[3rem]
      hover:bg-[#9CA3AF] hover:text-white
      rounded-full px-[33px] py-[17px] 
      transition-colors duration-300 ease-in-out
      ${className}
    `}
  >
    {children}
  </button>
);

export default MainButton;
