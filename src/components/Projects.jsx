import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { projectData } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="section-block scroll-mt-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Projects"
          title="Projects built for real businesses."
          description="Commerce, education, and service platforms with clear product work and live links."
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {projectData.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group overflow-hidden rounded-[20px] border border-pearl/11 bg-[#0d0f09]/78 transition duration-500 hover:-translate-y-2 hover:border-citrine/28 sm:rounded-[24px]"
            >
              <div className="relative h-44 overflow-hidden sm:h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:saturate-125"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,5,0.04),rgba(7,8,5,0.86))]" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.18em] text-citrine sm:text-xs sm:tracking-[0.22em]">{project.category}</p>
                  <h3 className="mt-2 font-display text-xl leading-tight text-pearl sm:text-2xl">{project.title}</h3>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <p className="line-clamp-2 text-sm leading-6 text-pearl/64 sm:line-clamp-3">{project.summary}</p>

                <div className="mt-4 rounded-[16px] border border-citrine/14 bg-citrine/[0.055] p-3 sm:mt-5 sm:rounded-[18px]">
                  <p className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-citrine">
                    <Sparkles size={14} />
                    What I built
                  </p>
                  <div className="mt-3 grid gap-2.5">
                    {project.highlights.slice(0, 2).map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-mint" />
                        <p className="text-xs leading-5 text-pearl/68">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
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
                  className="magnetic-link mt-5 inline-flex items-center gap-2 rounded-full border border-citrine/24 bg-citrine/10 px-4 py-2.5 text-sm font-semibold text-pearl transition hover:-translate-y-1 hover:border-citrine/45 hover:bg-citrine/16 sm:mt-6"
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
