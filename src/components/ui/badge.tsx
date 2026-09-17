import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "indigo" | "violet" | "muted";
  className?: string;
}

const variantClasses = {
  default: "bg-brand-ice text-brand-indigo",
  indigo: "bg-brand-indigo text-white",
  violet: "bg-violet-vector text-white",
  muted: "bg-brand-mist text-body/70",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

