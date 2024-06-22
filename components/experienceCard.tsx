"use client";
import { motion } from "framer-motion";
import { Experience } from "@/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
const variants = {
  hidden: { opacity: 0, scale: 1, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};
type ExperienceCardProps = {
  experience: Experience;
  className?: string;
};
export default function ExperienceCard({
  experience,
  className,
}: ExperienceCardProps) {
  const pathname = usePathname();
  const { _id, thumbnailTitle, thumbnailImage } = experience;
  return (
    <motion.li className="relative" key={_id} variants={variants}>
      <Link
        href={`${pathname}/${_id}`}
        className={cn(
          "group relative flex aspect-square flex-col items-center overflow-clip rounded-lg bg-black/20 p-4 shadow-md transition-colors hover:bg-black/60 sm:size-44 lg:size-60",
          className,
        )}
      >
        <Image
          src={thumbnailImage}
          width="200"
          height="200"
          alt="placeholder"
          className="pointer-events-none absolute left-0 top-0 -z-40 w-full transform select-none transition-transform group-hover:scale-105"
        />
        <div className="invisible h-1/3"></div>
        <h2 className="text-center font-bold text-white">{thumbnailTitle}</h2>
        <div className="absolute bottom-0 mb-4 hidden rounded border border-white p-2 text-xs text-white opacity-60 transition-opacity group-hover:opacity-100 sm:block">
          {experience.experienceType.toUpperCase()}
        </div>
      </Link>
    </motion.li>
  );
}
