"use client";

import { useState, useRef } from "react";
import { Menu } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";
import { mainNavigation } from "@/content/navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Exclude Home from desktop nav (it's the logo)
  const navItems = mainNavigation.filter((item) => item.label !== "Home");

  return (
    <header
      className={cn(
        "sticky top-0 z-30 w-full border-b border-brand-mist/60 bg-white/95 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Logo variant="full" />

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center">
          <DesktopNavigation items={navItems} />
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href="/contact" variant="primary" size="sm">
            Request a Consultation
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          ref={triggerRef}
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label="Open navigation menu"
          onClick={() => setMobileOpen(true)}
          className="rounded-lg p-2 text-body hover:bg-brand-ice focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo lg:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile drawer */}
      <MobileNavigation
        items={mainNavigation}
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        triggerRef={triggerRef}
      />
    </header>
  );
}

