import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Download } from 'lucide-react';
import dp1 from '../assets/dp1.jfif';
import cv from '../assets/Mohit_MERN.pdf';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-slate-950 pt-16 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-5 sm:py-0">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <h2 className="text-cyan-400 font-semibold tracking-wide uppercase mb-4">Welcome to Mohit's World</h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Mohit Verma</span>
                        </h1>
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-300 mb-6 min-h-[60px]">
                            a <span>
                                <Typewriter
                                    words={['MERN Stack Developer', 'Frontend Developer']}
                                    loop={true}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
                            Building modern, responsive, and user-friendly web applications.
                            Passionate about creating scalable solutions and contributing to innovative projects.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link to="contact" smooth={true} duration={500} className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center cursor-pointer">
                                Contact Me <ArrowRight size={20} className="ml-2" />
                            </Link>
                            <a href={cv} download="Mohit_Verma_CV.pdf" className="px-8 py-3 border border-slate-700 text-gray-300 rounded-full font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all flex items-center justify-center">
                                Download CV <Download size={20} className="ml-2" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.5 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                            <div className="relative w-full h-full rounded-full border-4 border-slate-800 bg-slate-900 overflow-hidden shadow-2xl">
                                {/* Profile Image */}
                                <img
                                    src={dp1}
                                    alt="Mohit Verma"
                                    className="w-full h-full object-cover transform scale-110"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
