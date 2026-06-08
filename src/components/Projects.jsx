import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { projectData } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="section-block scroll-mt-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Projects"
          title="Live projects, tighter and easier to scan."
          description="Each card keeps the useful signal: what it is, what changed, and where to view it."
          align="center"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group overflow-hidden rounded-[26px] border border-pearl/11 bg-[#0d0f09]/78 transition duration-500 hover:-translate-y-2 hover:border-citrine/28"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:saturate-125"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,5,0.04),rgba(7,8,5,0.86))]" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-citrine">{project.category}</p>
                  <h3 className="mt-2 font-display text-2xl leading-tight text-pearl">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="line-clamp-3 text-sm leading-6 text-pearl/64">{project.summary}</p>

                <div className="mt-5 grid gap-2.5">
                  {project.highlights.slice(0, 2).map((item) => (
                    <div key={item} className="flex items-start gap-2.5 rounded-[18px] border border-pearl/10 bg-pearl/[0.04] p-3">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-mint" />
                      <p className="line-clamp-2 text-xs leading-5 text-pearl/62">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-pearl/10 bg-black/24 px-3 py-1.5 text-xs text-pearl/72"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="magnetic-link mt-6 inline-flex items-center gap-2 rounded-full border border-citrine/24 bg-citrine/10 px-4 py-2.5 text-sm font-semibold text-pearl transition hover:-translate-y-1 hover:border-citrine/45 hover:bg-citrine/16"
                >
                  View live <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
