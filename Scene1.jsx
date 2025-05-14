import React from 'react';
import { motion } from 'framer-motion';

const lines = [
  "Scene 1 · The World Changed. Print Didn’t.",
  "We put the world in our pocket.",
  "We replaced maps, meetings, and filing cabinets with digital systems.",
  "But printing stayed the same.",
  "It still runs on heat.",
  "On friction.",
  "On outside service and unscheduled downtime.",
  "It is not just old.",
  "It was left out.",
  "We live in a digital world.",
  "Then we hit “Print.”"
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8
    }
  })
};

const Scene1 = () => (
  <div style={{ minHeight: '250vh', padding: '10vh 5vw' }}>
    {lines.map((line, index) => (
      <motion.p
        key={index}
        custom={index}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        style={{ fontSize: index === 0 ? '2rem' : '1.25rem', margin: '2rem 0' }}
      >
        {line}
      </motion.p>
    ))}
  </div>
);

export default Scene1;
