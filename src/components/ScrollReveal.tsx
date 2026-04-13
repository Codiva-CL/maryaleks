'use client';

import { useCallback, useMemo } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function ScrollReveal() {
  const onReveal = useCallback((entry: IntersectionObserverEntry) => {
    entry.target.classList.add('visible');
  }, []);

  const options = useMemo(() => ({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' }), []);

  useIntersectionObserver('.reveal', onReveal, options);

  return null;
}
