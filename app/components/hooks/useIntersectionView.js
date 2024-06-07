'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const useIntersectionView = (options) => {
  const { ref, inView } = useInView(options);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return [ref, isVisible];
};

export default useIntersectionView;
