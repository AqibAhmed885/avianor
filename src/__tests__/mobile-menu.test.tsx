import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Mock Next.js modules
jest.mock("next/link", () => {
  const MockLink = ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  );
  MockLink.displayName = "Link";
  return MockLink;
});

jest.mock("next/image", () => {
  const MockImage = ({
    alt,
    src,
    ...props
  }: {
    alt: string;
    src: string;
    [key: string]: unknown;
  }) => <img alt={alt} src={src} {...props} />;
  MockImage.displayName = "Image";
  return MockImage;
});

import { MobileNavigation } from "@/components/layout/mobile-navigation";
import type { NavItem } from "@/content/navigation";
import { useRef } from "react";

const mockItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "NVG Modifications", href: "/services/nvg-modifications" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

function TestWrapper({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  return (
    <>
      <button ref={triggerRef}>Open Menu</button>
      <MobileNavigation
        items={mockItems}
        isOpen={isOpen}
        onClose={onClose}
        triggerRef={triggerRef}
      />
    </>
  );
}

describe("MobileNavigation", () => {
  it("renders dialog with correct ARIA when open", () => {
    render(<TestWrapper isOpen={true} onClose={() => {}} />);
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toHaveAttribute("aria-label", "Navigation menu");
  });

  it("renders Close button with accessible label", () => {
    render(<TestWrapper isOpen={true} onClose={() => {}} />);
    expect(
      screen.getByRole("button", { name: "Close menu" }),
    ).toBeInTheDocument();
  });

  it("calls onClose when Close button is clicked", async () => {
    const onClose = jest.fn();
    render(<TestWrapper isOpen={true} onClose={onClose} />);
    await userEvent.click(screen.getByRole("button", { name: "Close menu" }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when Escape is pressed", async () => {
    const onClose = jest.fn();
    render(<TestWrapper isOpen={true} onClose={onClose} />);
    await userEvent.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("does not trigger onClose with Escape when closed", async () => {
    const onClose = jest.fn();
    render(<TestWrapper isOpen={false} onClose={onClose} />);
    await userEvent.keyboard("{Escape}");
    expect(onClose).not.toHaveBeenCalled();
  });

  it("renders Request a Consultation CTA link", () => {
    render(<TestWrapper isOpen={true} onClose={() => {}} />);
    expect(
      screen.getByRole("link", { name: "Request a Consultation" }),
    ).toBeInTheDocument();
  });

  it("renders mobile navigation landmark", () => {
    render(<TestWrapper isOpen={true} onClose={() => {}} />);
    expect(
      screen.getByRole("navigation", { name: "Mobile navigation" }),
    ).toBeInTheDocument();
  });
});

