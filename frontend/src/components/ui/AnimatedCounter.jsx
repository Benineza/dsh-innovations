import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from 0 to the target value when it enters the viewport.
 */
export default function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    const startTime = performance.now();
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [hasStarted, target, duration, prefersReducedMotion]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}
