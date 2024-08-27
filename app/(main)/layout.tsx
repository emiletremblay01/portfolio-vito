import { fetchExperiences } from "@/actions/actions";
import { BtnLeftNav } from "@/components/btn-leftNav";
import { BtnRightNav } from "@/components/btn-rightNav";

import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import { Suspense } from "react";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["experiences"],
    queryFn: fetchExperiences,
  });

  return (
    <Suspense>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <div className="flex h-full max-h-fit w-full flex-col justify-center md:flex-row md:py-10">
          <div className="absolute left-0 top-0 -z-40 h-full w-full bg-white/15 backdrop-blur-sm"></div>
          <BtnLeftNav />
          <div className="flex-1">{children}</div>
          <BtnRightNav />
        </div>
      </HydrationBoundary>
    </Suspense>
  );
}
