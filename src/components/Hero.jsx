import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import {
  ArrowRight,
  Code2,
  Download,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
  Zap,
} from 'lucide-react';
import dp1 from '../assets/dp1.jfif';
import { expertisePills, heroMetrics, logoSkills, personalInfo } from '../data/portfolioData';

const Hero = () => {
  const featuredSkills = logoSkills.slice(0, 6);
  const skillRail = [...expertisePills, ...featuredSkills.map((skill) => skill.name)];
  const visualHighlights = [
    'Reusable React systems',
    'CMS + REST API delivery',
    'Performance-minded UI',
  ];

  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden pb-20 pt-24 sm:pb-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-[30rem] w-[120vw] -translate-x-1/2 -rotate-6 border-y border-pearl/10 bg-[linear-gradient(90deg,transparent,rgba(242,204,103,0.08),rgba(123,215,189,0.07),transparent)]" />
        <div className="absolute left-[-10%] top-28 h-40 w-[120%] -rotate-6 overflow-hidden opacity-80">
          <div
            className="h-full w-[160%] bg-[repeating-linear-gradient(90deg,rgba(247,242,232,0.0)_0_34px,rgba(247,242,232,0.12)_34px_35px,rgba(247,242,232,0.0)_35px_72px)]"
            style={{ animation: 'rail-scan 9s ease-in-out infinite alternate' }}
          />
        </div>
      </div>

      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto max-w-5xl text-center"
        >
          <span className="pill">
            <Sparkles size={16} className="text-citrine" />
            {personalInfo.availability}
          </span>

          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-pearl/48">
            {personalInfo.role}
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[0.98] text-pearl sm:text-6xl xl:text-7xl">
            <span className="block">{personalInfo.name}</span>
            <span className="mt-2 block bg-gradient-to-r from-citrine via-pearl to-mint bg-clip-text text-transparent">
              React products with full-stack depth.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-pearl/68 sm:text-lg">
            React developer building polished interfaces, reusable UI systems, APIs, auth flows, and CMS-powered products.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <ScrollLink
              to="projects"
              smooth
              duration={500}
              offset={-100}
              className="magnetic-link inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-citrine via-ember to-mint px-6 py-3.5 text-base font-semibold text-[#17140c] shadow-[0_18px_60px_rgba(242,204,103,0.22)] transition hover:-translate-y-1"
            >
              View projects <ArrowRight size={18} />
            </ScrollLink>
            <a
              href={personalInfo.resumePath}
              download="Mohit-Verma-Resume.pdf"
              className="magnetic-link inline-flex items-center justify-center gap-2 rounded-full border border-pearl/12 bg-pearl/[0.06] px-6 py-3.5 text-base font-semibold text-pearl transition hover:-translate-y-1 hover:border-mint/35 hover:bg-mint/10"
            >
              Download resume <Download size={18} />
            </a>
          </div>
        </motion.div>

        <div className="mt-10 grid items-start gap-5 lg:grid-cols-[0.82fr,1.18fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.08 }}
            className="glass-panel relative overflow-hidden p-3 sm:p-4"
          >
            <div className="absolute inset-0 bg-[linear-gradient(128deg,rgba(242,204,103,0.13),transparent_34%,rgba(123,215,189,0.11)_64%,transparent)]" />
            <div className="relative grid h-full gap-3 sm:grid-cols-[0.82fr,1fr] lg:grid-cols-1">
              <div className="relative min-h-[22rem] overflow-hidden rounded-[20px] border border-pearl/12 bg-[#0d0f09] sm:min-h-[24rem] lg:min-h-[26rem]">
                <img
                  src={dp1}
                  alt={personalInfo.name}
                  className="absolute inset-0 h-full w-full object-cover object-[center_6%] grayscale-[18%] contrast-110 saturate-110"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_34%,rgba(7,8,5,0.88)_100%)]" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-pearl/12 bg-black/35 px-3.5 py-2 text-xs uppercase tracking-[0.18em] text-pearl/75 backdrop-blur-xl">
                  <Code2 size={15} className="text-citrine" />
                  React + MERN
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-[18px] border border-pearl/10 bg-black/36 p-4 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.22em] text-citrine">Live product builder</p>
                  <p className="mt-2 text-sm leading-6 text-pearl/72">
                    Education, commerce, and business platforms.
                  </p>
                </div>
              </div>

              <div className="relative grid gap-3 sm:grid-rows-[1fr,auto] lg:hidden">
                {visualHighlights.map((item) => (
                  <div key={item} className="rounded-[18px] border border-pearl/10 bg-pearl/[0.045] p-4">
                    <Zap className="h-5 w-5 text-citrine" />
                    <p className="mt-3 text-sm font-semibold leading-5 text-pearl/82">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.12 }}
            className="grid gap-5"
          >
            <div className="hidden gap-5 md:grid md:grid-cols-3">
              {visualHighlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.48, delay: 0.18 + index * 0.08 }}
                  className="group relative overflow-hidden rounded-[24px] border border-pearl/10 bg-pearl/[0.045] p-5"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-citrine/70 to-transparent" />
                  <Zap className="h-5 w-5 text-citrine transition group-hover:scale-110" />
                  <p className="mt-4 text-sm font-semibold leading-6 text-pearl/82">{item}</p>
                </motion.div>
              ))}
            </div>

            <div className="glass-panel relative overflow-hidden p-5 sm:p-6">
              <div className="absolute -right-10 top-0 h-full w-44 rotate-12 bg-gradient-to-b from-citrine/12 via-mint/8 to-transparent" />
              <div className="relative flex flex-wrap gap-3">
                {expertisePills.map((item) => (
                  <span key={item} className="pill transition hover:-translate-y-1 hover:border-citrine/35 hover:text-white">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {heroMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.1 * index }}
                  className="glass-panel card-lift relative min-h-[10.5rem] overflow-hidden p-5"
                >
                  <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-citrine via-mint to-transparent opacity-70" />
                  <p className="font-display text-3xl text-pearl">{metric.value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-pearl/70">
                    {metric.label}
                  </p>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-pearl/50">{metric.detail}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-5 md:grid-cols-[1fr,0.9fr]">
              <div className="relative overflow-hidden rounded-[22px] border border-pearl/10 bg-pearl/[0.04] py-3">
                <div className="flex w-max gap-3 whitespace-nowrap px-4" style={{ animation: 'marquee-left 18s linear infinite' }}>
                  {[...skillRail, ...skillRail].map((item, index) => (
                    <span key={`${item}-${index}`} className="rounded-full border border-pearl/10 bg-black/20 px-4 py-2 text-sm text-pearl/72">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 rounded-[22px] border border-pearl/10 bg-pearl/[0.045] px-5 py-4 text-sm text-pearl/68">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <Linkedin size={17} className="text-mint" />
                  LinkedIn
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <Github size={17} className="text-mint" />
                  GitHub
                </a>
                <span className="inline-flex items-center gap-2 text-pearl/52">
                  <MapPin size={17} className="text-mint" />
                  Noida
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
