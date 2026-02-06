import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        role: "MERN Stack Developer Intern",
        company: "Diamond Ore Consulting",
        period: "Sept 2025 - Present",
        description: [
            "Developing responsive web pages using React.js and Tailwind.",
            "Working with Strapi CMS for dynamic content management and API integration.",
            "Implementing reusable frontend components to improve development efficiency.",
            "Contributed to Agile workflows with GitHub for version control."
        ]
    },
    {
        role: "Full Stack Developer Intern",
        company: "TrayiStats AI Technologies",
        period: "Jan 2025 - Aug 2025",
        description: [
            "Developed dynamic, reusable UI components using React.js for responsive interfaces.",
            "Built and integrated REST APIs using Node.js and Express.js.",
            "Designed optimized MySQL queries, joins, and stored procedures.",
            "Converted Figma designs into production-ready, responsive layouts."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Work Experience
                    </motion.h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </div>

                <div className="relative border-l border-slate-700 ml-4 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 bg-cyan-500 rounded-full ring-4 ring-slate-900"></div>

                            <div className="bg-slate-800 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-700 hover:border-cyan-500/30 transition-all">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                                        <h4 className="text-lg text-cyan-400 font-medium flex items-center gap-2">
                                            <Briefcase size={16} /> {exp.company}
                                        </h4>
                                    </div>
                                    <div className="flex items-center text-gray-400 text-sm font-medium bg-slate-900 px-3 py-1 rounded-full w-fit">
                                        <Calendar size={14} className="mr-2" />
                                        {exp.period}
                                    </div>
                                </div>

                                <ul className="list-disc list-outside ml-4 space-y-2 text-gray-300">
                                    {exp.description.map((item, idx) => (
                                        <li key={idx} className="pl-1">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
