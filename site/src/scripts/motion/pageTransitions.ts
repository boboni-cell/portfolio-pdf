/**
 * PageTransitions — typography-based page transitions using full-screen text overlay.
 * Click a link → current text scales up → overlay fills → navigate → new page enters.
 * Uses GSAP for the animation choreography.
 */
// GSAP reserved for future velocity-based transition choreography
// import gsap from 'gsap';

interface TransitionConfig {
  /** Links that trigger the transition */
  links: NodeListOf<HTMLAnchorElement> | HTMLAnchorElement[];
  /** Optional: text to display during transition (from the clicked link) */
  getTransitionText?: (link: HTMLAnchorElement) => string;
  /** Background color for overlay */
  overlayColor?: string;
}

export function initPageTransitions(config: TransitionConfig): () => void {
  if (typeof window === 'undefined') return () => {};

  const overlay = document.createElement('div');
  overlay.className = 'mot-overlay';
  overlay.innerHTML = '<span class="mot-overlay-text"></span>';
  overlay.setAttribute('aria-hidden', 'true');
  document.body.appendChild(overlay);

  // Inject CSS once
  if (!document.getElementById('mot-overlay-css')) {
    const style = document.createElement('style');
    style.id = 'mot-overlay-css';
    style.textContent = `
      html.mot-transitioning,
      html.mot-transitioning body { overflow: hidden !important; }
      .mot-overlay {
        position: fixed; inset: 0; z-index: 9999;
        background: ${config.overlayColor || '#0A0A0B'};
        display: flex; align-items: center; justify-content: center;
        clip-path: circle(0% at 50% 50%);
        pointer-events: none;
      }
      .mot-overlay.active {
        clip-path: circle(150% at 50% 50%);
        transition: clip-path 0.45s cubic-bezier(0.7, 0, 0.3, 1);
      }
      .mot-overlay-text {
        font-family: 'Anton', sans-serif;
        font-size: clamp(3rem, 10vw, 10rem);
        color: #F4F4F2;
        text-transform: uppercase;
        line-height: 0.92;
        text-align: center;
        white-space: nowrap;
        opacity: 0;
        transform: scale(1.4);
        transition: opacity 0.25s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .mot-overlay.active .mot-overlay-text {
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(style);
  }

  const textEl = overlay.querySelector('.mot-overlay-text') as HTMLElement;

  const handlers: Array<{ link: HTMLAnchorElement; fn: (e: Event) => void }> = [];

  const links = 'length' in config.links ? Array.from(config.links) : config.links;

  for (const link of links) {
    const handler = (e: Event) => {
      const href = link.getAttribute('href');
      if (!href || link.getAttribute('target') === '_blank') return;

      e.preventDefault();

      // Set transition text
      if (config.getTransitionText) {
        textEl.textContent = config.getTransitionText(link);
      } else {
        textEl.textContent = link.textContent?.trim() || '';
      }

      // Expand overlay
      document.documentElement.classList.add('mot-transitioning');
      overlay.classList.add('active');

      // Navigate after animation
      setTimeout(() => {
        window.location.href = href;
      }, 800);
    };
    link.addEventListener('click', handler);
    handlers.push({ link, fn: handler });
  }

  return () => {
    for (const { link, fn } of handlers) {
      link.removeEventListener('click', fn);
    }
    overlay.remove();
    document.documentElement.classList.remove('mot-transitioning');
    const css = document.getElementById('mot-overlay-css');
    if (css) css.remove();
  };
}

export function createExitTransition(href: string, label: string): void {
  // Programmatic transition trigger
  const overlay = document.querySelector('.mot-overlay') as HTMLElement;
  const textEl = overlay?.querySelector('.mot-overlay-text') as HTMLElement;
  if (!overlay || !textEl) {
    window.location.href = href;
    return;
  }
  textEl.textContent = label;
  document.documentElement.classList.add('mot-transitioning');
  overlay.classList.add('active');
  setTimeout(() => { window.location.href = href; }, 800);
}
