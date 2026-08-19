import { cn } from "@/lib/utils";

interface MarqueeProps {
  text: string;
  bgClassName: string;
  textColor: string;
  fast?: boolean;
}

export default function Marquee({
  text,
  bgClassName,
  textColor,
  fast = false,
}: MarqueeProps) {
  const item = (key: number) => (
    <span
      key={key}
      className="mx-4 shrink-0 font-pixel text-3xl sm:text-4xl md:text-5xl"
      style={{
        color: "transparent",
        WebkitTextStroke: `1.5px ${textColor}`,
      }}
    >
      {text} ---
    </span>
  );

  return (
    <div className={cn("overflow-hidden py-3 sm:py-4", bgClassName)}>
      <div
        className={cn(
          "flex w-max",
          fast ? "animate-marquee" : "animate-marquee-slow",
        )}
      >
        <div className="flex shrink-0">
          {Array.from({ length: 8 }).map((_, i) => item(i))}
        </div>
        <div className="flex shrink-0" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => item(i + 8))}
        </div>
      </div>
    </div>
  );
}
