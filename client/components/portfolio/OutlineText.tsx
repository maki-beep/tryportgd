import { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface OutlineTextProps {
  children: ReactNode;
  className?: string;
  color?: string;
  strokeWidth?: number;
  as?: "h1" | "h2" | "h3" | "span" | "div";
}

export default function OutlineText({
  children,
  className,
  color = "hsl(var(--brand-green))",
  strokeWidth = 6,
  as: Tag = "span",
}: OutlineTextProps) {
  const style: CSSProperties & Record<string, string> = {
    color,
    WebkitTextStroke: `${strokeWidth}px black`,
    paintOrder: "stroke fill",
  };

  return (
    <Tag
      className={cn("font-display leading-[0.8] tracking-wide", className)}
      style={style}
    >
      {children}
    </Tag>
  );
}
