import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Globe } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        About Me
                    </motion.h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1"
                    >
                        <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 hover:border-cyan-500/50 transition-colors relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <h3 className="text-2xl font-semibold text-cyan-400 mb-6 relative z-10">Who I am</h3>
                            <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                                I am a passionate <strong className="text-white">MERN Stack Developer</strong> with hands-on experience in building modern, responsive, and user-friendly web applications.
                                I specialize in transforming ideas into functional code, ensuring clean architecture and optimal performance.
                            </p>
                            <p className="text-gray-300 leading-relaxed relative z-10">
                                Currently working as a <strong className="text-white">MERN Stack Developer Intern at Diamond Ore Consulting</strong>,
                                I contribute to developing frontend components, integrating APIs, and collaborating on full-stack solutions.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:bg-slate-750 transition-colors">
                            <Code className="text-cyan-400 w-10 h-10 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">Frontend</h4>
                            <p className="text-gray-400 text-sm">Crafting responsive and interactive UIs with React & Tailwind.</p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:bg-slate-750 transition-colors">
                            <Server className="text-blue-500 w-10 h-10 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">Backend</h4>
                            <p className="text-gray-400 text-sm">Building scalable APIs with Node.js & Express.</p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:bg-slate-750 transition-colors">
                            <Database className="text-cyan-400 w-10 h-10 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">Database</h4>
                            <p className="text-gray-400 text-sm">Managing data with MongoDB & MySQL.</p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:bg-slate-750 transition-colors">
                            <Globe className="text-blue-500 w-10 h-10 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">Deployment</h4>
                            <p className="text-gray-400 text-sm">Deploying on Vercel, Render and managing CI/CD.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
