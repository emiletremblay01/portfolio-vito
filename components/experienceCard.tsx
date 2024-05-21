"use client";
import { motion } from "framer-motion";
type ExperienceCardProps = {
  title: string;

  className?: string;
};

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
const variants = {
  hidden: { opacity: 0, scale: 1, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};
export default function ExperienceCard({
  title,

  className,
}: ExperienceCardProps) {
  const pathname = usePathname();
  return (
    <motion.li
      key={title.toLowerCase().replace(/\s/g, "-")}
      variants={variants}
    >
      <Link
        href={`${pathname}/${title.toLowerCase().replace(/\s/g, "-")}`}
        className={cn(
          "group relative flex aspect-square flex-col items-center overflow-clip rounded-lg bg-black/20 p-4 shadow-md transition-colors hover:bg-black/60",
          className,
        )}
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
    </motion.li>
  );
}
