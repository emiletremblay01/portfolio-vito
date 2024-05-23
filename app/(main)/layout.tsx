import { BtnLeftNav } from "@/components/btn-leftNav";

import { QueryClient } from "@tanstack/react-query";
import { Suspense } from "react";
const queryClient = new QueryClient();
export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <div className="flex h-full max-h-fit w-full flex-col justify-center md:flex-row md:py-10">
        <div className="absolute left-0 top-0 -z-40 h-full w-full bg-white/15 backdrop-blur-sm"></div>
        <BtnLeftNav />
        <div className="flex-1">{children}</div>
      </div>
    </Suspense>
  );
}
