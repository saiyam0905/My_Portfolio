import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-screen-lg flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-lg mb-2">Community</div>
            <a
              href="https://github.com/saiyam0905"
              className="flex items-center my-2 cursor-pointer text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxGithubLogo size={24} className="mr-2" />
              Github
            </a>
            <a
              href="https://discord.com"
              className="flex items-center my-2 cursor-pointer text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxDiscordLogo size={24} className="mr-2" />
              Discord
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-lg mb-2">Social Media</div>
            <a
              href="https://www.instagram.com/saiyam_rawat04/?hl=en"
              className="flex items-center my-2 cursor-pointer text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxInstagramLogo size={24} className="mr-2" />
              Instagram
            </a>
            <a
              href="https://twitter.com"
              className="flex items-center my-2 cursor-pointer text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxTwitterLogo size={24} className="mr-2" />
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/saiyamrawat111"
              className="flex items-center my-2 cursor-pointer text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxLinkedinLogo size={24} className="mr-2" />
              Linkedin
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-lg mb-2">About</div>
            <p className="text-base my-2">Learning about me</p>
            <p className="text-base my-2">Saiyamr0905@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
