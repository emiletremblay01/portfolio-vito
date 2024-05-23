"use client";
import { Button } from "@/components/ui/button";
import { Facebook, Home, Instagram } from "lucide-react";
import Link from "next/link";
export function BtnRightNav() {
  return (
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
  );
}
