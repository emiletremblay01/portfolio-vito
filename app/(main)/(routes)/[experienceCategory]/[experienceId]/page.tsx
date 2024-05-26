"use client";
import { useGetExperiences } from "@/actions/client/useGetExperiences";
import vitoHead from "@/public/avatars/vito_basic_animation.gif";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function ExperiencePage({
  params,
}: {
  params: { experienceId: string };
}) {
  const pathname = usePathname().split("/").slice(0, 2).join("/");
  console.log(pathname);
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
    <div className="flex h-full flex-col items-center gap-6 p-4">
      <div className="flex w-full items-center py-2">
        <Link
          className="hover:text-_main-green group flex items-center transition-colors"
          href={pathname}
        >
          <ChevronLeft className=" size-12 transition-transform group-hover:-translate-x-1" />
          <div className="text-base font-medium">RETOUR</div>
        </Link>
      </div>
      <h1 className="text-_main-green w-fit text-2xl font-bold">{title}</h1>
      {/* div vito */}
      <div className="">
        <div className="flex w-full items-start justify-center gap-6">
          <Image src={vitoHead} alt="Avatar of me" className="w-36 sm:w-56" />
          {description}
        </div>

        <div className="h-6 w-full"></div>
      </div>
    </div>
  );
}
