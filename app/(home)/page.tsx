"use client";
import { AvatarVito } from "@/components/avatarVito";
import ChatBubble from "@/components/chatBubble";
import { Button } from "@/components/ui/button";
import {
  CircleUserRound,
  Facebook,
  Folder,
  Instagram,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
const HomePage = () => {
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
    <div>
      {isLoading ? (
        // Render your loading animation here
        <div>
          <p>
            This is a simple example of a loading animation that only triggers
            once per session.
          </p>
          Loading...
        </div>
      ) : (
        // Render your actual content here

        <div>
          <div className="flex w-full gap-2  px-4 py-4">
            <div className="flex flex-col items-center">
              <Button size="icon" asChild>
                <Link href="/projets">
                  <Folder />
                </Link>
              </Button>
              <p className=" font-semibold">Projets</p>
            </div>
            <div className="flex flex-col items-center">
              <Button size="icon" asChild>
                <Link href="/about">
                  <CircleUserRound />
                </Link>
              </Button>
              <p className=" font-semibold">À propos</p>
            </div>
            <div className="flex flex-col items-center">
              <Button size="icon" asChild>
                <Link href="/contact">
                  <Mail />
                </Link>
              </Button>
              <p className=" font-semibold">Contact</p>
            </div>

            {/* <Button size="icon" asChild>
              <Link href="/a-propos">
                <CircleUserRound />
              </Link>
            </Button>{" "}
            <Button size="icon" asChild>
              <Link href="/contact">
                <Mail />
              </Link>
            </Button> */}
          </div>
          <div className="relative mx-auto mt-40 max-w-md ">
            <AvatarVito />
            <ChatBubble className=" absolute -top-20 right-1/2 translate-x-1/2 text-sm sm:text-base">
              <p className="font-bold">Bonjour !</p>
              <p>
                Je suis <span className="font-bold">Vito Pranio</span>, un
                passionné d'<span className="font-bold">art sonore</span> qui
                souhaite partager son travail.
              </p>
            </ChatBubble>
          </div>

          <div className="flex w-full gap-2 px-4 py-4">
            <Button size="icon" asChild>
              <Link href="/about">
                <Instagram />
              </Link>
            </Button>
            <Button size="icon" asChild>
              <Link href="/about">
                <Facebook />
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
