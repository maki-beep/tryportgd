import { cn } from "@/lib/utils";

interface SectionTagProps {
  children: string;
  color?: "red" | "green";
  rotate?: number;
  className?: string;
}

export default function SectionTag({
  children,
  color = "red",
  rotate = -4,
  className,
}: SectionTagProps) {
  return (
    <div
      className={cn("relative inline-block", className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <span
        aria-hidden="true"
        className="absolute -inset-2 rounded-2xl border-2 border-brand-green"
      />
      <span
        className={cn(
          "relative inline-block rounded-2xl px-5 py-3 font-pixel text-2xl text-white shadow-[0_3px_0_0_rgba(0,0,0,0.5)] sm:text-3xl md:text-4xl",
          color === "red" ? "bg-brand-red" : "bg-brand-green text-black",
        )}
      >
        {children}
      </span>
    </div>
  );
}
