import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Section4 = () => {
  return (
    <div className='bg-black min-h-screen'>
      <div >
        <h1 className='text-3xl md:text-5xl  text-cyan-900  text-center font-bold py-15'>Behind the Developer , Meet the Person❤️ </h1>
      </div>
      <div>
        <p className=' text-cyan-900 mx-5 md:mx-20 p-3'>
            Behind every line of code is a story of curiosity and growth.
        </p>
      </div>
      <div>
        <p className=' text-cyan-900 mx-5 md:mx-20 mt-2 p-3'>
           I began my journey by exploring C++ and understanding the logic behind software. With time, I discovered my interest in web development and the art of creating seamless digital experiences.
        </p>
      </div>
        <div>
        <p className=' text-cyan-900 mx-5 md:mx-20 mt-2 p-3'>
           Today, I spend my time building projects, learning new technologies, solving programming challenges, and pushing myself to become a better developer every day.
        </p>
      </div>
      <div>
        <p className='font-serif text-white mt-10 text-center italic'>"Even if i Lose everything ,I will take a break fix my crown and conquer it once again because it is not me it is within me" <br/></p>
        <p className='font-serif text-white  text-right mr-5 md:mr-50'> - Anmol ❤️</p>
      </div>
      <div>
       <footer className="bg-black text-white py-15">

      
      <div className="w-[90%] h-px bg-zinc-700 mx-auto"></div>

      
      <div className="flex flex-col items-center mt-10">

        <h1 className="text-2xl md:text-3xl text-center font-bold text-cyan-400">
          Let's Build Something Amazing Together
        </h1>

        <p className="text-gray-400 mt-3 text-center">
          Feel free to connect with me and explore my work.
        </p>

        
        <div className="flex gap-8 text-3xl md:text-4xl mt-8">

          <a
            href="https://github.com/Anmol-26505"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 hover:scale-125 duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/anmolchauhan84/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 hover:scale-125 duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/youknow_anmol/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 hover:scale-125 duration-300"
          >
            <FaInstagram />
          </a>

        </div>

        
        <p className="text-gray-500 mt-10 text-sm">
          © 2026 Anmol | Designed & Developed with ❤️ using React
        </p>

      </div>

    </footer>
      </div>
    </div>
  )
}

export default Section4
