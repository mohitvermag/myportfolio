import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import dp1 from '../assets/dp1.jfif';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (!element) {
      return;
    }

    const top = element.getBoundingClientRect().top + window.scrollY - 104;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const handleNavigation = (sectionId) => {
    setIsOpen(false);

    if (isHomePage) {
      scrollToSection(sectionId);
      return;
    }

    navigate('/');
    setTimeout(() => scrollToSection(sectionId), 180);
  };

  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[min(1180px,calc(100%-1.25rem))] -translate-x-1/2">
      <div
        className={`rounded-[28px] border transition-all duration-300 ${
          scrolled
            ? 'border-pearl/14 bg-[#0b0d08]/86 shadow-2xl shadow-black/35 backdrop-blur-2xl'
            : 'border-pearl/10 bg-[#0b0d08]/68 backdrop-blur-xl'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-5 lg:px-7">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="flex items-center gap-3 text-left"
          >
            <div className="overflow-hidden rounded-2xl border border-pearl/12 bg-pearl/[0.05] p-1.5">
              <img src={dp1} alt={personalInfo.name} className="h-10 w-10 rounded-xl object-cover" />
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-lg text-pearl">{personalInfo.name}</p>
              <p className="text-xs uppercase tracking-[0.28em] text-citrine/75">React + MERN</p>
            </div>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => handleNavigation(link.to)}
                className="rounded-full px-4 py-2 text-sm font-medium text-pearl/68 transition hover:bg-pearl/[0.07] hover:text-pearl"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => handleNavigation('contact')}
              className="rounded-full border border-pearl/12 bg-pearl/[0.05] px-4 py-2 text-sm font-medium text-pearl transition hover:border-mint/40 hover:bg-mint/10"
            >
              Let's talk
            </button>
            <a
              href={personalInfo.resumePath}
              download="Mohit-Verma-Resume.pdf"
              className="magnetic-link inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-citrine via-ember to-mint px-4 py-2 text-sm font-semibold text-[#17140c] transition hover:shadow-lg hover:shadow-citrine/20"
            >
              Resume <Download size={16} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="rounded-2xl border border-pearl/12 bg-pearl/[0.05] p-2 text-pearl md:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-pearl/10 px-4 pb-4 pt-2 md:hidden"
            >
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => handleNavigation(link.to)}
                    className="w-full rounded-2xl border border-pearl/10 bg-pearl/[0.05] px-4 py-3 text-left text-sm font-medium text-pearl/78 transition hover:border-mint/25 hover:bg-mint/10"
                  >
                    {link.name}
                  </button>
                ))}
                <a
                  href={personalInfo.resumePath}
                  download="Mohit-Verma-Resume.pdf"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-citrine via-ember to-mint px-4 py-3 text-sm font-semibold text-[#17140c]"
                >
                  Download resume <Download size={16} />
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
