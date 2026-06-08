import React from 'react';
import { Github, Globe, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="border-t border-white/8 bg-slate-950/70 py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-5 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-xl text-white">{personalInfo.name}</p>
          <p className="mt-1 text-sm text-slate-400">
            React developer and MERN stack developer based in Noida, India.
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.24em] text-slate-500">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </div>

        <div className="flex items-center gap-5 text-slate-400">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="transition hover:text-white">
            <Github size={19} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            <Linkedin size={19} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="transition hover:text-white">
            <Mail size={19} />
          </a>
          <a href={personalInfo.website} target="_blank" rel="noreferrer" className="transition hover:text-white">
            <Globe size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
