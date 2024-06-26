"use client";
import { MicIcon, MusicIcon, ProtoolsIcon } from "@/public/svgs/svgs";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
export function BtnLeftNav() {
  return (
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
    </div>
  );
}
