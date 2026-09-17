"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/content/navigation";

interface DesktopNavigationProps {
  items: NavItem[];
}

export function DesktopNavigation({ items }: DesktopNavigationProps) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const close = useCallback(() => setOpenSlug(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-1">
        {items.map((item) => {
          const hasChildren = item.children && item.children.length > 0;
          const isOpen = openSlug === item.label;

          return (
            <li key={item.label} className="relative">
              {hasChildren ? (
                <>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() =>
                      setOpenSlug(isOpen ? null : item.label)
                    }
                    onBlur={(e) => {
                      // Close if focus leaves the dropdown entirely
                      if (!e.currentTarget.parentElement?.contains(e.relatedTarget)) {
                        close();
                      }
                    }}
                    className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-body hover:text-brand-midnight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-150",
                        isOpen && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div
                      role="menu"
                      tabIndex={-1}
                      className="absolute left-0 top-full z-50 mt-1 w-64 rounded-xl border border-brand-mist bg-white p-2 shadow-nav animate-fade-in motion-reduce:animate-none"
                      onMouseLeave={close}
                    >
                      {item.children!.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          onClick={close}
                          className="flex items-center rounded-lg px-3 py-2 text-sm text-body hover:bg-brand-ice hover:text-brand-midnight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-indigo"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-body hover:text-brand-midnight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

