import Image from "next/image";
import img from "@/public/homepage_bg_animation.gif";

export function BackgroundGif() {
  return (
    <>
      <Image
        src={img}
        alt="background of a studio"
        unoptimized
        className="absolute left-0 top-0 -z-50 h-full object-cover"
        priority
      />
    </>
  );
}
