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
      labelShort: "Toutes",
      type: "all",
      active: selectedExperienceType === "all",
    },
    {
      label: "Expérience professionnelle",
      labelShort: "Professionnelles",
      type: "professional",
      active: selectedExperienceType === "professional",
    },
    {
      label: "Expérience personnelle",
      labelShort: "Personnelles",
      type: "personal",
      active: selectedExperienceType === "personal",
    },
    {
      label: "Expérience scolaire",
      labelShort: "Scolaires",
      type: "school",
      active: selectedExperienceType === "school",
    },
  ];
  return (
    <>
      <nav className="">
        <div className="pb-2 text-lg font-bold text-black/80">Expériences</div>
        <div className="flex w-full flex-wrap gap-x-2">
          {routes.map((route) => (
            <Link
              key={route.label}
              href={`?experience=${route.type}`}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#4E6B33]",
                route.active
                  ? "text-[#4E6B33] underline decoration-inherit underline-offset-1 dark:text-white"
                  : "text-black/80",
              )}
            >
              {route.labelShort}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
