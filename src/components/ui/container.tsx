import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  as?: "div" | "section" | "article" | "main" | "header" | "footer" | "nav";
  narrow?: boolean;
}

export function Container({
  as: Tag = "div",
  narrow = false,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        narrow ? "max-w-3xl" : "max-w-[1440px]",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

