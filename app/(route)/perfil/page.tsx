import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Home,
  Crown,
  Calendar,
  Building2,
  Users,
  User,
  HelpCircle,
  Info,
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BottomNavigation from "@/components/bottom-navigation";
import UserProfile from "@/components/UserProfile"; // Importar el nuevo componente

const menuItems = [
  { icon: Home, label: "página delantera", href: "/" },
  { icon: Crown, label: "VIP", href: "/notavailable" },
  { icon: Calendar, label: "Centro de Eventos", href: "/notavailable" },
  { icon: Building2, label: "Centro de agencia", href: "/notavailable" },
  { icon: Users, label: "salón de eventos", href: "/notavailable" },
  { icon: User, label: "mi cuenta", href: "/notavailable", hasSubmenu: true },
  { icon: HelpCircle, label: "Centro de ayuda", href: "/notavailable" },
  { icon: Info, label: "Sobre ATB", href: "/notavailable" },
];

export default function PerfilPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <header className="bg-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="SwiftStake Logo"
            width={150}
            height={40}
            className="rounded-full"
          />
        
        </div>
        
      </header>

      <main className="p-4 space-y-4">
        {/* User Profile Card */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-blue-400 to-blue-600 text-white p-6">
          <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-300 rounded-full blur-3xl opacity-50" />
          <div className="relative z-10">
            <UserProfile />{" "}
            {/* Se reemplaza la sección del nombre por el componente cliente */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <div className="p-4">
                <div className="text-sm text-white/80 mb-1">
                  Saldo disponible
                </div>
                <div className="text-2xl font-bold mb-4">0.00</div>
                <div className="grid grid-cols-2 gap-2">
                  <Button className="bg-white/20 hover:bg-white/30 text-white">
                    completar
                  </Button>
                  <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 text-white border-none">
                    retirar
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-xl shadow-sm">
          {menuItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center justify-between p-4 ${
                index !== menuItems.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-gray-500" />
                <span className="text-gray-700">{item.label}</span>
              </div>
              {item.hasSubmenu && (
                <ChevronRight className="w-5 h-5 text-gray-400" />
              )}
            </Link>
          ))}
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}
