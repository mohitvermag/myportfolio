import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
    {
        title: "To Do App",
        description: "Designed and developed a highly efficient task management application featuring persistent local storage, enabling users to organize daily activities with seamless data retention and a clutter-free UI.",
        tech: ["React", "Tailwind CSS", "LocalStorage"],
        links: { live: "https://mohitvermag.github.io/ToDo-App/" }
    },
    {
        title: "ZunaDesk",
        description: "Engineered a full-scale project management ecosystem with real-time task tracking, automated history logging, and role-based access control, optimizing team collaboration and workflow visibility.",
        tech: ["React", "Node.js", "MySQL", "Rest API"],
        links: { live: "https://zunadesk.com/" }
    },
    {
        title: "GemReact - AI Tool",
        description: "Built a sophisticated AI chat interface integrating the Gemini API, featuring context-aware conversations, search history persistence, and a highly responsive, modern UI for an enhanced user experience.",
        tech: ["React", "Tailwind CSS", "Gemini API"],
        links: { live: "https://mohitvermag.github.io/GemReact-React-AI-Tool/" }
    },
    {
        title: "Edayaa",
        description: "Architected a premium e-commerce platform for luxury jewellery, utilizing Redux for complex state management, ensuring secure transactions, and delivering a pixel-perfect, responsive shopping experience.",
        tech: ["React", "Node.js", "MongoDB", "Express", "Redux", "Tailwind CSS"],
        links: { live: "https://edayaajewellery.com/" }
    },
    {
        title: "Bird Outsourcing",
        description: "Developed a high-performance corporate website for an accounting firm, focusing on SEO optimization, fast load times, and a professional aesthetic to establish digital credibility.",
        tech: ["React", "Tailwind CSS"],
        links: { live: "https://bird-outsourcing.onrender.com/" }
    },
    {
        title: "SpectrumKart",
        description: "Created a dynamic e-commerce frontend for printer sales, implementing advanced filtering, seamless API data consumption, and an intuitive user journey to drive conversion rates.",
        tech: ["React", "API Integration", "Tailwind CSS"],
        links: { live: "https://spectrumkart.com/" }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Featured Projects
                    </motion.h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all group"
                        >
                            <div className="p-6 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-cyan-500/10 transition-colors">
                                        <Folder className="text-cyan-400 w-8 h-8" />
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="text-xs font-medium text-slate-300 bg-slate-800 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
