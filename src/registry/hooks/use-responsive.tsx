import { useEffect, useState } from "react";

const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl" | "base";

/**
 * Hook that returns the current breakpoint based on window width
 * @returns Current breakpoint name
 * @example
 * const breakpoint = useBreakpoint();
 * // breakpoint = "md" on tablet, "lg" on desktop, etc.
 */
export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("base");

  useEffect(() => {
    const getBreakpoint = (): Breakpoint => {
      const width = window.innerWidth;

      if (width >= BREAKPOINTS["2xl"]) return "2xl";
      if (width >= BREAKPOINTS.xl) return "xl";
      if (width >= BREAKPOINTS.lg) return "lg";
      if (width >= BREAKPOINTS.md) return "md";
      if (width >= BREAKPOINTS.sm) return "sm";
      return "base";
    };

    const handleResize = () => {
      setBreakpoint(getBreakpoint());
    };

    // Set initial breakpoint
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}

type ResponsiveValue<T> = { [K in Breakpoint]?: T };

/**
 * Hook that resolves a responsive value based on current screen size
 * @param values - Object with breakpoint keys and corresponding values
 * @returns The resolved value for the current breakpoint
 * @example
 * const direction = useResponsive({ base: "column", md: "row" });
 * // direction = "column" on mobile, "row" on tablet+
 *
 * const isVisible = useResponsive({ base: false, lg: true });
 * // isVisible = false on mobile, true on desktop
 */
export function useResponsive<T>(values: ResponsiveValue<T>): T | undefined {
  const breakpoint = useBreakpoint();

  const breakpointOrder: Breakpoint[] = ["base", "sm", "md", "lg", "xl", "2xl"];
  const currentIndex = breakpointOrder.indexOf(breakpoint);

  // Find the closest defined value at or below current breakpoint
  for (let i = currentIndex; i >= 0; i--) {
    const bp = breakpointOrder[i];
    if (values[bp] !== undefined) {
      return values[bp];
    }
  }

  return values.base;
}
