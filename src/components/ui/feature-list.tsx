import { cn } from "@/lib/utils";
import { IconRenderer } from "./icon-renderer";

interface FeatureItem {
  title: string;
  description?: string;
  iconName?: string;
}

interface FeatureListProps {
  items: FeatureItem[];
  columns?: 1 | 2 | 3;
  className?: string;
}

export function FeatureList({ items, columns = 2, className }: FeatureListProps) {
  const gridCols: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <ul
      className={cn("grid gap-4", gridCols[columns], className)}
    >
      {items.map((item) => (
        <li key={item.title} className="flex gap-3">
          <span className="mt-0.5 flex-shrink-0">
            {item.iconName ? (
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-ice text-brand-indigo">
                <IconRenderer name={item.iconName} className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
            ) : (
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-indigo" aria-hidden="true" />
            )}
          </span>
          <div>
            <p className="text-sm font-semibold text-brand-midnight">{item.title}</p>
            {item.description && (
              <p className="mt-0.5 text-sm leading-relaxed text-body/70">
                {item.description}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

