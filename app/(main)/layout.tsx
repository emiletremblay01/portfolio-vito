"use client";
import { Button } from "@/components/ui/button";
import { MicIcon, MusicIcon, ProtoolsIcon } from "@/public/svgs/svgs";
import { Facebook, Home, Instagram } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <div className="flex h-full max-h-fit w-full flex-col justify-center md:flex-row md:py-10">
        <div className="absolute left-0 top-0 -z-40 h-full w-full bg-white/15 backdrop-blur-sm"></div>
        <div className="flex w-full flex-none justify-center gap-10 px-4 py-4 md:w-fit md:flex-col md:justify-start md:gap-6">
          <div className="flex flex-col items-center">
            <Button size="icon" asChild>
              <Link href="/postproduction">
                <ProtoolsIcon className="size-8" />
              </Link>
            </Button>
            <p className="hidden font-semibold">Post-Prod</p>
          </div>
          <div className="flex flex-col items-center">
            <Button size="icon" asChild>
              <Link href="/evenementiel">
                <MicIcon className="size-8" />
              </Link>
            </Button>
            <p className="hidden font-semibold">Spectacles</p>
          </div>
          <div className="flex flex-col items-center">
            <Button size="icon" asChild>
              <Link href="/composition">
                <MusicIcon className="size-8" />
              </Link>
            </Button>
            <p className="hidden font-semibold">Composition</p>
          </div>
          <div className="hidden flex-1 md:block"></div>
          <div className="hidden flex-col items-center md:flex">
            <Button size="icon" className="" asChild>
              <Link href="/">
                <Home />
              </Link>
            </Button>
            <p className="hidden font-semibold">Composition</p>
          </div>
        </div>
        <div className="flex-1">{children}</div>
        <div className="flex w-full flex-none gap-2 px-4 py-4 md:w-fit md:flex-col md:gap-6">
          <div className="md:hidden">
            <Button size="icon" asChild>
              <Link href="/">
                <Home />
              </Link>
            </Button>
          </div>
          <div className="flex-1 md:hidden"></div>
          <Button size="icon" asChild>
            <Link href="/" target="_blank">
              <Instagram />
            </Link>
          </Button>
          <Button size="icon" asChild>
            <Link href="/" target="_blank">
              <Facebook />
            </Link>
          </Button>
        </div>
      </div>
    </Suspense>
  );
}
