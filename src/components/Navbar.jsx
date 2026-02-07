import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import dp1 from '../assets/dp1.jfif';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';

    const navLinks = [
        { name: 'Home', to: 'home', type: 'scroll' },
        { name: 'About', to: 'about', type: 'scroll' },
        { name: 'Skills', to: 'skills', type: 'scroll' },
        { name: 'Experience', to: 'experience', type: 'scroll' },
        { name: 'Projects', to: 'projects', type: 'scroll' },
        { name: 'Blog', to: '/blog', type: 'router' },
        { name: 'Contact', to: 'contact', type: 'scroll' },
    ];

    const handleNavigation = (link) => {
        setIsOpen(false);
        if (link.type === 'router') {
            navigate(link.to);
        } else {
            if (isHomePage) {
                // Already handled by ScrollLink native behavior if we render it
            } else {
                navigate('/');
                // We rely on simple navigation to home, user can scroll manually or we can add a timeout to scroll
                setTimeout(() => {
                    const element = document.getElementById(link.to);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    };

    return (
        <nav className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
                        <img
                            src={dp1}
                            alt="Mohit Verma"
                            className="w-10 h-10 rounded-full border-2 border-cyan-500 object-cover"
                        />
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <React.Fragment key={link.name}>
                                    {link.type === 'scroll' && isHomePage ? (
                                        <ScrollLink
                                            to={link.to}
                                            smooth={true}
                                            duration={500}
                                            className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors"
                                        >
                                            {link.name}
                                        </ScrollLink>
                                    ) : (
                                        <button
                                            onClick={() => handleNavigation(link)}
                                            className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors bg-transparent border-none"
                                        >
                                            {link.name}
                                        </button>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900 border-b border-slate-800"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => handleNavigation(link)}
                                    className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium cursor-pointer w-full text-left"
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
