"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";
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

import "swiper/css";
import "swiper/css/navigation";

export default function Page() {
  const [timeLeft, setTimeLeft] = useState(0);
  const { signOut } = useClerk();
  const { isSignedIn } = useAuth();
  const router = useRouter();

  // Redirigir si el usuario ya está autenticado
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

  const images = [
    { src: "/Carrousel.jpg", alt: "Imagen 1" },
    { src: "/Carrousel2.jpg", alt: "Imagen 2" },
    { src: "/Carrousel3.jpg", alt: "Imagen 3" },
    { src: "/Carrousel4.jpg", alt: "Imagen 4" },
  ];

  return (
    <div className="bg-gray-50 pb-16">
      <header className="bg-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="ATB Logo"
            width={150}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="flex gap-2">
          <SignedOut>
            <SignInButton>
              <div className="bg-[#40E0D0] hover:bg-[#3BC9BB] text-black text-xs">
                <Button>INICIAR SESIÓN</Button>
              </div>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
            <Button
              className="bg-red-500 hover:bg-red-600 text-white text-xs"
              onClick={() => signOut()}
            >
              CERRAR SESIÓN X
            </Button>
          </SignedIn>
        </div>
      </header>

      <main className="container mx-auto p-4 space-y-6">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 6000 }}
          loop
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image src={image.src} alt={image.alt} width={800} height={400} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <h2 className="text-lg font-bold">Eventos populares</h2>
            </div>
            <Button variant="link" className="text-blue-500 text-sm">
              Más eventos
            </Button>
          </div>

          <Card className="p-2">
            <div className="bg-[#4B0082] text-white p-2 rounded-t-lg flex justify-between items-center text-xs">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{formatTime(timeLeft)}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>Hora de inicio:</span>
                <span>09:00 25/01</span>
              </div>
            </div>
          </Card>

          <Button variant="outline" className="w-full mt-4 text-sm">
            Todos los eventos
          </Button>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}
