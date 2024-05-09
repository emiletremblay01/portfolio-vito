"use client";

import PageWrapper from "@/components/framer-motion/page-wrapper";
import Image from "next/image";
import vitoPostProduction from "@/public/avatars/vito_postprod.png";
import ChatBubble from "@/components/chatBubble";
import { NavExperiences } from "@/components/navExperiences";
export default function PostProductionPage() {
  return (
    <PageWrapper className="w-full overflow-hidden rounded-xl border border-black/40 bg-white/80 shadow-xl backdrop-blur-xl ">
      <h1 className="bg-black/80 px-4 py-2 font-bold text-white">
        POST PRODUCTION{" "}
        <span className="hidden sm:inline-block">ET CRÉATION SONORE</span>
      </h1>
      <div className="flex flex-col gap-6 p-4">
        <div className="flex w-full items-start gap-6">
          <Image
            src={vitoPostProduction}
            alt="Avatar of me"
            className=" w-20"
          />
          <ChatBubble
            className=" min-h-24 w-full max-w-sm p-2 text-xs"
            direction="left"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            veniam minima omnis. Soluta consequatur sapiente est libero adipisci
            ullam, ratione quo aliquam dolorem, repellat, error facilis. Culpa
            animi esse consectetur.
          </ChatBubble>
        </div>
        <NavExperiences />
      </div>
    </PageWrapper>
  );
}
