import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Get In Touch
                    </motion.h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">Let's Talk</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            I'm open to freelance projects, collaboration opportunities, or just a friendly chat about technology.
                            Feel free to connect!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-cyan-500 transition-colors">
                                    <Mail className="text-cyan-400 group-hover:text-white w-6 h-6 transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-400">Email</h4>
                                    <a href="mailto:mohitvermag75@gmail.com" className="text-lg font-medium hover:text-cyan-400 transition-colors">mohitvermag75@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-cyan-500 transition-colors">
                                    <Phone className="text-cyan-400 group-hover:text-white w-6 h-6 transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-400">Phone</h4>
                                    <a href="tel:+918800241462" className="text-lg font-medium hover:text-cyan-400 transition-colors">+91 8800241462</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-cyan-500 transition-colors">
                                    <MapPin className="text-cyan-400 group-hover:text-white w-6 h-6 transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-sm text-gray-400">Location</h4>
                                    <p className="text-lg font-medium">Dadri, Noida, 203207</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                                <input type="text" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white transition-all" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                                <input type="email" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white transition-all" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white transition-all resize-none" placeholder="I have a project idea..."></textarea>
                            </div>
                            <button type="submit" className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
