"use client";
import { AvatarVito } from "@/components/avatarVito";
import ChatBubble from "@/components/chatBubble";
const HomePage = () => {
  return (
    <div>
      <div className="h-40 w-full"></div>
      <div className="relative mx-auto  max-w-md ">
        <AvatarVito />
        <ChatBubble className=" absolute -top-20 right-1/2 translate-x-1/2 text-sm sm:text-base">
          <p className="font-bold">Bonjour !</p>
          <p>
            Je suis <span className="font-bold">Vito Pranio</span>, un passionné
            d'audio et de post production qui souhaite partager son travail.
          </p>
        </ChatBubble>
      </div>
    </div>
  );
};

export default HomePage;
