import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <>
            <SEO
                title="Mohit Verma | Expert Frontend & MERN Stack Developer"
                description="I am Mohit Verma, a passionate MERN Stack Developer building scalable, high-performance web applications. Explore my portfolio and projects."
                keywords="Mohit Verma, MERN Stack Developer, Frontend Developer, React Developer, Web Development Services"
            />
            <div id="home">
                <Hero />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="skills">
                <Skills />
            </div>
            <div id="experience">
                <Experience />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </>
    );
};

export default Home;
