import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentPropsWithRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

type ButtonAsButton = ButtonBaseProps &
  ComponentPropsWithRef<"button"> & { href?: never };

type ButtonAsLink = ButtonBaseProps & { href: string } & Omit<
    ComponentPropsWithRef<typeof Link>,
    "href"
  >;

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-violet text-white shadow-sm hover:opacity-90 focus-visible:opacity-90 focus-visible:ring-2 focus-visible:ring-violet-vector focus-visible:ring-offset-2",
  secondary:
    "border border-brand-indigo text-brand-indigo bg-transparent hover:bg-brand-ice focus-visible:ring-2 focus-visible:ring-brand-indigo focus-visible:ring-offset-2",
  ghost:
    "text-brand-indigo bg-transparent hover:bg-brand-ice focus-visible:ring-2 focus-visible:ring-brand-indigo focus-visible:ring-offset-2",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-sm px-4 py-2 rounded-lg",
  md: "text-sm px-5 py-2.5 rounded-lg",
  lg: "text-base px-7 py-3.5 rounded-xl",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-semibold tracking-[-0.01em] transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none";

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    isLoading = false,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ("href" in props && props.href !== undefined) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={(rest as ButtonAsButton).disabled ?? isLoading}
      aria-busy={isLoading}
      {...(rest as ButtonAsButton)}
    >
      {isLoading ? (
        <>
          <span className="sr-only">Loading…</span>
          <svg
            className="animate-spin h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        </>
      ) : (
        children
      )}
    </button>
  );
}

