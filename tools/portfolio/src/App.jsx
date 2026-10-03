import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar";
import Section1 from "./components/section1";
import Section3 from "./components/Section3";
import Section2 from "./components/Section2";
import Timeline from "./components/Timeline";
import Section4 from "./components/Section4";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BookPreloader from "./components/BookPreloader";

const App = () => {
  const [showApp, setShowApp] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("portfolio-theme");
      if (savedTheme) return savedTheme;
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      {!showApp && <BookPreloader onComplete={() => setShowApp(true)} />}
      <div className={`min-h-screen bg-[#fafaf9] dark:bg-[#09090b] text-[#18181b] dark:text-[#f4f4f5] selection:bg-orange-100 dark:selection:bg-amber-950 selection:text-orange-950 dark:selection:text-amber-200 font-sans transition-colors duration-300 ${!showApp ? 'h-screen overflow-hidden' : ''}`}>
      {/* Floating Pill Navigation with Day & Night Switch */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section */}
        <Element name="home">
          <Section1 />
        </Element>

        {/* Selected Works Gallery */}
        <Element name="projects">
          <Section3 />
        </Element>

        {/* Technical Capabilities & Stack */}
        <Element name="skills">
          <Section2 />
        </Element>

        {/* Engineering Journey */}
        <Element name="journey">
          <Timeline />
        </Element>

        {/* About & Philosophy */}
        <Element name="about">
          <Section4 />
        </Element>

        {/* Contact Transmission */}
        <Element name="contact">
          <Contact />
        </Element>
      </main>

      {/* Refined Minimalist Footer */}
      <Footer />
    </div>
    </>
  );
};

export default App;
