"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className={cn("divide-y divide-brand-mist", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              id={`accordion-trigger-${item.id}`}
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold text-brand-midnight transition-colors hover:text-brand-indigo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo focus-visible:ring-offset-2"
            >
              <span>{item.title}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 flex-shrink-0 text-brand-indigo transition-transform duration-200 motion-reduce:transition-none",
                  isOpen && "rotate-180",
                )}
                aria-hidden="true"
              />
            </button>
            <div
              id={`accordion-panel-${item.id}`}
              role="region"
              aria-labelledby={`accordion-trigger-${item.id}`}
              hidden={!isOpen}
              className={cn(
                "overflow-hidden text-sm leading-relaxed text-body/75 transition-all duration-200 motion-reduce:transition-none",
                isOpen ? "pb-4" : "pb-0",
              )}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}

