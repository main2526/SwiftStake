'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";
import BottomNavigation from "@/components/bottom-navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Page() {
  // Estado para el tiempo restante en segundos
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    // Verificar si hay un tiempo guardado en localStorage
    const storedTime = localStorage.getItem('countdown');
    if (storedTime) {
      setTimeLeft(parseInt(storedTime, 10));
    } else {
      // Inicializar el contador en 24 horas (en segundos)
      setTimeLeft(24 * 60 * 60);
      localStorage.setItem('countdown', 24 * 60 * 60);
    }

    // Configurar el temporizador
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          localStorage.setItem('countdown', 24 * 60 * 60); // Reinicia el contador
          return 24 * 60 * 60; // Reiniciar a 24 horas
        }
        localStorage.setItem('countdown', prevTime - 1);
        return prevTime - 1;
      });
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);

  // Formatear el tiempo restante a horas, minutos y segundos
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs}h ${mins}min ${secs}s`;
  };

  return (
    <div className="bg-gray-50 pb-16">
      {/* Header */}
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
          <Button className="bg-[#40E0D0] hover:bg-[#3BC9BB] text-black text-xs">
            INICIAR SESIÓN
          </Button>
          <Button className="bg-[#6495ED] hover:bg-[#5A87DB] text-xs">
            Registro
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 space-y-6">
        {/* Rewards Banner with Swiper */}
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop={true}
          className="w-full max-w-4xl"
        >
          <SwiperSlide>
            <Image src={'/Carrousel.jpg'} alt="imagex" width={800} height={400} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={'/Carrousel2.jpg'} alt="imagex" width={800} height={400} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={'/Carrousel3.jpg'} alt="imagex" width={800} height={400} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={'/Carrousel4.jpg'} alt="imagex" width={800} height={400} />
          </SwiperSlide>
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

          {/* Match Card */}
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
