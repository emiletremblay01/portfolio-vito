import Image from "next/image";
import avatarVito from "@/public/avatars/vito_basic_animation.gif";
type AvatarProps = {
  id: string;
  alt: string;
};
export function Avatar({ id, alt }: AvatarProps) {
  return <Image src={`/avatars/${id}`} alt={alt} className="border" />;
}

export function AvatarVito() {
  return (
    <Image
      src={avatarVito}
      alt="A portrait of me"
      unoptimized
      className="pointer-events-none w-full max-w-md select-none border"
      draggable={false}
    />
  );
}
