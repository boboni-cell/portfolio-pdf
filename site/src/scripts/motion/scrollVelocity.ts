/**
 * ScrollVelocity — apply velocity-based skew to elements during scroll.
 * For Work page rows and other scroll-driven elements.
 * Uses GSAP ScrollTrigger to track velocity.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motionDisabled } from './motionManager';

gsap.registerPlugin(ScrollTrigger);

interface SkewTarget {
  el: HTMLElement;
  maxSkew?: number;
}

export function initScrollVelocity(targets: SkewTarget[]): () => void {
  if (motionDisabled()) return () => {};

  let lastScrollY = window.scrollY;
  let velocity = 0;

  const onScroll = () => {
    velocity = window.scrollY - lastScrollY;
    lastScrollY = window.scrollY;

    const absV = Math.abs(velocity);
    if (absV < 2) {
      // Smooth return
      for (const t of targets) {
        const currentSkew = parseFloat(t.el.style.transform?.match(/skewY\(([^)]+)\)/)?.[1] || '0') || 0;
        const newSkew = currentSkew * 0.85;
        if (Math.abs(newSkew) < 0.1) {
          t.el.style.transform = '';
        } else {
          t.el.style.transform = `skewY(${newSkew}deg)`;
        }
      }
      return;
    }

    const cappedV = Math.min(absV / 20, 1);
    const skewAmount = Math.sign(velocity) * cappedV * (targets[0]?.maxSkew ?? 4);

    for (const t of targets) {
      t.el.style.transform = `skewY(${skewAmount}deg)`;
      t.el.style.transition = 'transform 0.3s ease-out';
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  // Reset on reduced motion
  const mm = window.matchMedia('(prefers-reduced-motion: reduce)');
  const onReduce = () => {
    if (mm.matches) {
      for (const t of targets) t.el.style.transform = '';
    }
  };
  mm.addEventListener('change', onReduce);

  return () => {
    window.removeEventListener('scroll', onScroll);
    mm.removeEventListener('change', onReduce);
    for (const t of targets) t.el.style.transform = '';
  };
}
