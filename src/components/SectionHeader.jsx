import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ eyebrow, title, description, align = 'left' }) => {
  const centered = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`mb-14 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}
    >
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description ? (
        <p className={`section-copy ${centered ? 'mx-auto' : ''}`}>{description}</p>
      ) : null}
    </motion.div>
  );
};

export default SectionHeader;
