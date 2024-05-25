"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
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
      labelShort: "Toutes",
      type: "all",
      active: selectedExperienceType === "all",
    },
    {
      labelShort: "Professionnelles",
      type: "professionelle",
      active: selectedExperienceType === "professionelle",
    },
    {
      labelShort: "Personnelles",
      type: "personnelle",
      active: selectedExperienceType === "personnelle",
    },
    {
      labelShort: "Scolaires",
      type: "scolaire",
      active: selectedExperienceType === "scolaire",
    },
  ];
  return (
    <>
      <nav className="">
        <div className="mb-1 text-lg font-bold text-black/80">Expériences</div>
        <div className="flex w-full flex-wrap gap-x-2">
          {routes.map((route) => (
            <div key={route.labelShort} className="group flex">
              <Link
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
              <Separator
                orientation="vertical"
                className="ml-2 bg-black/20 group-last:hidden"
              />
            </div>
          ))}
        </div>
      </nav>
    </>
  );
}
