import React from 'react'
import Logo from '../assets/logo.png'


const Navbar = () => {
  return (
    <div  >
      <div className='bg-black p-5 flex justify-between '>
      <div>
        <img
  src={Logo}
  alt="logo"
  width='70px'
/>
      </div>
      <div className='text-white flex gap-5' >
        <button className="px-5  bg-cyan-500/10 border border-cyan-500 text-cyan-300 rounded-2xl font-normal transition-all duration-300 hover:-translate-y-2 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.7)]">
    Home
  </button>

  <button className="px-5  bg-cyan-500/10 border border-cyan-500 text-cyan-300 rounded-2xl font-normal transition-all duration-300 hover:-translate-y-2 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.7)]">
    Skills
  </button>

  <button className="px-5  bg-cyan-500/10 border border-cyan-500 text-cyan-300 rounded-2xl font-normal transition-all duration-300 hover:-translate-y-2 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.7)]">
    Projects
  </button>

  <button className="px-5  bg-cyan-500/10 border border-cyan-500 text-cyan-300 rounded-2xl font-normal transition-all duration-300 hover:-translate-y-2 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.7)]">
    About
  </button>
      </div>
      </div>
    </div>
  )
}

export default Navbar