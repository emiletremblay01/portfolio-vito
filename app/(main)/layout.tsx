"use client";
import { AvatarVito } from "@/components/avatarVito";
import ChatBubble from "@/components/chatBubble";
import { Button } from "@/components/ui/button";
import {
  CircleUserRound,
  Facebook,
  Folder,
  Home,
  Instagram,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProtoolsIcon, MicIcon, MusicIcon } from "@/public/svgs/svgs";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Check if animation has been triggered before in the current session
    const hasAnimationTriggeredBefore =
      sessionStorage.getItem("animationTriggered");

    if (hasAnimationTriggeredBefore !== "true") {
      // Animation has not been triggered before in the current session, trigger it
      setTimeout(() => {
        setIsLoading(false);
        // Store in session storage that animation has been triggered
        sessionStorage.setItem("animationTriggered", "true");
      }, 2000); // Adjust the timeout as needed for your animation
    } else {
      // Animation has been triggered before in the current session, set isLoading to false immediately
      setIsLoading(false);
    }
  }, []);
  return (
    <div className="flex min-h-full w-full flex-col justify-center bg-red-400 ">
      <div className="absolute left-0 top-0 -z-40 h-full w-full bg-white/15 backdrop-blur-sm"></div>
      <div className="flex w-full flex-none justify-center gap-10 px-4 py-4">
        <div className="flex flex-col items-center">
          <Button size="icon" asChild>
            <Link href="/postproduction">
              <ProtoolsIcon className=" size-8" />
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
      </div>
      <div className="flex-1">{children}</div>
      <div className="flex w-full flex-none gap-2 px-4 py-4">
        <Button size="icon" asChild>
          <Link href="/">
            <Home />
          </Link>
        </Button>
        <div className="flex-1"></div>
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
  );
}
