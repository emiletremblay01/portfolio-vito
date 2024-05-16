"use client";

type ExperienceCardProps = {
  id: string;
  title: string;

  className?: string;
};

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function ExperienceCard({
  id,
  title,

  className,
  ...props
}: ExperienceCardProps) {
  const pathname = usePathname();
  return (
    <Link
      href={`${pathname}/${id}`}
      className={cn(
        "group relative flex aspect-square flex-col items-center overflow-clip rounded-lg bg-black/20 p-4 shadow-md transition-colors hover:bg-black/60",
        className,
      )}
      {...props}
    >
      <Image
        src="https://picsum.photos/200"
        width="200"
        height="200"
        alt="placeholder"
        className="pointer-events-none absolute left-0 top-0 -z-40 w-full transform select-none transition-transform group-hover:scale-105"
      />
      <div className="invisible h-1/3"></div>
      <h2 className="text-center font-bold text-white">{title}</h2>
    </Link>
  );
}
