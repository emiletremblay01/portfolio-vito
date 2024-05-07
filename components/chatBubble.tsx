import { cn } from "@/lib/utils";
type ChatBubbleProps = {
  children: React.ReactNode;
  className?: string;
};
export default function ChatBubble({ children, className }: ChatBubbleProps) {
  return (
    <div
      className={cn(
        "relative z-10 w-64 rounded-lg bg-[#4E6B33] p-4 text-white shadow-lg shadow-white sm:w-72",
        className,
      )}
    >
      <div className="z-10 bg-inherit">{children}</div>
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
    </div>
  );
}
