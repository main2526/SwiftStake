import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SwiftStake",
  description: "Sports betting and events platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} overflow-hidden flex items-center justify-center min-h-screen`}
        >
          <SignedOut></SignedOut>
          <SignedIn></SignedIn>
          <div className="w-full max-w-md max-h-[50rem] bg-gray-50 shadow-lg rounded-lg overflow-auto ">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
