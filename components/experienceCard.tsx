"use client";

type ExperienceCardProps = {
  id: string;
  title: string;
  date: string;
  description: string;
  className?: string;
};

import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ExperienceCard({
  id,
  title,
  date,
  description,
  className,
  ...props
}: ExperienceCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-black/40 bg-white/80 p-4 shadow-xl",
        className,
      )}
      {...props}
    >
      <h2 className="font-bold text-black/80">{title}</h2>
      <p className="text-xs text-black/60">{date}</p>
      <p className="text-sm text-black/80">{description}</p>
    </div>
  );
}
