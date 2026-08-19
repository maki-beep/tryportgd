import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function NotchCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[32px] rounded-bl-none bg-brand-dark shadow-[0_3px_0_0_var(--tw-shadow-color),0_20px_40px_-10px_rgba(0,0,0,0.6)] shadow-brand-dark-line",
        className,
      )}
    >
      {children}
    </div>
  );
}
