import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">

                <div className="text-center md:text-left">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} <span className="text-white font-semibold">Mohit Verma</span>. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/mohitvermag" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors"><Github size={20} /></a>
                    <a href="https://www.linkedin.com/in/mohit-verma-webdeveloper/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
                    {/* Twitter/X link not provided, keeping generic or removing if desired. Leaving as is for now with # but could be removed if not needed. User didn't specify Twitter. I will leave it as # for now to avoid breaking layout if they want it later, or I could remove it if I want to be strict. I'll leave it but maybe comment it out if I was unsure. Actually, user only gave GitHub, LinkedIn and Email. I will verify if I should remove Twitter. The plan said "Update Social Links", didn't explicitly say remove others. I'll just update the ones I have. */}
                    <a href="mailto:mohitvermag75@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors"><Mail size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
