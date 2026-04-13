import { useEffect } from 'react';

export function useIntersectionObserver(
  selector: string,
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit,
) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) callback(entry);
      });
    }, options);

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, callback, options]);
}
