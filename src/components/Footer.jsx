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
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><Github size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><Twitter size={20} /></a>
                    <a href="mailto:mohitvermag75@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors"><Mail size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
