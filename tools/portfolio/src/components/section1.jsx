import React from "react";
import MainPic from "../assets/mypic.PNG";
import { TypeAnimation } from "react-type-animation";

const Section1 = () => {
  return (
    <div className="flex h-screen bg-black gap-20 ">
      <div className="p-10 mt-10 ml-5">
        <img src={MainPic} alt="" width="400px" className="rounded-2xl" />
      </div>
      <div className="p-10 mt-10 ml-5">
        <p className="text-lg text-white font-medium">Hello, I'm</p>
        <TypeAnimation
          sequence={[
            "Anmol",
            1500,
            "Frontend Developer",
            1500,
            "React Developer",
            1500,
            "Problem Solver",
            1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-6xl font-bold text-cyan-900"
        />
        <p className="mt-4 text-xl md:text-2xl text-white">
          Programmer by Passion • Traveller by Choice • Hustler by Mindset
        </p>

        <p className="mt-6 max-w-2xl text-white leading-relaxed">
          I build modern web applications, continuously learn new technologies,
          and enjoy turning ideas into real-world solutions while exploring new
          places and opportunities.
        </p>
        <button className="p-3 mt-10 ml-50 bg-cyan-500/10 border border-cyan-500 text-cyan-300 rounded-2xl font-normal transition-all duration-300 hover:-translate-y-2 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.7)]">
          Explore Me
        </button>
      </div>
    </div>
  );
};

export default Section1;
