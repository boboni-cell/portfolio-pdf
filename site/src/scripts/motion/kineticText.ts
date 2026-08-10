/**
 * KineticText — per-character proximity engine with velocity skew + multi-layer + radial mask.
 *
 * Features:
 * - Split text into individual spans
 * - Per-char distance-based displacement/rotation/scale
 * - Mouse velocity adds directional skew
 * - Ghost layer with reverse parallax
 * - Radial mask scan layer (CSS mask-image following cursor)
 * - Elastic recovery when pointer leaves
 *
 * Usage:
 *   const destroy = initKineticText({
 *     solid: { el: '.hp-giant-solid .hp-line', radius: 280, maxDX: 40, maxDY: 28, maxRot: 11, maxScale: 1.16 },
 *     ghost: { el: '.hp-giant-ghost .hp-line', radius: 280, maxDX: 36, maxDY: 24, maxRot: 10, maxScale: 1.14, direction: -0.45 },
 *   });
 */
import gsap from 'gsap';
import { motionDisabled, addToLoop, startLoop } from './motionManager';

/* ================================================================
   TYPES
   ================================================================ */

interface CharData {
  el: HTMLSpanElement;
  cx: number; cy: number;
  baseCx: number; baseCy: number;
}

interface LayerConfig {
  el: HTMLElement;
  chars: HTMLSpanElement[];
  radius?: number;
  maxDX?: number;
  maxDY?: number;
  maxRot?: number;
  maxScale?: number;
  maxSkew?: number;
  direction?: number; // negative = reverse
}

interface KineticConfig {
  solid?: LayerConfig;
  ghost?: LayerConfig;
  scan?: { el: HTMLElement; maskRadius?: number };
  container?: HTMLElement;
}

/* ================================================================
   SPLIT TEXT
   ================================================================ */

export function splitToChars(el: HTMLElement, ariaHidden = true): HTMLSpanElement[] {
  const chars: HTMLSpanElement[] = [];
  const text = el.textContent || '';
  el.textContent = '';

  for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.className = 'mc-char';
    span.textContent = text[i];
    span.style.display = 'inline-block';
    span.style.willChange = 'transform';
    if (ariaHidden) span.setAttribute('aria-hidden', 'true');
    if (text[i] === ' ') span.style.width = '0.28em';
    el.appendChild(span);
    chars.push(span);
  }
  return chars;
}

/* ================================================================
   BUILD CHAR DATA + QUICKTO SETTERS
   ================================================================ */

interface LayerRuntime {
  chars: CharData[];
  setters: Array<{
    x: (v: number) => void; y: (v: number) => void;
    rot: (v: number) => void; scl: (v: number) => void; skX: (v: number) => void;
  }>;
  cfg: LayerConfig;
}

function buildLayer(cfg: LayerConfig): LayerRuntime {
  const chars: CharData[] = [];
  const setters: LayerRuntime['setters'] = [];

  for (const ch of cfg.chars) {
    chars.push({ el: ch, cx: 0, cy: 0, baseCx: 0, baseCy: 0 });
    setters.push({
      x: gsap.quickTo(ch, 'x', { duration: 0.4, ease: 'expo.out' }),
      y: gsap.quickTo(ch, 'y', { duration: 0.4, ease: 'expo.out' }),
      rot: gsap.quickTo(ch, 'rotation', { duration: 0.4, ease: 'expo.out' }),
      scl: gsap.quickTo(ch, 'scale', { duration: 0.4, ease: 'expo.out' }),
      skX: gsap.quickTo(ch, 'skewX', { duration: 0.4, ease: 'expo.out' }),
    });
  }
  return { chars, setters, cfg };
}

function updateCharPositions(chars: CharData[]): void {
  for (const c of chars) {
    const r = c.el.getBoundingClientRect();
    c.cx = r.left + r.width / 2;
    c.cy = r.top + r.height / 2;
  }
}

/* ================================================================
   INIT
   ================================================================ */

let px = -9999, py = -9999;
let prevPx = -9999, prevPy = -9999;
let pointerOnScreen = false;

export function initKineticText(config: KineticConfig): () => void {
  if (motionDisabled()) {
    // Ensure chars visible
    document.querySelectorAll('.mc-char').forEach(el => {
      (el as HTMLElement).style.transform = 'none';
    });
    return () => {};
  }

  const layers: LayerRuntime[] = [];

  if (config.solid) {
    const rt = buildLayer(config.solid);
    layers.push(rt);
  }
  if (config.ghost) {
    const rt = buildLayer(config.ghost);
    layers.push(rt);
  }

  // Recalc positions
  const recalc = () => {
    for (const layer of layers) updateCharPositions(layer.chars);
  };
  recalc();
  window.addEventListener('resize', recalc);

  // Pointer tracking
  const onMove = (e: PointerEvent) => {
    prevPx = px; prevPy = py;
    px = e.clientX; py = e.clientY;
    pointerOnScreen = true;
  };
  const onLeave = () => { pointerOnScreen = false; };
  document.addEventListener('pointermove', onMove, { passive: true });
  document.addEventListener('pointerleave', onLeave);

  // Scan mask
  if (config.scan) {
    config.scan.el.style.maskImage = `radial-gradient(circle 160px at ${px}px ${py}px, black 40%, transparent 70%)`;
    config.scan.el.style.webkitMaskImage = `radial-gradient(circle 160px at ${px}px ${py}px, black 40%, transparent 70%)`;
  }

  // Main update
  const update = () => {
    // Update scan mask position
    if (config.scan) {
      config.scan.el.style.maskImage = `radial-gradient(circle ${config.scan.maskRadius || 160}px at ${px}px ${py}px, black 40%, transparent 70%)`;
      config.scan.el.style.webkitMaskImage = `radial-gradient(circle ${config.scan.maskRadius || 160}px at ${px}px ${py}px, black 40%, transparent 70%)`;
    }

    if (!pointerOnScreen) {
      // Reset all
      for (const layer of layers) {
        for (let i = 0; i < layer.chars.length; i++) {
          layer.setters[i].x(0);
          layer.setters[i].y(0);
          layer.setters[i].rot(0);
          layer.setters[i].scl(1);
          layer.setters[i].skX(0);
        }
      }
      return;
    }

    // Velocity
    const velX = px - prevPx;
    const velY = py - prevPy;
    const speed = Math.sqrt(velX * velX + velY * velY);

    for (const layer of layers) {
      const r = layer.cfg.radius ?? 260;
      const dir = layer.cfg.direction ?? 1;
      const maxDX = layer.cfg.maxDX ?? 35;
      const maxDY = layer.cfg.maxDY ?? 24;
      const maxRot = layer.cfg.maxRot ?? 10;
      const maxScale = layer.cfg.maxScale ?? 1.16;
      const maxSkew = layer.cfg.maxSkew ?? 3;

      for (let i = 0; i < layer.chars.length; i++) {
        const ch = layer.chars[i];
        const dx = px - ch.cx;
        const dy = py - ch.cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > r) {
          layer.setters[i].x(0);
          layer.setters[i].y(0);
          layer.setters[i].rot(0);
          layer.setters[i].scl(1);
          layer.setters[i].skX(0);
          continue;
        }

        // Quadratic falloff — sharp near, soft far
        const strength = 1 - dist / r;
        const s2 = strength * strength;
        const angle = Math.atan2(dy, dx);

        // Base displacement
        let tx = Math.cos(angle) * maxDX * s2 * dir;
        let ty = Math.sin(angle) * maxDY * s2 * dir;

        // Velocity skew overlay
        if (speed > 3) {
          const vInfluence = Math.min(speed / 80, 1);
          tx += velX * vInfluence * 0.25 * s2 * dir;
          ty += velY * vInfluence * 0.25 * s2 * dir;
        }

        layer.setters[i].x(tx);
        layer.setters[i].y(ty);
        layer.setters[i].rot(Math.sin(angle * 2.3) * maxRot * s2 * dir);
        layer.setters[i].scl(1 + (maxScale - 1) * s2);
        layer.setters[i].skX((Math.cos(angle) * maxSkew + velX * 0.06) * s2 * dir);
      }
    }
  };

  addToLoop(update);
  startLoop();

  return () => {
    document.removeEventListener('pointermove', onMove);
    document.removeEventListener('pointerleave', onLeave);
    window.removeEventListener('resize', recalc);
    if (config.scan) {
      config.scan.el.style.maskImage = '';
      config.scan.el.style.webkitMaskImage = '';
    }
    // Reset chars
    for (const layer of layers) {
      for (let i = 0; i < layer.chars.length; i++) {
        layer.setters[i].x(0);
        layer.setters[i].y(0);
        layer.setters[i].rot(0);
        layer.setters[i].scl(1);
        layer.setters[i].skX(0);
      }
    }
  };
}
