import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, CalendarDays, MapPin, TrendingUp } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { experienceData } from '../data/portfolioData';

const impactStats = [
  { value: '40%', label: 'less CMS work' },
  { value: '25-30%', label: 'faster features' },
  { value: '20-30%', label: 'faster queries' },
];

const Experience = () => {
  return (
    <section id="experience" className="section-block scroll-mt-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Experience"
          title="Internship work with outcomes."
          description="Role, stack, measurable impact, and shipped product work."
        />

        <div className="grid gap-5 lg:grid-cols-[0.72fr,1.28fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="glass-panel relative overflow-hidden p-5 sm:p-7"
          >
            <div className="absolute -right-14 top-0 h-full w-40 rotate-12 bg-gradient-to-b from-citrine/16 to-mint/6" />
            <p className="relative text-sm uppercase tracking-[0.28em] text-citrine">Impact</p>
            <div className="relative mt-6 grid gap-3">
              {impactStats.map((stat) => (
                <div key={stat.label} className="rounded-[22px] border border-pearl/10 bg-black/24 p-5">
                  <p className="font-display text-4xl text-pearl">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.16em] text-pearl/52">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-5">
            {experienceData.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.period}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group grid overflow-hidden rounded-[20px] border border-pearl/11 bg-[#0d0f09]/78 transition hover:-translate-y-1 hover:border-citrine/25 sm:rounded-[26px] md:grid-cols-[0.9fr,1.1fr]"
                >
                <div className="relative border-b border-pearl/10 p-5 sm:p-6 md:border-b-0 md:border-r">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(242,204,103,0.1),transparent_46%,rgba(123,215,189,0.07))]" />
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-pearl/10 bg-pearl/[0.05]">
                      <BriefcaseBusiness className="h-6 w-6 text-citrine" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl leading-tight text-pearl">
                      {experience.role}
                    </h3>
                    <div className="mt-4 space-y-2 text-sm text-pearl/58">
                      <p className="inline-flex items-center gap-2">
                        <TrendingUp size={16} className="text-mint" />
                        {experience.company}
                      </p>
                      <p className="inline-flex items-center gap-2">
                        <MapPin size={16} className="text-mint" />
                        {experience.location}
                      </p>
                      <p className="inline-flex items-center gap-2">
                        <CalendarDays size={16} className="text-citrine" />
                        {experience.period}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="grid gap-3">
                    {experience.achievements.slice(0, 2).map((item) => (
                      <div key={item} className="rounded-[20px] border border-pearl/10 bg-pearl/[0.04] p-4">
                        <p className="line-clamp-2 text-sm leading-6 text-pearl/66">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-pearl/10 bg-black/24 px-3 py-1.5 text-xs font-medium text-pearl/72"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
