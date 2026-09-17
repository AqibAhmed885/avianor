import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoVariant = "full" | "mark" | "wordmark";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  asImage?: boolean;
  inverted?: boolean;
}

export function Logo({
  variant = "full",
  className,
  asImage = false,
  inverted = false,
}: LogoProps) {
  const mark = (
    <LogoImage variant={variant} inverted={inverted} className={className} />
  );

  if (asImage) return mark;

  return (
    <Link
      href="/"
      className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo focus-visible:ring-offset-2 rounded"
      aria-label="Avianor Engineering — Home"
    >
      {mark}
    </Link>
  );
}

function LogoImage({
  variant,
  inverted,
  className,
}: {
  variant: LogoVariant;
  inverted: boolean;
  className?: string;
}) {

  if (variant === "mark") {
    return (
      <Image
        src={inverted ? "/brand/logo.png" : "/brand/logo.png"}
        alt="Avianor Engineering"
        width={40}
        height={40}
        className={cn("h-10 w-auto", className)}
        priority
      />
    );
  }

  if (variant === "wordmark") {
    return (
      <Image
        src={
          inverted
            ? "/brand/logo.png"
            : "/brand/logo.png"
        }
        alt="Avianor Engineering"
        width={140}
        height={32}
        className={cn("h-8 w-auto", className)}
        priority
      />
    );
  }

  // Default: full lockup
  return (
    <Image
      src={inverted ? "/brand/logo.png" : "/brand/logo.png"}
      alt="Avianor Engineering"
      width={180}
      height={40}
      className={cn("h-12 w-auto", className)}
      priority
    />
  );
}

