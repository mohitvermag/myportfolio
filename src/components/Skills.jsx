import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React JS", "Tailwind CSS", "Bootstrap", "Material UI"] },
    { category: "Backend", items: ["Node JS", "Express JS", "REST APIs"] },
    { category: "Database", items: ["MySQL", "MongoDB"] },
    { category: "Tools & Others", items: ["Redux", "Postman", "Github", "Vercel", "Render"] },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Technical Skills
                    </motion.h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillsData.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all group"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 pl-4 border-l-4 border-cyan-500 group-hover:text-cyan-400 transition-colors">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 bg-slate-800 text-gray-300 rounded-full text-sm font-medium border border-slate-700 hover:border-cyan-500/50 hover:text-white transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
