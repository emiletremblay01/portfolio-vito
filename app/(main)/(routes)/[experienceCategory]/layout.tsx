"use client";
import PageWrapper from "@/components/framer-motion/page-wrapper";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import Link from "next/link";

type ExperienceCategoryLayoutProps = {
  params: { experienceCategory: string };
  children: React.ReactNode;
};
export default function ExperienceCategoryLayout({
  params,
  children,
}: ExperienceCategoryLayoutProps) {
  const { experienceCategory } = params;
  experienceCategory.split("/")[0];

  const pageTitles = [
    {
      category: "composition",
      title: "COMPOSITION",
    },
    {
      category: "evenementiel",
      title: "ÉVÉNEMENTIEL",
    },
    {
      category: "postproduction",
      title: "POST PRODUCTION ET CRÉATION SONORE",
    },
  ];
  return (
    <PageWrapper className="w-full flex-1 overflow-hidden rounded-xl border border-black/40 bg-white/90 shadow-xl backdrop-blur-xl">
      <h1 className="bg-_main-gray relative truncate px-4 py-2 font-bold text-white">
        {pageTitles.find((p) => p.category === experienceCategory)?.title}
        <div className="absolute right-0 top-0">
          <Button
            className="p-0 px-2 transition hover:scale-110 hover:bg-inherit hover:text-white"
            asChild
          >
            <Link href="/">
              <XIcon className="size-8 " />
            </Link>
          </Button>
        </div>
      </h1>

      {children}
    </PageWrapper>
  );
}
