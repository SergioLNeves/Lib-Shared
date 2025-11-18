import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "@/lib/utils";

const StackVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
    alignItems: {
      stretch: "items-stretch",
      center: "items-center",
      start: "items-start",
      end: "items-end",
    },
    justifyContent: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      spaceBetween: "justify-between",
      spaceAround: "justify-around",
      spaceEvenly: "justify-evenly",
    },
  },
  defaultVariants: {
    direction: "column",
    alignItems: "stretch",
    justifyContent: "start",
  },
});

type StackProps = VariantProps<typeof StackVariants> & {
  className?: string;
  gap?: number;
  children: React.ReactNode;
};

export function Stack({
  direction = "column",
  alignItems = "stretch",
  justifyContent = "start",
  gap = 0,
  className,
  children,
}: StackProps) {
  return (
    <div
      className={cn(
        `flex gap-${gap}`,
        StackVariants({ direction, alignItems, justifyContent }),
        className,
      )}
    >
      {children}
    </div>
  );
}
