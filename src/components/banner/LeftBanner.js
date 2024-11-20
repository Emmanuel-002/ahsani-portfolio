import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
  FaPython,
  FaPhp,
  FaBootstrap,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa6";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Programmer.", "Full Stack Developer.", "Data Analyst"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hello, I'm <span className="text-designColor capitalize">Adam Sani</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        A Programmer with a strong background in data structures, algorithms, machine learning.
        Highly detail-oriented and analytical professional with expertise in extracting insights from complex data sets to inform business decisions.
        Innovative problem-solver with a passion for developing seamless user experiences across web and mobile platforms.
        Multidisciplinary professional combining data analysis expertise with full stack development skills to drive data-driven solutions.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Let's Talk
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/adamhammawa" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://twitter.com/adermsani" target="blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
            <a href="https://linkedin.com/in/adam-sani" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
            <RiJavascriptFill />
            </span>
            <span className="bannerIcon">
              <FaPython />
            </span>
            <span className="bannerIcon">
              <FaNode />
            </span>
            <span className="bannerIcon">
              <FaPhp />
            </span>
            <span className="bannerIcon">
              <FaBootstrap />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
