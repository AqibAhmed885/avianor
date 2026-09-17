"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/content/navigation";

interface MobileNavigationProps {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export function MobileNavigation({
  items,
  isOpen,
  onClose,
  triggerRef,
}: MobileNavigationProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Focus close button when opened
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  // Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
        triggerRef.current?.focus();
      }
    },
    [isOpen, onClose, triggerRef],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleClose = () => {
    onClose();
    triggerRef.current?.focus();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={handleClose}
        className={cn(
          "fixed inset-0 z-40 bg-brand-midnight/50 backdrop-blur-sm transition-opacity duration-300 motion-reduce:transition-none lg:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-xl transition-transform duration-300 motion-reduce:transition-none lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-brand-mist px-6 py-4">
          <span className="text-sm font-bold text-brand-midnight">Menu</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleClose}
            className="rounded-lg p-2 text-body hover:bg-brand-ice focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Nav items */}
        <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-6 py-4">
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li key={item.label}>
                {item.children && item.children.length > 0 ? (
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-midnight hover:bg-brand-ice focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo">
                      {item.label}
                      <ChevronRight
                        className="h-4 w-4 transition-transform duration-150 group-open:rotate-90"
                        aria-hidden="true"
                      />
                    </summary>
                    <ul className="mt-1 ml-3 flex flex-col gap-0.5 border-l border-brand-mist pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={handleClose}
                            className="block rounded-lg px-3 py-2 text-sm text-body hover:bg-brand-ice hover:text-brand-midnight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    onClick={handleClose}
                    className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-midnight hover:bg-brand-ice focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div className="border-t border-brand-mist px-6 py-4">
          <Link
            href="/contact"
            onClick={handleClose}
            className="flex w-full items-center justify-center rounded-xl bg-brand-gradient px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-vector focus-visible:ring-offset-2"
          >
            Request a Consultation
          </Link>
        </div>
      </div>
    </>
  );
}

