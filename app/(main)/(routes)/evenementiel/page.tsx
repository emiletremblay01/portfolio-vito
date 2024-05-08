"use client";

import PageWrapper from "@/components/framer-motion/page-wrapper";
import Image from "next/image";
import vitoEvenementiel from "@/public/avatars/vito_evenementiel.png";
export default function EvenementielPage() {
  return (
    <PageWrapper className="mx-auto w-full rounded-xl bg-white p-4">
      <h1>EVENEMENTIEL PAGE</h1>
      <Image src={vitoEvenementiel} alt="Avatar of me" />
    </PageWrapper>
  );
}
