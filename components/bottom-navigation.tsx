"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, AlignEndHorizontal, User } from "lucide-react";
import { useUser } from "@clerk/clerk-react"; // Importar el hook de Clerk

const navItems = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/equipos", label: "Equipos", icon: Users },
  { href: "/apuesta", label: "Apuesta", icon: AlignEndHorizontal },
  { href: "/perfil", label: "Perfil", icon: User },
];

export default function BottomNavigation() {
  const pathname = usePathname();
  const { isLoaded, isSignedIn } = useUser(); // Obtener el estado de autenticación

  // Mostrar una barra de navegación solo si Clerk ha cargado y si el usuario está autenticado
  if (!isLoaded) {
    return <div>Cargando...</div>; // O cualquier otro mensaje de carga
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t">
      <div className="flex justify-around items-center p-2">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = pathname === item.href;

          // Si el usuario no está autenticado, deshabilitar enlaces que no sean de inicio
          const isLinkDisabled = !isSignedIn && item.href !== "/"; // Solo la página de inicio está accesible para los no autenticados

          return (
            <Link
              key={item.href}
              href={isLinkDisabled ? "#" : item.href} // Si no está autenticado, el enlace no va a ninguna parte
              className={`flex flex-col items-center flex-1 ${isActive ? "text-blue-500" : "text-gray-500"} ${isLinkDisabled ? "cursor-not-allowed text-gray-400" : ""}`}
              aria-disabled={isLinkDisabled}
            >
              {isActive && <div className="w-1 h-1 bg-blue-500 mb-1" />}
              <IconComponent className="w-6 h-6" />
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
