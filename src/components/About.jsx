import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers3, ServerCog, Zap } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { strengthCards } from '../data/portfolioData';

const iconMap = {
  ui: Code2,
  systems: Layers3,
  api: ServerCog,
  performance: Zap,
};

const quickSignals = [
  { value: 'React', label: 'UI craft' },
  { value: 'MERN', label: 'Product flows' },
  { value: 'CMS', label: 'Content systems' },
  { value: 'Perf', label: 'Fast delivery' },
];

const About = () => {
  return (
    <section id="about" className="section-block scroll-mt-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="About"
          title="Frontend polish with full-stack depth."
          description="Clean interfaces, reusable systems, API integration, and real delivery."
        />

        <div className="grid gap-5 lg:grid-cols-[0.9fr,1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="glass-panel relative overflow-hidden p-5 sm:p-7 lg:p-8"
          >
            <div className="absolute -right-16 top-0 h-full w-44 rotate-12 bg-gradient-to-b from-citrine/16 via-mint/8 to-transparent" />
            <p className="text-xs uppercase tracking-[0.24em] text-citrine sm:text-sm">Profile</p>
            <h3 className="relative mt-4 max-w-xl break-words font-display text-2xl leading-tight text-pearl sm:text-3xl lg:text-4xl">
              I turn React screens into usable product experiences.
            </h3>

            <div className="relative mt-7 grid gap-3 min-[420px]:grid-cols-2">
              {quickSignals.map((signal) => (
                <div key={signal.label} className="min-w-0 rounded-[18px] border border-pearl/10 bg-black/22 p-4 sm:rounded-[20px] sm:p-5">
                  <p className="break-words font-display text-2xl text-citrine sm:text-3xl">{signal.value}</p>
                  <p className="mt-2 break-words text-sm leading-5 text-pearl/58">{signal.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {strengthCards.map((card, index) => {
              const Icon = iconMap[card.key];

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="glass-panel card-lift min-w-0 p-5 sm:p-6"
                >
                  <div className="flex min-w-0 items-start gap-4 sm:items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-pearl/10 bg-pearl/[0.05]">
                      <Icon className="h-6 w-6 text-mint" />
                    </div>
                    <h3 className="min-w-0 break-words font-display text-lg leading-tight text-pearl sm:text-xl">{card.title}</h3>
                  </div>
                  <p className="mt-4 line-clamp-2 text-sm leading-6 text-pearl/58">{card.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
