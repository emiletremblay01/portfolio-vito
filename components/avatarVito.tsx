import Image from "next/image";
import avatarVito from "@/public/avatars/vito_basic_animation.gif";

export function AvatarVito() {
  return (
    <Image
      src={avatarVito}
      alt="A portrait of me"
      unoptimized
      className="pointer-events-none w-full max-w-md select-none"
      draggable={false}
    />
  );
}
