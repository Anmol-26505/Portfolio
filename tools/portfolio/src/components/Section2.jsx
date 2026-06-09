import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiCplusplus,
  SiPython,
} from "react-icons/si";

import { TbBinaryTree } from "react-icons/tb";

const Section2 = () => {
  const skills = [
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <TbBinaryTree />, name: "DSA" },
  ];

  return (
    <section className="bg-black min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-cyan-400 mb-14">Development Arsenal {"</>"}</h1>

      <div className="w-250 border border-cyan-500 rounded-xl overflow-hidden shadow-[0_0_25px_rgba(6,182,212,0.3)]">
        <div className="bg-zinc-900 p-3 flex gap-3">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        <div className="bg-black p-6 text-cyan-400 font-mono">
          <TypeAnimation
            sequence={[
              "> loading skills...",
              1000,
              "> loading React...",
              1000,
              "> loading JavaScript...",
              1000,
              "> loading C++...",
              1000,
              "> skills loaded successfully 🚀",
            ]}
            speed={60}
            repeat={0}
          />
        </div>

        <div className="grid grid-cols-4 gap-3 mt-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-cyan-400"
            >
              <div className="text-6xl">{skill.icon}</div>

              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
