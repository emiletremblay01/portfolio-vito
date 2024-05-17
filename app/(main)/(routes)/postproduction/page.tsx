"use client";

import PageWrapper from "@/components/framer-motion/page-wrapper";
import Image from "next/image";
import vitoPostProduction from "@/public/avatars/vito_postprod.png";
import ChatBubble from "@/components/chatBubble";
import { NavExperiences } from "@/components/navExperiences";
import ExperienceCard from "@/components/experienceCard";
export default function PostProductionPage() {
  const experiences = [
    {
      id: "1",
      title: "Stage chez Joe Caron",
    },
    {
      id: "2",
      title: "Lorme ipsum",
    },
    {
      id: "3",
      title: "Lorme ipsum",
    },
    {
      id: "4",
      title: "Lorme ipsum",
    },
    {
      id: "5",
      title: "Lorme ipsum",
    },
  ];
  return (
    <PageWrapper className="w-full flex-1 overflow-hidden rounded-xl border border-black/40 bg-white/80 shadow-xl backdrop-blur-xl ">
      <h1 className="bg-black/80 px-4 py-2 font-bold text-white">
        POST PRODUCTION{" "}
        <span className="hidden sm:inline-block">ET CRÉATION SONORE</span>
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
          <div className="absolute left-0 top-0 grid grid-cols-2 flex-wrap gap-1 min-[470px]:grid-cols-3 sm:flex sm:gap-2">
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.id}
                className=" sm:size-44"
                {...experience}
              />
            ))}
          </div>
        </div>
        <div className="h-6 w-full"></div>
      </div>
    </PageWrapper>
  );
}
