"use client";
import { AvatarVito } from "@/components/avatarVito";
import ChatBubble from "@/components/chatBubble";
const HomePage = () => {
  return (
    <div>
      <div className="relative mx-auto mt-40 max-w-md ">
        <AvatarVito />
        <ChatBubble className=" absolute -top-20 right-1/2 translate-x-1/2 text-sm sm:text-base">
          <p className="font-bold">Bonjour !</p>
          <p>
            Je suis <span className="font-bold">Vito Pranio</span>, un passionné
            d'<span className="font-bold">art sonore</span> qui souhaite
            partager son travail.
          </p>
        </ChatBubble>
      </div>
    </div>
  );
};

export default HomePage;
