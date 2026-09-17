import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id?: string;
  label?: string;
  heading: string;
  body?: string;
  align?: "left" | "center";
  headingAs?: "h1" | "h2" | "h3";
  className?: string;
  inverted?: boolean;
}

export function SectionHeading({
  id,
  label,
  heading,
  body,
  align = "left",
  headingAs: Heading = "h2",
  className,
  inverted = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {label && (
        <p
          className={cn(
            "mb-3 text-xs font-bold uppercase tracking-widest",
            inverted ? "text-violet-vector" : "text-brand-indigo",
          )}
        >
          {label}
        </p>
      )}
      <Heading
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl",
          inverted ? "text-white" : "text-brand-midnight",
        )}
      >
        {heading}
      </Heading>
      {body && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            inverted ? "text-blue-100/80" : "text-body/80",
          )}
        >
          {body}
        </p>
      )}
    </div>
  );
}

