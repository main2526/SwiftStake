"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Copy } from "lucide-react";
import BottomNavigation from "@/components/bottom-navigation";
import {
  useClerk,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";

export default function Page() {
  const [timeLeft, setTimeLeft] = useState(0);
  const { signOut } = useClerk();
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.replace("/");
    }
  }, [isSignedIn]);

  useEffect(() => {
    const storedTime = sessionStorage.getItem("countdown");
    const initialTime = storedTime ? parseInt(storedTime, 10) : 24 * 60 * 60;
    setTimeLeft(initialTime);

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          sessionStorage.setItem("countdown", String(24 * 60 * 60));
          return 24 * 60 * 60;
        }
        sessionStorage.setItem("countdown", String(prevTime - 1));
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds : number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs}h ${mins.toString().padStart(2, "0")}min ${secs
      .toString()
      .padStart(2, "0")}s`;
  };

  return (
    <div className="bg-gray-50 pb-16">
      <header className="bg-white p-4 flex items-center justify-between">
        <Image src="/logo.png" alt="ATB Logo" width={150} height={40} className="rounded-full" />
        <div className="flex gap-2">
          <SignedOut>
            <SignInButton>
              <Button className="bg-[#40E0D0] hover:bg-[#3BC9BB] text-black text-xs">INICIAR SESIÓN</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
            <Button className="bg-red-500 hover:bg-red-600 text-white text-xs" onClick={() => signOut()}>
              CERRAR SESIÓN
            </Button>
          </SignedIn>
        </div>
      </header>

      <main className="container mx-auto p-4 space-y-6">
        <Swiper modules={[Autoplay, Navigation]} autoplay={{ delay: 6000 }} loop>
          {["/Carrousel.jpg", "/Carrousel2.jpg", "/Carrousel3.jpg", "/Carrousel4.jpg"].map((src, index) => (
            <SwiperSlide key={index}>
              <Image src={src} alt={`Imagen ${index + 1}`} width={800} height={400} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div>
          <h2 className="text-lg font-bold mb-4">Eventos populares</h2>
          <Card className="p-2">
            <div className="bg-[#4B0082] text-white p-2 rounded-t-lg flex justify-between items-center text-xs">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{formatTime(timeLeft)}</span>
              </div>
              <span>Hora de inicio: 09:00 25/01</span>
            </div>
          </Card>
        </div>

        <h2 className="text-lg font-bold mt-6">Apuestas destacadas</h2>
        {[...Array(3)].map((_, index) => (
          <Card key={index} className="p-4 space-y-4">
            <div className="flex justify-between">
              <div>
                <span className="text-sm">Apuesta</span>
                <p className="font-bold">{(Math.random() * (100000 - 50000) + 50000).toFixed(2)}</p>
              </div>
              <div>
                <span className="text-sm">Beneficio</span>
                <p className="text-green-500 font-bold">{(Math.random() * (5000 - 1000) + 1000).toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span>Número de apuesta:</span>
              <span className="text-[#40E0D0] ml-2">#{Math.floor(100000000000 + Math.random() * 900000000000)}</span>
              <Copy className="w-4 h-4 mx-3" />
            </div>
            <div className="text-center">
              <Link href="/pagos">
                <Button className="w-full">Apostar</Button>
              </Link>
            </div>
          </Card>
        ))}

      </main>

      <BottomNavigation />
    </div>
  );
}