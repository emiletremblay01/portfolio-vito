import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { BackgroundGif } from "@/components/backgroundGif";
import Provider from "@/lib/Providers";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Vito Pranio - Artiste sonore",
  description: "Portfolio de Vito Pranio, artiste sonore",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-[calc(100dvh)] bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Provider>
          <BackgroundGif />
          <div className="flex h-full px-4 sm:container">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
