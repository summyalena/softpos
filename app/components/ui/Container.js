'use client';

import styles from './ui.module.css';
import useIntersectionView from '../hooks/useIntersectionView';
import { useEffect, useState } from 'react';

function Container({ children, className }) {
  const [ref, isVisible] = useIntersectionView({ threshold: 0.1 });
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTriggerAnimation(true);
    } else {
      setTriggerAnimation(false);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className={`full-width ${className} ${styles.sectionContainer} ${triggerAnimation ? styles.visible : ''}`}
    >
      {children}
    </section>
  );
}

export default Container;
