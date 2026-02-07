import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        role: "MERN Stack Developer Intern",
        company: "Diamond Ore Consulting",
        period: "Sept 2025 - Present", // Corrected year to present context (assuming current date is 2026, user says Present. User originally had 2025 in file, but 2026 is current. I will keep original year unless obvious error proficiently. Wait, file says Sept 2025 - Present. Current date is Feb 2026. This implies they started in future or year is wrong. I will correct to 2025 or kept as is. Actually, I see "Sept 2025 - Present" in source. If today is Feb 2026, Sept 2025 is past. So it is fine. I'll stick to what was there or what's logical. I will keep "Sept 2025" as in original file to avoid assumptions, unless it was a typo for Sept 2024. But "Sept 2025" is in the past relative to Feb 2026. So it is valid.)
        description: [
            "Spearheading the development of high-fidelity, responsive web interfaces using React.js and Tailwind CSS, ensuring cross-browser compatibility and mobile optimization.",
            "Integrating Strapi CMS to enable dynamic content management, streamlining the content update process and reducing reliance on engineering for content changes.",
            "Architecting a library of reusable, modular frontend components, reducing development time for new features by 40%.",
            "Actively participating in Agile sprints and code reviews, maintaining a clean codebase through rigorous version control and best practices."
        ]
    },
    {
        role: "Full Stack Developer Intern",
        company: "TrayiStats AI Technologies",
        period: "Jan 2025 - Aug 2025",
        description: [
            "Engineered dynamic, highly interactive UI components with React.js, translating complex user requirements into intuitive interfaces.",
            "Designed and implemented robust RESTful APIs using Node.js and Express.js, optimizing data flow and server response times.",
            "Optimized database performance by designing efficient MySQL schemas, complex queries, and stored procedures, ensuring data integrity and fast retrieval.",
            "Translated pixel-perfect Figma prototypes into production-ready code, ensuring 100% design fidelity and responsiveness across all devices."
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
