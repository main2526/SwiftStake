import type { Metadata } from "next";
import "./globals.css";
import ManagerOptions from "@/components/footer";

export const metadata: Metadata = {
  title: "Mi Aplicación",
  description: "Descripción de mi app con Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full relative">
      <head>
        <meta
          name="viewport"
          content="width=375, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body className="h-screen flex items-center justify-center bg-gray-100 text-gray-900">
        <div className="w-[375px] min-h-[667px] bg-white border border-gray-300 shadow-lg rounded-lg flex flex-col items-center justify-center">
          {children}
          <div className="absolute shadow-lg w-[375px] bg-slate-100   p-2 bottom-0 ">
            <ManagerOptions />
          </div>
        </div>
      </body>
    </html>
  );
}
