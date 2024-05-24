"use client";
import { useGetExperiences } from "@/actions/client/useGetExperiences";
import Image from "next/image";
import ChatBubble from "@/components/chatBubble";
import vitoComposition from "@/public/avatars/vito_composition.png";
export default function ExperiencePage({
  params,
}: {
  params: { experienceId: string };
}) {
  const { experienceId } = params;
  const { data: experiences, isLoading, isError } = useGetExperiences();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    console.error("Error while fetching experiences");
    return <div>Error...</div>;
  }

  const experience = experiences?.find((exp) => exp._id === experienceId);

  if (!experience) {
    return <div>Experience not found</div>;
  }

  const { title, description } = experience;
  return (
    <div className="w-full flex-1 overflow-hidden rounded-xl border border-black/40 bg-white/80 shadow-xl backdrop-blur-xl ">
      <h1 className="bg-black/80 px-4 py-2 font-bold text-white">{title}</h1>
      {/* div vito */}
      <div className="flex h-full flex-col gap-6 p-4">
        <div className="flex w-full items-start justify-center gap-6">
          <Image
            src={vitoComposition}
            alt="Avatar of me"
            className="w-36 sm:w-56"
          />
          <ChatBubble
            className="min-h-24 w-full max-w-sm p-2 text-xs sm:h-fit sm:translate-y-6 sm:px-4 sm:text-sm"
            direction="left"
            arrowClasses=""
          >
            {description}
          </ChatBubble>
        </div>

        <div className="h-6 w-full"></div>
      </div>
    </div>
  );
}
