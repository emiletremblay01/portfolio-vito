"use client";
import ChatBubble from "@/components/chatBubble";
import vitoComposition from "@/public/avatars/vito_composition.png";
import vitoEvenementiel from "@/public/avatars/vito_evenementiel.png";
import vitoPostProduction from "@/public/avatars/vito_postprod.png";
import Image from "next/image";
export default function VitoWithChatBubble({ params }: { params: string }) {
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
            Passionné de musique depuis l'enfance, j'ai commencé le saxophone à
            10 ans. Après un parcours scolaire accompagné de musique, j'ai
            obtenu mon baccalauréat avec option musique en 2017. Depuis, j'ai
            continué à composer et à apprendre les DAW. Voici une liste de mes
            diverses expériences dans ce domaine.
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
            J'ai découvert le domaine du son en tant que technicien dans le
            spectacle. Après quelques concerts bénévoles, j'ai étudié à STAFF et
            obtenu mon diplôme technique en 2020. Voici une liste de mes
            diverses expériences dans ce domaine.
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
            Lors de mes études à Musitechnic, j'ai découvert ma passion pour la
            post-production. J'aspire à travailler dans ce domaine, notamment
            comme bruiteur ou preneur de son. Voici une liste de mes diverses
            expériences dans ce domaine.
          </ChatBubble>
        </div>
      );
    default:
      return null;
  }
}
