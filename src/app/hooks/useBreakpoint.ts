import { useState, useEffect } from 'react';

/**
 * Значения совпадают с --breakpoint-* в theme.css и дефолтами Tailwind v4.
 * sm/md/lg/xl/2xl — min-width, как в Tailwind (mobile-first).
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;

interface BreakpointState {
  /** < 640px */
  isMobile: boolean;
  /** >= 640px && < 1024px */
  isTablet: boolean;
  /** >= 1024px */
  isDesktop: boolean;
  /** >= 1280px */
  isWidescreen: boolean;

  /** Текущий активный брейкпоинт */
  breakpoint: BreakpointKey | 'xs';
  /** Ширина окна в px */
  width: number;
}

function getState(width: number): BreakpointState {
  let breakpoint: BreakpointKey | 'xs' = 'xs';
  if (width >= BREAKPOINTS['2xl']) breakpoint = '2xl';
  else if (width >= BREAKPOINTS.xl) breakpoint = 'xl';
  else if (width >= BREAKPOINTS.lg) breakpoint = 'lg';
  else if (width >= BREAKPOINTS.md) breakpoint = 'md';
  else if (width >= BREAKPOINTS.sm) breakpoint = 'sm';

  return {
    isMobile: width < BREAKPOINTS.sm,
    isTablet: width >= BREAKPOINTS.sm && width < BREAKPOINTS.lg,
    isDesktop: width >= BREAKPOINTS.lg,
    isWidescreen: width >= BREAKPOINTS.xl,
    breakpoint,
    width,
  };
}

export function useBreakpoint(): BreakpointState {
  const [state, setState] = useState<BreakpointState>(() =>
    getState(typeof window !== 'undefined' ? window.innerWidth : BREAKPOINTS.lg)
  );

  useEffect(() => {
    const queries = Object.entries(BREAKPOINTS).map(([key, px]) => ({
      key,
      mql: window.matchMedia(`(min-width: ${px}px)`),
    }));

    const update = () => setState(getState(window.innerWidth));

    queries.forEach(({ mql }) => mql.addEventListener('change', update));
    update();

    return () => {
      queries.forEach(({ mql }) => mql.removeEventListener('change', update));
    };
  }, []);

  return state;
}
