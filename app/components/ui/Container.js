'use client';

import styles from './ui.module.css';
import useIntersectionView from '../hooks/useIntersectionView';

function Container({children, className}) {
  const [ref, isVisible] = useIntersectionView({
    threshold: 0.1
  });

  return (
    <section ref={ref} className={`full-width ${className} ${styles.sectionContainer} ${isVisible ? styles.visible : ''}`}>
      {children}
    </section>
  )
}

export default Container