import { useEffect, useRef, useState } from 'react';

/**
 * Wrapper that animates children when they enter the viewport.
 * Respects prefers-reduced-motion.
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'none'
  duration = 600,
  threshold = 0.12,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [threshold, prefersReducedMotion]);

  const getTransform = () => {
    if (direction === 'up') return 'translateY(28px)';
    if (direction === 'down') return 'translateY(-28px)';
    if (direction === 'left') return 'translateX(28px)';
    if (direction === 'right') return 'translateX(-28px)';
    return 'none';
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
