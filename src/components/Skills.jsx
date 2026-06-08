import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { logoSkills, skillBuckets } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="section-block scroll-mt-28 border-t border-white/6">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Skills"
          title="Core technologies presented the way recruiters actually scan them: fast and visual."
          description="The stack is strongest around React, JavaScript, Tailwind, APIs, CMS integration, and practical product delivery."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {logoSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="glass-panel card-lift flex items-center gap-4 p-5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl border border-white/10 bg-slate-950/70">
                <img src={skill.icon} alt={skill.name} className="h-8 w-8" loading="lazy" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">{skill.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{skill.tone}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {skillBuckets.map((bucket, index) => (
            <motion.div
              key={bucket.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-panel card-lift p-7"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{bucket.title}</p>
              <p className="mt-4 text-base leading-7 text-slate-300">{bucket.description}</p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {bucket.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-slate-200"
                  >
                    {item}
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
