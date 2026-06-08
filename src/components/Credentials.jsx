import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpenCheck, GraduationCap } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { educationData, personalInfo } from '../data/portfolioData';

const Credentials = () => {
  return (
    <section id="credentials" className="section-block scroll-mt-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Credentials"
          title="Academic grounding backed by measurable achievement."
          description="The portfolio is built around real internship outcomes, but the academic base is strong as well - including first rank in the MCA program."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="glass-panel card-lift relative overflow-hidden p-5 sm:p-8 lg:p-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,204,103,0.16),transparent_48%)]" />
            <div className="relative">
              <span className="pill max-w-full text-xs sm:text-sm">
                <Award size={16} className="text-citrine" />
                <span className="min-w-0 break-words">Standout academic performance</span>
              </span>
              <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-citrine/20 bg-citrine/10 sm:h-16 sm:w-16">
                  <Award className="h-8 w-8 text-citrine sm:h-9 sm:w-9" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.22em] text-pearl/48 sm:text-sm">Recognition</p>
                  <h3 className="mt-2 break-words font-display text-2xl leading-tight text-pearl sm:text-3xl lg:text-4xl">
                    Academic Excellence Award
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-pearl/64 sm:text-base">
                    Secured 1st rank in the Master of Computer Applications program, reinforcing a
                    strong foundation in software engineering and disciplined execution.
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="min-w-0 rounded-[22px] border border-pearl/10 bg-pearl/[0.045] p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-pearl/48 sm:text-sm">Focus area</p>
                  <p className="mt-3 break-words text-base font-medium leading-6 text-pearl sm:text-lg">
                    Product-minded frontend and MERN development
                  </p>
                </div>
                <div className="min-w-0 rounded-[22px] border border-pearl/10 bg-pearl/[0.045] p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-pearl/48 sm:text-sm">Based in</p>
                  <p className="mt-3 break-words text-base font-medium leading-6 text-pearl sm:text-lg">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {educationData.map((item, index) => {
              const Icon = index === 0 ? GraduationCap : BookOpenCheck;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className="glass-panel card-lift p-5 sm:p-7 lg:p-8"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-pearl/10 bg-pearl/[0.05] sm:h-14 sm:w-14">
                      <Icon className="h-7 w-7 text-mint" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="break-words font-display text-xl leading-tight text-pearl sm:text-2xl">{item.title}</h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-pearl/62 sm:text-base">
                        {item.note}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
