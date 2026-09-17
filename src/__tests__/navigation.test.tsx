import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Mock Next.js Link
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

// Mock Next.js Image
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

import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import type { NavItem } from "@/content/navigation";

const mockItems: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "NVG Modifications", href: "/services/nvg-modifications" },
      { label: "GPS Installation", href: "/services/gps-installation" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

describe("DesktopNavigation", () => {
  it("renders all nav items", () => {
    render(<DesktopNavigation items={mockItems} />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders the main nav landmark", () => {
    render(<DesktopNavigation items={mockItems} />);
    expect(
      screen.getByRole("navigation", { name: "Main navigation" }),
    ).toBeInTheDocument();
  });

  it("shows dropdown trigger with aria-haspopup", () => {
    render(<DesktopNavigation items={mockItems} />);
    const trigger = screen.getByRole("button", { name: /Services/i });
    expect(trigger).toHaveAttribute("aria-haspopup", "true");
  });

  it("dropdown is closed by default", () => {
    render(<DesktopNavigation items={mockItems} />);
    const trigger = screen.getByRole("button", { name: /Services/i });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("opens dropdown on click", async () => {
    render(<DesktopNavigation items={mockItems} />);
    const trigger = screen.getByRole("button", { name: /Services/i });
    await userEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("NVG Modifications")).toBeInTheDocument();
  });

  it("closes dropdown on Escape key", async () => {
    render(<DesktopNavigation items={mockItems} />);
    const trigger = screen.getByRole("button", { name: /Services/i });
    await userEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    await userEvent.keyboard("{Escape}");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("plain nav items render as links", () => {
    render(<DesktopNavigation items={mockItems} />);
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "/about",
    );
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "/contact",
    );
  });
});

