"use client";

import PageWrapper from "@/components/framer-motion/page-wrapper";
import Image from "next/image";
import vitoComposition from "@/public/avatars/vito_composition.png";
export default function CompositionPage() {
  return (
    <PageWrapper className="mx-auto w-full rounded-xl bg-white p-4">
      <h1>COMPOSITION PAGE</h1>
      <Image src={vitoComposition} alt="Avatar of me" />
    </PageWrapper>
  );
}
