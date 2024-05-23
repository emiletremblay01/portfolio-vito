"use client";
import ChatBubble from "@/components/chatBubble";
import ExperiencesContainer from "@/components/experiencesContainer";
import PageWrapper from "@/components/framer-motion/page-wrapper";
import { NavExperiences } from "@/components/navExperiences";
import vitoPostProduction from "@/public/avatars/vito_postprod.png";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function PostProductionPage() {
  const searchParams = useSearchParams();
  const selectedExperienceType = searchParams.get("experience");
  return (
    <PageWrapper className="w-full flex-1 overflow-hidden rounded-xl border border-black/40 bg-white/80 shadow-xl backdrop-blur-xl ">
      <h1 className="truncate bg-black/80 px-4 py-2 font-bold text-white">
        POST PRODUCTION ET CRÉATION SONORE
      </h1>
      {/* div vito */}
      <div className="flex h-full flex-col gap-6 p-4">
        <div className="flex w-full items-start justify-center gap-6">
          <Image
            src={vitoPostProduction}
            alt="Avatar of me"
            className="w-20 sm:w-40"
          />
          <ChatBubble
            className=" min-h-24 w-full max-w-sm p-2 text-xs sm:h-fit sm:translate-y-6 sm:px-4 sm:text-sm"
            direction="left"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            veniam minima omnis. Soluta consequatur sapiente est libero adipisci
            ullam, ratione quo aliquam dolorem, repellat, error facilis. Culpa
            animi esse consectetur.
          </ChatBubble>
        </div>
        {/* div experiences */}
        <NavExperiences />
        {/* div grid experiences */}
        <div className="relative h-full overflow-y-scroll rounded ">
          {<ExperiencesContainer key={selectedExperienceType} />}
        </div>
        <div className="h-6 w-full"></div>
      </div>
    </PageWrapper>
  );
}
