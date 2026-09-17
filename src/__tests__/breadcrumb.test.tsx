import React from "react";
import { render, screen } from "@testing-library/react";
import { Breadcrumb } from "@/components/ui/breadcrumb";

describe("Breadcrumb component", () => {
  it("renders Home as the first item", () => {
    render(<Breadcrumb items={[{ label: "Services" }]} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("renders all breadcrumb items", () => {
    render(
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "NVG Modifications" },
        ]}
      />,
    );
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("NVG Modifications")).toBeInTheDocument();
  });

  it("marks the last item with aria-current=page", () => {
    render(<Breadcrumb items={[{ label: "About" }]} />);
    expect(screen.getByText("About")).toHaveAttribute("aria-current", "page");
  });

  it("renders intermediate items as links", () => {
    render(
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "GPS Installation" },
        ]}
      />,
    );
    const servicesLink = screen.getByRole("link", { name: "Services" });
    expect(servicesLink).toHaveAttribute("href", "/services");
  });

  it("has an accessible nav landmark with label", () => {
    render(<Breadcrumb items={[{ label: "Contact" }]} />);
    expect(screen.getByRole("navigation", { name: "Breadcrumb" })).toBeInTheDocument();
  });

  it("renders as an ordered list", () => {
    render(<Breadcrumb items={[{ label: "Contact" }]} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("handles single-item breadcrumb (just the current page)", () => {
    render(<Breadcrumb items={[{ label: "Privacy Policy" }]} />);
    expect(screen.getByText("Privacy Policy")).toHaveAttribute(
      "aria-current",
      "page",
    );
  });
});

