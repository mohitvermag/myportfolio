import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpenCheck, GraduationCap } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { educationData } from '../data/portfolioData';

const Credentials = () => {
  return (
    <section id="credentials" className="section-block scroll-mt-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Credentials"
          title="Academic grounding."
          description="Strong MCA performance, including first rank and practical software foundations."
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="glass-panel relative overflow-hidden p-4 sm:p-5 lg:p-6"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-citrine/60 to-transparent" />
          <div className="grid gap-3 md:grid-cols-[0.8fr,1fr,1fr]">
            <div className="flex min-w-0 items-center gap-3 rounded-[18px] border border-citrine/16 bg-citrine/[0.075] p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-citrine/20 bg-black/20">
                <Award className="h-6 w-6 text-citrine" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.18em] text-citrine">MCA Rank</p>
                <p className="mt-1 font-display text-2xl text-pearl">1st</p>
              </div>
            </div>

            {educationData.map((item, index) => {
              const Icon = index === 0 ? GraduationCap : BookOpenCheck;

              return (
                <div
                  key={item.title}
                  className="flex min-w-0 items-start gap-3 rounded-[18px] border border-pearl/10 bg-pearl/[0.04] p-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-pearl/10 bg-black/22">
                    <Icon className="h-6 w-6 text-mint" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="break-words font-display text-lg leading-tight text-pearl">{item.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-pearl/58">{item.note}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Credentials;
