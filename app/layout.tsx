import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ATB Platform",
  description: "Sports betting and events platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`} >
        <div className="max-w-md mx-auto min-h-screen bg-gray-50 overflow-auto max-h-96">{children}</div>
      </body>
    </html>
  )
}

