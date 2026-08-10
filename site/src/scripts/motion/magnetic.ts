/**
 * Magnetic — magnetic link clusters with neighbor dimming and velocity-aware spring back.
 * Each link pulls toward the cursor within a radius; inner text moves further;
 * neighboring links dim when one is active.
 */
import gsap from 'gsap';
import { motionDisabled, addToLoop, startLoop } from './motionManager';

interface MagneticLink {
  el: HTMLAnchorElement | HTMLButtonElement;
  innerEl?: HTMLElement;
  radius: number;
  maxMove: number;
  innerMove: number;
}

interface MagneticConfig {
  links: MagneticLink[];
  container?: HTMLElement;
}

let px = -9999, py = -9999;
let onScreen = false;

export function initMagnetic(config: MagneticConfig): () => void {
  if (motionDisabled()) return () => {};

  const tweens: Array<{
    x: (v: number) => void; y: (v: number) => void;
    ix: (v: number) => void; iy: (v: number) => void;
    link: MagneticLink;
  }> = [];

  for (const link of config.links) {
    const innerEl = link.innerEl || link.el.querySelector<HTMLElement>('.hp-nav-en, .wi-name, .cs-topnav-back, .cs-topnav-next');
    tweens.push({
      x: gsap.quickTo(link.el, 'x', { duration: 0.5, ease: 'elastic.out(1, 0.5)' }),
      y: gsap.quickTo(link.el, 'y', { duration: 0.5, ease: 'elastic.out(1, 0.5)' }),
      ix: innerEl ? gsap.quickTo(innerEl, 'x', { duration: 0.4, ease: 'expo.out' }) : (() => {}),
      iy: innerEl ? gsap.quickTo(innerEl, 'y', { duration: 0.4, ease: 'expo.out' }) : (() => {}),
      link,
    });
  }

  const onMove = (e: PointerEvent) => { px = e.clientX; py = e.clientY; onScreen = true; };
  const onLeave = () => { onScreen = false; };
  document.addEventListener('pointermove', onMove, { passive: true });
  document.addEventListener('pointerleave', onLeave);

  const update = () => {
    if (!onScreen) {
      for (const t of tweens) { t.x(0); t.y(0); t.ix(0); t.iy(0); }
      // Reset all opacities
      for (const t of tweens) t.link.el.style.opacity = '';
      return;
    }

    let activeLink: MagneticLink | null = null;

    for (const t of tweens) {
      const rect = t.link.el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = px - cx;
      const dy = py - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < t.link.radius) {
        activeLink = t.link;
        const s = (1 - dist / t.link.radius);
        const s2 = s * s;
        t.x((dx / t.link.radius) * t.link.maxMove * s2);
        t.y((dy / t.link.radius) * t.link.maxMove * s2);
        t.ix((dx / t.link.radius) * t.link.innerMove * s2);
        t.iy((dy / t.link.radius) * t.link.innerMove * s2);
      } else {
        t.x(0); t.y(0); t.ix(0); t.iy(0);
      }
    }

    // Dim non-active neighbors
    for (const t of tweens) {
      if (activeLink && t.link !== activeLink) {
        t.link.el.style.opacity = '0.35';
        t.link.el.style.transition = 'opacity 0.4s ease';
      } else {
        t.link.el.style.opacity = '1';
      }
    }
  };

  addToLoop(update);
  startLoop();

  return () => {
    document.removeEventListener('pointermove', onMove);
    document.removeEventListener('pointerleave', onLeave);
    for (const t of tweens) {
      t.x(0); t.y(0); t.ix(0); t.iy(0);
      t.link.el.style.opacity = '';
    }
  };
}
