import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { IconRenderer } from "./icon-renderer";

interface ServiceCardProps {
  slug: string;
  title: string;
  shortTitle?: string;
  tagline: string;
  iconName: string;
  className?: string;
}

export function ServiceCard({
  slug,
  title,
  tagline,
  iconName,
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-2xl border border-brand-mist bg-white p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-brand-indigo focus-within:ring-offset-2",
        className,
      )}
    >
      {/* Icon */}
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-ice text-brand-indigo">
        <IconRenderer name={iconName} className="h-5 w-5" strokeWidth={1.75} />
      </div>

      {/* Title */}
      <h3 className="mb-2 text-base font-bold leading-snug text-brand-midnight">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-5 flex-1 text-sm leading-relaxed text-body/75">
        {tagline}
      </p>

      {/* Link */}
      <Link
        href={`/services/${slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-indigo transition-colors hover:text-violet-vector after:absolute after:inset-0 focus-visible:outline-none"
      >
        Learn more
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
        <span className="sr-only">about {title}</span>
      </Link>
    </article>
  );
}

