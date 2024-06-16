import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Saiyam Rawat
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer hover:text-[#787778] font-semibold">
              About me
            </a>
            <a href="#skills" className="cursor-pointer hover:text-[#787778] font-semibold">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:text-[#787778] font-semibold">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <a href="https://www.instagram.com/saiyam_rawat04/" >
            <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
          </a>
          <a href="https://www.linkedin.com/in/saiyamrawat111/">
            <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://github.com/saiyam0905">
            <Image src="/discord.svg" alt="Discord" width={24} height={24} />
          </a>
          <a href="mailto:saiyamr0905@gmail.com">
            <Image src="/gmail.svg" alt="Gmail" width={24} height={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
