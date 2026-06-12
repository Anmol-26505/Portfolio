import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-black p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <img src={Logo} alt="logo" width="70px" />
        </div>
       <div className="text-white flex flex-wrap justify-center gap-3">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-90}
            activeClass="active"
            className="px-3 md:px-5 py-2 text-sm md:text-base cursor-pointer bg-cyan-500/10 border border-cyan-500 text-cyan-300 rounded-2xl font-normal transition-all duration-300 hover:-translate-y-2 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.7)]"
          >
            Home
          </Link>

          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            offset={-90}
            activeClass="active"
            className="px-3 md:px-5 py-2 text-sm md:text-base cursor-pointer bg-cyan-500/10 border border-cyan-500 text-cyan-300 rounded-2xl font-normal transition-all duration-300 hover:-translate-y-2 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.7)]"
          >
            Skills
          </Link>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-90}
            activeClass="active"
            className="px-3 md:px-5 py-2 text-sm md:text-base cursor-pointer bg-cyan-500/10 border border-cyan-500 text-cyan-300 rounded-2xl font-normal transition-all duration-300 hover:-translate-y-2 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.7)]"
          >
            Projects
          </Link>

          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-90}
            activeClass="active"
            className="px-3 md:px-5 py-2 text-sm md:text-base cursor-pointer bg-cyan-500/10 border border-cyan-500 text-cyan-300 rounded-2xl font-normal transition-all duration-300 hover:-translate-y-2 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.7)]"
          >
            About
          </Link>
          <a
            href="/Anmol_CV.pdf"
            download
            className="flex items-center gap-2px-3 md:px-5 py-2 text-sm md:text-base bg-cyan-500/10 border border-cyan-500 text-cyan-300 rounded-2xl transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.7)]"
          >
            <FaDownload />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
