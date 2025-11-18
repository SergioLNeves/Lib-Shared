import type React from "react";
import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const ContainerVariants = cva("mx-auto w-full", {
  variants: {
    size: {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-screen-2xl",
      full: "max-w-none",
    },
    padded: {
      true: "pt-12 px-4 sm:px-6 lg:px-8",
      false: "px-0",
    },
    display: {
      block: "",
      grid: "grid",
    },
    cols: {
      "1": "grid-cols-1",
      "2": "grid-cols-2",
      "3": "grid-cols-3",
      "4": "grid-cols-4",
      "6": "grid-cols-6",
      "12": "grid-cols-12",
    },
    colsLg: {
      "1": "lg:grid-cols-1",
      "2": "lg:grid-cols-2",
      "3": "lg:grid-cols-3",
      "4": "lg:grid-cols-4",
      "6": "lg:grid-cols-6",
      "12": "lg:grid-cols-12",
    },
    gap: {
      none: "gap-0",
      xs: "gap-2",
      sm: "gap-3",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    },
  },
  defaultVariants: {
    size: "lg",
    padded: true,
    display: "block",
  },
});

interface ContainerProps
  extends React.ComponentProps<"section">,
    VariantProps<typeof ContainerVariants> {
  children: ReactNode;
  className?: string;
  /**
   * Atalho para definir uma grade fracionada custom sem criar utilidade tailwind.
   * Ex: customGrid="[200px_minmax(0,1fr)]" => grid-cols-[200px_minmax(0,1fr)].
   */
  customGrid?: string;
}

export function Container({
  children,
  className,
  size,
  padded,
  display,
  cols,
  colsLg,
  gap,
  customGrid,
  ...props
}: ContainerProps) {
  const customGridClass = customGrid ? `grid grid-cols-[${customGrid}]` : "";

  return (
    <section
      className={cn(
        ContainerVariants({ size, padded, display, cols, colsLg, gap }),
        customGridClass,
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
