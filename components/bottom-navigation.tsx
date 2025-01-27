"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, Menu, User } from "lucide-react"

const navItems = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/equipos", label: "Equipos", icon: Users },
  { href: "/apuesta", label: "Menú", icon: Menu },
  { href: "/perfil", label: "Perfil", icon: User },
]

export default function BottomNavigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t">
      <div className="flex justify-around items-center p-2">
        {navItems.map((item) => {
          const IconComponent = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center flex-1 ${isActive ? "text-blue-500" : "text-gray-500"}`}
            >
              {isActive && <div className="w-1 h-1 bg-blue-500 mb-1" />}
              <IconComponent className="w-6 h-6" />
              <span className="text-xs">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

