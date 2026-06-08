import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Credentials from '../components/Credentials';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import SEO from '../components/SEO';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <>
      <SEO
        title="Mohit Verma | React Developer and MERN Stack Developer"
        description="Portfolio of Mohit Verma, a React developer with hands-on MERN stack experience building polished interfaces, REST APIs, and production-ready web applications."
        keywords="Mohit Verma, React Developer, MERN Stack Developer, Frontend Developer, Portfolio, JavaScript, Tailwind CSS, Node.js"
      />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Credentials />
      <Contact />
    </>
  );
};

export default Home;
