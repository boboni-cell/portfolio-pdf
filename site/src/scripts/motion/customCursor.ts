/**
 * CustomCursor — stateful cursor with context awareness.
 * States: default, title-hover (MOVE), link-hover (OPEN/BACK/MAIL), pressing.
 * Uses GSAP quickTo for smooth interpolation.
 */
import gsap from 'gsap';
import { motionDisabled, addToLoop, startLoop } from './motionManager';

interface CursorState {
  dot: HTMLDivElement;
  ring: HTMLDivElement;
  dotX: (v: number) => void;
  dotY: (v: number) => void;
  ringX: (v: number) => void;
  ringY: (v: number) => void;
  ringScl: (v: number) => void;
  ringSclX: (v: number) => void;
  ringRot: (v: number) => void;
  label: string;
  scale: number;
  vx: number;
  vy: number;
  px: number;
  py: number;
}

let state: CursorState | null = null;
let cleanupFns: (() => void)[] = [];

export function initCustomCursor(): () => void {
  if (motionDisabled() || state) return () => {};

  const dot = document.createElement('div');
  dot.className = 'mc-dot';
  const ring = document.createElement('div');
  ring.className = 'mc-ring';

  document.body.appendChild(dot);
  document.body.appendChild(ring);

  const s: CursorState = {
    dot, ring,
    dotX: gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power2.out' }),
    dotY: gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power2.out' }),
    ringX: gsap.quickTo(ring, 'x', { duration: 0.22, ease: 'power2.out' }),
    ringY: gsap.quickTo(ring, 'y', { duration: 0.22, ease: 'power2.out' }),
    ringScl: gsap.quickTo(ring, 'scale', { duration: 0.25, ease: 'elastic.out(1, 0.6)' }),
    ringSclX: gsap.quickTo(ring, 'scaleX', { duration: 0.22, ease: 'power2.out' }),
    ringRot: gsap.quickTo(ring, 'rotation', { duration: 0.22, ease: 'power2.out' }),
    label: '', scale: 1, vx: 0, vy: 0, px: 0, py: 0,
  };
  state = s;

  let prevPx = 0, prevPy = 0;

  const onMove = (e: PointerEvent) => {
    s.px = e.clientX; s.py = e.clientY;
    s.vx = e.clientX - prevPx; s.vy = e.clientY - prevPy;
    prevPx = e.clientX; prevPy = e.clientY;

    s.dotX(e.clientX); s.dotY(e.clientY);
    s.ringX(e.clientX); s.ringY(e.clientY);

    // Detect context
    const el = document.elementFromPoint(e.clientX, e.clientY);
    let newLabel = '';
    let newScale = 1;

    if (el) {
      const titleArea = el.closest('#hp-giant-wrap, #cs-hero-name, .cs-next-name');
      const link = el.closest('a, button, [role="button"]');
      const mailLink = el.closest('.seg-contact-mail, .contact-mail');
      const backLink = el.closest('.cs-topnav-back');
      const workRow = el.closest('.wi-item');

      if (titleArea) { newLabel = 'MOVE'; newScale = 2.4; }
      else if (mailLink) { newLabel = 'MAIL'; newScale = 1.6; }
      else if (backLink) { newLabel = 'BACK'; newScale = 1.6; }
      else if (workRow || link) { newLabel = 'OPEN'; newScale = 1.7; }
    }

    if (newLabel !== s.label) {
      s.label = newLabel;
      ring.setAttribute('data-label', newLabel);
      s.ringScl(newScale);
    }
  };

  const onDown = () => s.ringScl(0.5);
  const onUp = () => s.ringScl(s.label ? (s.label === 'MOVE' ? 2.4 : 1.7) : 1);
  const onLeave = () => {
    s.ringScl(0);
    s.dotX(-100); s.dotY(-100);
    s.ringX(-100); s.ringY(-100);
  };
  const onEnter = () => s.ringScl(1);

  document.addEventListener('pointermove', onMove, { passive: true });
  document.addEventListener('pointerdown', onDown);
  document.addEventListener('pointerup', onUp);
  document.addEventListener('pointerleave', onLeave);
  document.addEventListener('pointerenter', onEnter);

  // Velocity-based ring deformation
  const velocityUpdate = () => {
    if (!state) return;
    const speed = Math.sqrt(s.vx * s.vx + s.vy * s.vy);
    if (speed > 8) {
      const angle = Math.atan2(s.vy, s.vx) * (180 / Math.PI);
      const stretch = Math.min(1 + speed * 0.015, 1.6);
      s.ringSclX(stretch);
      s.ringRot(angle);
    } else {
      s.ringSclX(s.scale);
      s.ringRot(0);
    }
    s.vx *= 0.7; s.vy *= 0.7; // decay
  };
  addToLoop(velocityUpdate);
  startLoop();

  cleanupFns = [() => {
    document.removeEventListener('pointermove', onMove);
    document.removeEventListener('pointerdown', onDown);
    document.removeEventListener('pointerup', onUp);
    document.removeEventListener('pointerleave', onLeave);
    document.removeEventListener('pointerenter', onEnter);
  }];

  return () => {
    for (const fn of cleanupFns) fn();
    dot.remove(); ring.remove();
    state = null;
  };
}
