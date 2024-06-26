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
          <div className="flex h-full px-4 sm:container md:py-6">
            {children}
          </div>
          <div className="bg-_main-gray fixed bottom-0 left-0 z-40 hidden h-10 w-full shadow-t-lg shadow-black md:block"></div>
          <div className="bg-_main-gray fixed left-0 top-0 z-40 hidden h-10 w-full shadow-b-lg shadow-black md:block"></div>
          <div className="bg-_main-gray fixed bottom-0 left-0 z-40 hidden h-full min-w-7 shadow-r-lg shadow-black md:block 2xl:w-20"></div>
          <div className="bg-_main-gray fixed bottom-0 right-0 z-40 hidden h-full min-w-7 shadow-l-lg shadow-black md:block 2xl:w-20"></div>
          <div className="bg-_main-gray fixed left-0 top-0 z-40 hidden h-10 w-full md:block"></div>
          <div className="bg-_main-gray fixed bottom-0 left-0 z-40 hidden h-10 w-full md:block"></div>
        </Provider>
      </body>
    </html>
  );
}
