"use client";
import vitoComposition from "@/public/avatars/vito_composition.png";

import ChatBubble from "@/components/chatBubble";
import ExperiencesContainer from "./components/experiencesContainer";
import PageWrapper from "@/components/framer-motion/page-wrapper";
import { NavExperiences } from "./components/navExperiences";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import VitoWithChatBubble from "./components/vitoWithChatBubble";

export default function ExperienceCategoryPage({
  params,
}: {
  params: { experienceCategory: string };
}) {
  const { experienceCategory } = params;
  const searchParams = useSearchParams();
  const selectedExperienceType = searchParams.get("experience");
  experienceCategory.split("/")[0];

  return (
    <div className="flex h-full flex-col gap-6 p-4">
      <VitoWithChatBubble params={experienceCategory} />
      {/* div experiences */}
      <NavExperiences />
      {/* div grid experiences */}
      <div className="relative h-full overflow-y-scroll rounded ">
        <ExperiencesContainer key={selectedExperienceType} />
      </div>
      <div className="h-6 w-full"></div>
    </div>
  );
}
