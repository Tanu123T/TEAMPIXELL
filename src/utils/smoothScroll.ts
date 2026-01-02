/**
 * Enhanced smooth scroll function with custom easing
 * Provides much smoother scrolling than native smooth behavior
 */

interface SmoothScrollOptions {
  duration?: number;
  easing?: (t: number) => number;
  offset?: number;
}

// Custom easing function for smooth scrolling (easeInOutCubic)
function easeInOutCubic(t: number): number {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Custom easing function for natural feel (easeOutQuart)
function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

export function smoothScrollTo(
  element: HTMLElement | null,
  options: SmoothScrollOptions = {}
): void {
  if (!element) return;

  const {
    duration = 800,
    easing = easeInOutCubic,
    offset = 80,
  } = options;

  const start = window.pageYOffset;
  const target = element.getBoundingClientRect().top + window.pageYOffset - offset;
  const distance = target - start;
  let startTime: number | null = null;

  function scrollAnimation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    const ease = easing(progress);
    window.scrollTo(0, start + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(scrollAnimation);
    } else {
      // Ensure we're at the exact target position
      window.scrollTo(0, target);
    }
  }

  requestAnimationFrame(scrollAnimation);
}

/**
 * Smooth scroll to element by ID
 */
export function smoothScrollToId(
  id: string,
  options: SmoothScrollOptions = {}
): void {
  const element = document.getElementById(id);
  smoothScrollTo(element, options);
}

/**
 * Smooth scroll to top
 */
export function smoothScrollToTop(options: SmoothScrollOptions = {}): void {
  const { duration = 800, easing = easeInOutCubic } = options;
  const start = window.pageYOffset;
  const distance = -start;
  let startTime: number | null = null;

  function scrollAnimation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    const ease = easing(progress);
    window.scrollTo(0, start + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(scrollAnimation);
    } else {
      window.scrollTo(0, 0);
    }
  }

  requestAnimationFrame(scrollAnimation);
}

/**
 * Enhanced scrollIntoView with better smooth scrolling
 */
export function smoothScrollIntoView(
  element: HTMLElement,
  options: SmoothScrollOptions = {}
): void {
  smoothScrollTo(element, options);
}
