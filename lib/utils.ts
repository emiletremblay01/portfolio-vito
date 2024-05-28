import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getVideoIdFromYouTubeUrl(url: string) {
  const res = url.split("?v=")[1];
  return res;
}
