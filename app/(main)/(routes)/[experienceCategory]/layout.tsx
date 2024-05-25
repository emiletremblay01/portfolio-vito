"use client";
import PageWrapper from "@/components/framer-motion/page-wrapper";

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
    <PageWrapper className="w-full flex-1 overflow-hidden rounded-xl border border-black/40 bg-white/80 shadow-xl backdrop-blur-xl ">
      <h1 className="truncate bg-black/80 px-4 py-2 font-bold text-white">
        {pageTitles.find((p) => p.category === experienceCategory)?.title}
      </h1>

      {children}
    </PageWrapper>
  );
}
