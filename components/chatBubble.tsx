import { cn } from "@/lib/utils";
type ChatBubbleProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right" | "bottom";
};
export default function ChatBubble({
  children,
  className,
  direction = "bottom",
}: ChatBubbleProps) {
  return (
    <div
      className={cn(
        "relative z-10 w-64 rounded-lg bg-[#4E6B33] p-4 text-white ",
        className,
      )}
    >
      <div className="z-10 bg-inherit">{children}</div>
      {direction === "bottom" && (
        <svg
          width="95"
          height="112"
          viewBox="0 0 95 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 right-0 -z-20 translate-y-1/2 scale-50 transform"
        >
          <path
            d="M18.4004 110C14.7087 113.367 8.75916 111.011 8.37472 106.029L0.695726 6.51396C0.354485 2.09165 4.76384 -1.15942 8.88756 0.474021L90.3076 32.7251C94.4313 34.3585 95.4184 39.7472 92.1414 42.7363L18.4004 110Z"
            fill="#4E6B33"
          />
        </svg>
      )}

      {direction === "left" && (
        <svg
          width="40"
          height="100"
          viewBox="0 0 230 175"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="scale-25 absolute -left-4 -top-4 -z-20 transform"
        >
          <path
            d="M4.10281 93.1229C-1.1059 91.1837 -1.10588 83.8163 4.10282 81.8771L221.657 0.879663C225.577 -0.579915 229.75 2.31937 229.75 6.5026L229.75 168.497C229.75 172.681 225.577 175.58 221.657 174.12L4.10281 93.1229Z"
            fill="#4E6B33"
          />
        </svg>
      )}
    </div>
  );
}
