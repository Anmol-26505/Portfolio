import CPP from "../assets/cppimage.png";
import Swift from "../assets/swiftnest.png";
import CS from "../assets/comingsoon.png";
import CI from "../assets/checkin.png";

const projects = [
  {
    id: 1,
    title: "DiagnostiX",
    image: CPP,
    description:
      "A healthcare companion designed to provide instant disease analysis and treatment recommendations.",
    tech: ["C++", "OOPs", "Data Structures"],
    github: "https://github.com/Anmol-26505",
    live: "https://example.com",
  },

  {
    id: 2,
    title: "SwiftNest",
    image: Swift,
    description:
      "From drivers to electricians, all services available in one app.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/Anmol-26505",
    live: "https://example.com",
  },

  {
    id: 3,
    title: "CheckIn",
    image: CI,
    description:
      "A digital renting site to get PG's and Meals",
    tech: ["HTML", "CSS","JavaScript"],
    github:"https://github.com/Anmol-26505",
    live: "https://example.com",
  },

  {
    id: 4,
    title: "Stay Updated",
    image: CS,
    description:
      "An exciting new project currently under development.",
    tech: ["React", "Coming Soon"],
    github: "",
    live: "",
  },


];

export default projects;