'use client';

import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const animateDiv = ({ children, delay, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { delay: delay / 1000, duration: 0.6 },
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div
      className={`${className}`}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      style={{ marginBottom: '2rem' }} 
    >
      {children}
    </motion.div>
  );
};

export default animateDiv;
