import { cn } from "@/lib/utils";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
  className?: string;
}

export function ProcessStep({
  step,
  title,
  description,
  isLast = false,
  className,
}: ProcessStepProps) {
  return (
    <div className={cn("relative flex gap-4", className)}>
      {/* Step connector */}
      {!isLast && (
        <div
          className="absolute left-5 top-10 bottom-0 w-px bg-brand-mist"
          aria-hidden="true"
        />
      )}

      {/* Step number circle */}
      <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-ice border-2 border-brand-indigo/20 text-brand-indigo">
        <span className="text-xs font-bold leading-none">{String(step).padStart(2, "0")}</span>
      </div>

      {/* Content */}
      <div className={cn("pb-8", isLast && "pb-0")}>
        <h3 className="mb-1 text-sm font-bold text-brand-midnight">{title}</h3>
        <p className="text-sm leading-relaxed text-body/70">{description}</p>
      </div>
    </div>
  );
}

