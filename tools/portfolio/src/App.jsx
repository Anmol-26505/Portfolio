import React from 'react'
import Navbar from './components/Navbar'
import Section1 from './components/section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import { Element } from "react-scroll";

const App = () => {
  return (
    <div>
      <Navbar />

      <Element name="home">
        <Section1 />
      </Element>

      <Element name="skills">
        <Section2 />
      </Element>

      <Element name="projects">
        <Section3 />
      </Element>

      <Element name="about">
        <Section4 />
      </Element>

    </div>
  )
}

export default App


