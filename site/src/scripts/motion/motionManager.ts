/**
 * MotionManager — centralized lifecycle for pointer-driven motion across Astro pages.
 * Each page registers its effects; the manager handles cleanup, reduced-motion,
 * and re-initialization after Astro page transitions.
 */

export interface MotionEffect {
  init: () => void;
  destroy: () => void;
}

const effects: Map<string, MotionEffect> = new Map();
let globalRAF = 0;
const globalCallbacks: (() => void)[] = [];

/** Respect the user's reduced-motion preference without disabling touch devices. */
export function motionDisabled(): boolean {
  if (typeof window === 'undefined') return true;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Register a named effect; destroys any previous effect with the same name */
export function registerMotion(name: string, effect: MotionEffect): void {
  const prev = effects.get(name);
  if (prev) prev.destroy();
  effect.init();
  effects.set(name, effect);
}

/** Add a callback to the global RAF loop */
export function addToLoop(fn: () => void): void {
  globalCallbacks.push(fn);
}

/** Start the global RAF loop if not already running */
export function startLoop(): void {
  if (globalRAF) return;
  const loop = () => {
    for (const cb of globalCallbacks) cb();
    globalRAF = requestAnimationFrame(loop);
  };
  globalRAF = requestAnimationFrame(loop);
}

/** Stop the global RAF loop */
export function stopLoop(): void {
  if (globalRAF) {
    cancelAnimationFrame(globalRAF);
    globalRAF = 0;
  }
}

/** Destroy all registered effects and stop the loop */
export function destroyAllMotions(): void {
  stopLoop();
  globalCallbacks.length = 0;
  for (const [, effect] of effects) {
    try { effect.destroy(); } catch (_) {}
  }
  effects.clear();
}

/** Destroy a single named effect */
export function destroyMotion(name: string): void {
  const effect = effects.get(name);
  if (effect) {
    try { effect.destroy(); } catch (_) {}
    effects.delete(name);
  }
}

// Astro page transition hooks
if (typeof document !== 'undefined') {
  document.addEventListener('astro:before-swap', () => {
    destroyAllMotions();
  });
}
