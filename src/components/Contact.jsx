import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionHeader from './SectionHeader';
import { personalInfo } from '../data/portfolioData';

const contactMethods = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`,
    icon: Phone,
  },
  {
    label: 'Location',
    value: personalInfo.location,
    href: personalInfo.linkedin,
    icon: MapPin,
  },
  {
    label: 'LinkedIn',
    value: 'webmohitverma',
    href: personalInfo.linkedin,
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/mohitvermag',
    href: personalInfo.github,
    icon: Github,
  },
  {
    label: 'Portfolio',
    value: 'vermamohit.in',
    href: personalInfo.website,
    icon: Globe,
  },
];

const Contact = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const sendEmail = (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    const SERVICE_ID = 'service_4lvi954';
    const TEMPLATE_ID = 'template_kkcdfhi';
    const PUBLIC_KEY = '3U_nrq8xQ1y0NS-eu';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setLoading(false);
          setMessage({ type: 'success', text: 'Message sent successfully.' });
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setMessage({ type: 'error', text: 'Message failed to send. Please try email instead.' });
          console.error('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact" className="section-block scroll-mt-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contact"
          title="Contact and resume."
          description="Direct links, resume, and a working form for frontend or MERN opportunities."
        />

        <div className="grid items-start gap-5 lg:grid-cols-[0.88fr,1.12fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="glass-panel card-lift p-5 sm:p-8 lg:p-10"
          >
            <span className="pill text-xs sm:text-sm">Recruiter-ready contact block</span>
            <h3 className="mt-5 font-display text-2xl leading-tight text-pearl sm:text-3xl lg:text-4xl">
              Let&apos;s talk React, MERN, or product UI.
            </h3>
            <p className="mt-4 text-sm leading-7 text-pearl/64 sm:text-base">
              Direct links, resume, and a working form are here without making the section feel crowded.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contactMethods.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === 'Location' ? '_blank' : undefined}
                    rel={item.label === 'Location' ? 'noreferrer' : undefined}
                    className="flex min-w-0 items-center gap-3 rounded-[20px] border border-pearl/10 bg-pearl/[0.045] p-3.5 transition hover:-translate-y-1 hover:border-mint/25 hover:bg-mint/10 sm:gap-4 sm:p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-pearl/10 bg-black/25 sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5 text-mint" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[0.68rem] uppercase tracking-[0.18em] text-pearl/48 sm:text-xs">{item.label}</p>
                      <p className="mt-1 break-all text-sm font-medium leading-5 text-pearl">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={personalInfo.resumePath}
                download="Mohit-Verma-Resume.pdf"
                className="magnetic-link inline-flex min-w-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-citrine via-ember to-mint px-5 py-3 text-sm font-semibold text-[#17140c] transition hover:-translate-y-1 hover:shadow-lg hover:shadow-citrine/20"
              >
                Download resume <Download size={17} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-0 items-center justify-center gap-2 rounded-full border border-pearl/10 bg-pearl/[0.05] px-5 py-3 text-sm font-semibold text-pearl transition hover:-translate-y-1 hover:border-mint/35 hover:bg-mint/10"
              >
                View GitHub <Github size={17} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="glass-panel card-lift relative overflow-hidden p-5 sm:p-7 lg:p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,204,103,0.14),transparent_36%)]" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.22em] text-pearl/48 sm:text-sm">Send a message</p>
              <h3 className="mt-3 font-display text-2xl leading-tight text-pearl sm:text-3xl">
                Start the conversation here.
              </h3>

              <form ref={form} onSubmit={sendEmail} className="mt-5 space-y-3.5 sm:space-y-4">
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-pearl/48">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="John Doe"
                    className="w-full min-w-0 rounded-[18px] border border-pearl/10 bg-black/25 px-4 py-3.5 text-pearl outline-none transition placeholder:text-pearl/30 focus:border-citrine/45 focus:bg-black/40 sm:rounded-[20px]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-pearl/48">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="john@example.com"
                    className="w-full min-w-0 rounded-[18px] border border-pearl/10 bg-black/25 px-4 py-3.5 text-pearl outline-none transition placeholder:text-pearl/30 focus:border-citrine/45 focus:bg-black/40 sm:rounded-[20px]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-pearl/48">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder="Tell me about the role, project, or collaboration."
                    className="w-full min-w-0 resize-none rounded-[18px] border border-pearl/10 bg-black/25 px-4 py-3.5 text-pearl outline-none transition placeholder:text-pearl/30 focus:border-citrine/45 focus:bg-black/40 sm:rounded-[20px]"
                  />
                </div>

                {message ? (
                  <div
                    className={`rounded-2xl border px-4 py-3 text-sm ${
                      message.type === 'success'
                        ? 'border-emerald-400/25 bg-emerald-400/10 text-emerald-200'
                        : 'border-rose-400/25 bg-rose-400/10 text-rose-200'
                    }`}
                  >
                    {message.text}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={loading}
                  className="magnetic-link inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-citrine via-ember to-mint px-5 py-3.5 text-sm font-semibold text-[#17140c] transition hover:-translate-y-1 hover:shadow-lg hover:shadow-citrine/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Send message'} <Send size={17} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
