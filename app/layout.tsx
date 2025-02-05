import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";

const onest = Onest({ subsets: ["latin"], weight: ["400"] });

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
          className={`${onest.className} overflow-auto flex items-center h-screen justify-center`}
        >
          <div className="w-full max-w-md max-h-[40rem] bg-gray-50 shadow-lg rounded-lg overflow-y-scroll">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
