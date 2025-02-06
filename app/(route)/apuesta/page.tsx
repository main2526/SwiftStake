"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, ChevronDown, Copy } from "lucide-react";
import Image from "next/image";
import BottomNavigation from "@/components/bottom-navigation";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export default function MiApuestaPage() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("todo");

  const teamImages: Record<string, string> = {
    "Al-Khaleej": "/al-khaleej.png",
    "Al-Orubah": "/al-orubah.png",
    "Manchester United": "/manchester-united.png",
    Liverpool: "/liverpool.png",
    "Real Madrid": "/real-madrid.png",
    Barcelona: "/barcelona.png",
    Juventus: "/juventus.png",
    "AC Milan": "/ac-milan.png",
    Chelsea: "/chelsea.png",
    Arsenal: "/arsenal.png",
    "Plymouth Argyle": "/plymouth-argyle.png",
    "Queens Park Rangers": "/qpr.png",
  };

  const teamList = [
    { home: "Al-Khaleej", away: "Al-Orubah" },
    { home: "Manchester United", away: "Liverpool" },
    { home: "Real Madrid", away: "Barcelona" },
    { home: "Juventus", away: "AC Milan" },
    { home: "Chelsea", away: "Arsenal" },
    { home: "Plymouth Argyle", away: "Queens Park Rangers" },
  ];

  // Generar valores aleatorios para cada apuesta
  const generateRandomBets = () =>
    teamList.map((bet) => ({
      ...bet,
      amount: (Math.random() * (100000 - 50000) + 50000).toFixed(2), // Apuesta entre 50,000 y 100,000
      profit: (Math.random() * (5000 - 1000) + 1000).toFixed(2), // Beneficio entre 1,000 y 5,000
      betNumber: `#${Math.floor(100000000000 + Math.random() * 900000000000)}`, // Número de apuesta aleatorio
      discountTime: Math.floor(Math.random() * 3600) + 1800, // Descuento entre 30 min y 1 hora
    }));

  const [bets, setBets] = useState(generateRandomBets());

  // Filtrar apuestas según el estado
  const filteredBets = bets.filter((bet) => {
    if (filter === "todo") return true;
    if (filter === "en-curso") return Date.now() % 2 === 0;
    if (filter === "finalizado") return Date.now() % 2 !== 0;
    return true;
  });

  // Formato de tiempo
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${minutes}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <header className="bg-white p-4 flex items-center justify-between">
        <Image src="/logo.png" alt="Swift Logo" width={150} height={40} className="rounded-full" />
      </header>

      <main className="p-4 space-y-4">
        {/* Filters */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1 justify-between"
            onClick={() => setSelectedDate(new Date().toLocaleDateString())}
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-gray-500">{selectedDate || "Seleccione fecha"}</span>
            </div>
            <ChevronDown className="w-4 h-4" />
          </Button>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Filtrar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todo">Todo</SelectItem>
              <SelectItem value="en-curso">En curso</SelectItem>
              <SelectItem value="finalizado">Finalizado</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <h2 className="font-medium">Lista de apuestas</h2>

        {/* Mostrar apuestas */}
        {filteredBets.map((bet, index) => (
          <Card key={index} className="p-4 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex gap-4 text-sm">
                  <span>Apuesta</span>
                  <span>Beneficio estimado</span>
                </div>
                <div className="flex gap-8 font-bold">
                  <span>{bet.amount}</span>
                  <span className="text-green-500">{bet.profit}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Número de apuesta</span>
              <span className="text-[#40E0D0]">{bet.betNumber}</span>
              <Copy className="w-4 h-4 mx-3" />
            </div>

            <div>
              <div className="text-sm">Contenido de apuestas</div>
              <Card className="mt-2 p-3 bg-blue-100 rounded-lg">
                <div className="flex items-center gap-2">
                  <span>⚽</span>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={teamImages[bet.home] || "/default.png"}
                      alt={bet.home}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span className="text-sm">
                      {bet.home} VS {bet.away}
                    </span>
                    <Image
                      src={teamImages[bet.away] || "/default.png"}
                      alt={bet.away}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                  <span>Descuento limitado 50% {formatTime(bet.discountTime)}</span>
                </div>
                <div className="flex justify-center gap-8 mt-2 text-sm">
                  <div className="w-full">
                    <Link href={"/pagos"}>
                      <Button className="w-full">Apostar</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </Card>
        ))}
      </main>

      <BottomNavigation />
    </div>
  );
}
