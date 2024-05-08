"use client";

import PageWrapper from "@/components/framer-motion/page-wrapper";
import Image from "next/image";
import vitoPostProduction from "@/public/avatars/vito_postprod.png";
export default function PostProductionPage() {
  return (
    <PageWrapper className="w-full rounded-xl bg-white p-4">
      <h1>POST PRODUCTION PAGE</h1>
      <Image src={vitoPostProduction} alt="Avatar of me" />
    </PageWrapper>
  );
}
