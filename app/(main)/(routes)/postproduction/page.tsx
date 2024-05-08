"use client";

import PageWrapper from "@/components/framer-motion/page-wrapper";
import Image from "next/image";
import vitoPostProduction from "@/public/avatars/vito_postprod.png";
import ChatBubble from "@/components/chatBubble";
export default function PostProductionPage() {
  return (
    <PageWrapper className="w-full overflow-hidden rounded-xl border border-black/40 bg-white/80 shadow-xl backdrop-blur-xl ">
      <h1 className=" bg-black/80 px-4 py-2 font-bold text-white">
        POST PRODUCTION{" "}
        <span className="hidden sm:inline-block">ET CRÉATION SONORE</span>
      </h1>
      <div className="flex flex-col p-4">
        <div className="flex w-full gap-6">
          <Image
            src={vitoPostProduction}
            alt="Avatar of me"
            className=" w-20"
          />
          <ChatBubble className="w-full p-2 text-xs" direction="left">
            afafodna
          </ChatBubble>
        </div>
      </div>
    </PageWrapper>
  );
}
