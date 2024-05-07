import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type PageWrapperProps = {
  children: React.ReactNode;
  className?: string;
};
export default function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={cn("relative", className)}
    >
      {children}
    </motion.div>
  );
}
