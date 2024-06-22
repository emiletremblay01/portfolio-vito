"use client";
import { useGetExperiences } from "@/actions/client/useGetExperiences";
import { cn, getVideoIdFromYouTubeUrl } from "@/lib/utils";
import vitoHead from "@/public/avatars/vito_face_angle.png";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import YouTube, { YouTubeProps } from "react-youtube";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const opts: YouTubeProps["opts"] = {
  height: "390",
  width: "640",
};
export default function ExperiencePage({
  params,
}: {
  params: { experienceId: string };
}) {
  const pathname = usePathname().split("/").slice(0, 2).join("/");
  const plugin = useRef(Autoplay({ delay: 2000 }));
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

  const { title, description, competences, liensYoutube, images } = experience;

  return (
    <div className="flex h-full flex-col items-center gap-0 p-4">
      <div className="flex w-full items-center">
        <Link
          className="group flex items-center transition-colors hover:text-_main-green"
          href={pathname}
        >
          <ChevronLeft className="size-12 transition-transform group-hover:-translate-x-1" />
          <div className="text-base font-medium">RETOUR</div>
        </Link>
      </div>

      {/* div vito */}
      <div className="relative flex h-full w-full max-w-4xl flex-col overflow-y-scroll ">
        <div className="absolute left-0 top-0 flex w-full flex-col items-center justify-center gap-6 pt-6">
          <h1 className="w-fit text-center text-lg font-bold text-_main-green sm:text-3xl">
            {title}
          </h1>
          <div className="sm:flex">
            <Image
              src={vitoHead}
              alt="Avatar of me"
              className="float-left mr-2 size-16 sm:block sm:size-36"
            />
            <div className="text-pretty text-sm sm:text-base">
              {description.split("\n").map((line, i) => (
                <p key={i}>{line.length > 0 ? line : <br />}</p>
              ))}
            </div>
          </div>
          {competences && (
            <div className="mt-6 w-full space-y-2">
              <div className=" w-full font-semibold underline">
                Compétences utilisées
              </div>
              <ul className=" flex w-full gap-1">
                {competences.map((competence) => (
                  <li
                    key={competence}
                    className=" rounded-lg border  border-_main-green p-2 text-xs text-_main-green transition-colors  hover:cursor-default hover:bg-_main-green hover:text-white sm:text-sm"
                  >
                    {competence}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {images.length > 0 && (
            <div className="mt-6 w-full space-y-2">
              <div className=" w-full font-semibold underline">Photos</div>
              <div className="flex w-full justify-center">
                <Carousel
                  plugins={[plugin.current]}
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                  className="mx-12 size-60 rounded lg:size-80 "
                >
                  <CarouselPrevious />
                  <CarouselContent className=" rounded">
                    {images.map((image, i) => (
                      <CarouselItem
                        key={i}
                        className={cn(
                          "size-60 basis-full overflow-hidden rounded lg:size-80",
                        )}
                      >
                        <div className="h-full w-full overflow-hidden rounded ">
                          <Image
                            src={image.url}
                            width={400}
                            height={400}
                            alt={`Image ${i}`}
                            className=" object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          )}
          {liensYoutube && liensYoutube.length > 0 && (
            <div className="mt-6 w-full space-y-2">
              <div className=" w-full font-semibold underline">Vidéo</div>
              <div className="mx-auto aspect-video">
                <YouTube
                  videoId={getVideoIdFromYouTubeUrl(liensYoutube[0])}
                  className="h-full w-full"
                  opts={opts}
                  iframeClassName="w-full h-full rounded "
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-6 h-6 w-full"></div>
    </div>
  );
}
