"use client";

import { useEffect } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { useSearchParams, useRouter } from "next/navigation";

export function NavExperiences({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedExperienceType = searchParams.get("experience");
  useEffect(() => {
    if (!selectedExperienceType) {
      router.replace("?experience=all", { scroll: false });
    }
  }, [selectedExperienceType]);
  const routes = [
    {
      label: "Toutes les expériences",
      type: "all",
      active: selectedExperienceType === "all",
    },
    {
      label: "Expérience professionnelle",
      type: "professional",
      active: selectedExperienceType === "professional",
    },
    {
      label: "Expérience personnelle",
      type: "personal",
      active: selectedExperienceType === "personal",
    },
    {
      label: "Expérience scolaire",
      type: "school",
      active: selectedExperienceType === "school",
    },
  ];
  return (
    <>
      <nav className={cn("items hidden gap-10 md:flex ", className)}>
        {routes.map((route) => (
          <Link
            key={route.label}
            href={`?experience=${route.type}`}
            className={cn(
              "text-sm font-semibold transition-colors hover:text-[#4E6B33]",
              route.active
                ? "text-[#4E6B33] underline decoration-inherit underline-offset-1 dark:text-white"
                : "text-black/80",
            )}
          >
            {route.label.toUpperCase()}
          </Link>
        ))}
      </nav>
      <div className="font-semibold text-black/80 md:hidden">Expériences</div>
    </>
  );
}
