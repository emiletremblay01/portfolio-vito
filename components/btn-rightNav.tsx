"use client";
import { Button } from "@/components/ui/button";
import { CvIcon, LinkedInIcon, MailIcon } from "@/public/svgs/svgs";
import Link from "next/link";
export function BtnRightNav() {
  return (
    <div className="flex w-full flex-none gap-2 px-4 py-4 md:w-fit md:flex-col md:gap-6">
      <div className="flex-1 md:hidden"></div>
      <Button size="icon" asChild>
        <Link href="/" target="_blank">
          <CvIcon className="size-8" />
        </Link>
      </Button>
      {/* make it mailto instead of link */}

      <Button size="icon" asChild>
        <Link href="mailto:vpranio@gmail.com" target="_blank">
          <MailIcon className="size-8" />
        </Link>
      </Button>

      <Button size="icon" asChild>
        <Link href="https://www.linkedin.com/in/vito-pranio/" target="_blank">
          <LinkedInIcon className="size-8" />
        </Link>
      </Button>
    </div>
  );
}
