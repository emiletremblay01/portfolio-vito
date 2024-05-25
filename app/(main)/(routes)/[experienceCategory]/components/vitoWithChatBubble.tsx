"use client";
import Image from "next/image";
import vitoComposition from "@/public/avatars/vito_composition.png";
import vitoEvenementiel from "@/public/avatars/vito_evenementiel.png";
import vitoPostProduction from "@/public/avatars/vito_postprod.png";
import ChatBubble from "@/components/chatBubble";
import { Experience } from "@/types";
export default function VitoWithChatBubble({ params }: { params: string }) {
  type experienceCategoryType = Experience["experienceCategory"];
  const experienceCategory = params;

  // code to be improved

  switch (experienceCategory) {
    case "composition":
      return (
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            veniam minima omnis. Soluta consequatur sapiente est libero adipisci
            ullam, ratione quo aliquam dolorem, repellat, error facilis. Culpa
            animi esse consectetur.
          </ChatBubble>
        </div>
      );
    case "evenementiel":
      return (
        <div className="flex w-full items-start justify-center gap-6">
          <Image
            src={vitoEvenementiel}
            alt="Avatar of me"
            className="w-36 sm:w-56"
          />
          <ChatBubble
            className="min-h-24 w-full max-w-sm p-2 text-xs sm:h-fit sm:translate-y-6 sm:px-4 sm:text-sm"
            direction="left"
            arrowClasses=" translate-y-4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            veniam minima omnis. Soluta consequatur sapiente est libero adipisci
            ullam, ratione quo aliquam dolorem, repellat, error facilis. Culpa
            animi esse consectetur.
          </ChatBubble>
        </div>
      );
    case "postproduction":
      return (
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
      );
    default:
      return null;
  }
}
