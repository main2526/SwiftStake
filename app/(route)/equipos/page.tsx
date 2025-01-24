import { Card } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import BottomNavigation from "@/components/bottom-navigation"
import { Button } from "@/components/ui/button"

export default function EquiposPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <header className="bg-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-24%20123736-FYGyLXMZ7fNBROc1b68wiqdEiNhSVZ.png"
            alt="ATB Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold">ATB</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 bg-white rounded-full px-4 py-1 shadow">
            <span className="text-gray-800">0.00</span>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Image src="/placeholder.svg" alt="Wallet" width={24} height={24} className="opacity-70" />
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="relative">
            <Image src="/placeholder.svg" alt="Messages" width={24} height={24} className="opacity-70" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              4
            </span>
          </Button>
        </div>
      </header>

      <main className="p-4 space-y-6">
        {/* User Info */}
        <Card className="p-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="font-medium">Hello! Fredd09</h2>
              <p className="text-sm text-gray-500">Team Leader</p>
            </div>
            <span className="text-[#40E0D0]">contrato de agencia</span>
          </div>

          {/* Income Summary */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Los ingresos totales</span>
              <span className="text-sm text-gray-500">Ganancias de ayer</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-[#40E0D0]">-1751311.56</span>
              <span className="text-xl font-bold">0</span>
            </div>
          </div>
        </Card>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 bg-gradient-to-br from-pink-400 to-pink-500 text-white">
            <p className="text-sm mb-2">Reembolso de comisión</p>
            <p className="text-xl font-bold">17522.3</p>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-blue-400 to-blue-500 text-white">
            <p className="text-sm mb-2">Equipo agregado</p>
            <p className="text-xl font-bold">0</p>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-cyan-400 to-blue-500 text-white">
            <p className="text-sm mb-2">Personas recargando</p>
            <p className="text-xl font-bold">0</p>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-green-600 to-green-700 text-white">
            <p className="text-sm mb-2">Primeros depósitos</p>
            <p className="text-xl font-bold">0</p>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-indigo-400 to-purple-500 text-white">
            <p className="text-sm mb-2">Número de personas</p>
            <p className="text-xl font-bold">0</p>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-orange-400 to-orange-500 text-white">
            <p className="text-sm mb-2">Número de apostantes</p>
            <p className="text-xl font-bold">0</p>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-emerald-400 to-emerald-500 text-white">
            <p className="text-sm mb-2">Monto de recarga</p>
            <p className="text-xl font-bold">0</p>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-red-400 to-red-500 text-white">
            <p className="text-sm mb-2">Monto del retiro</p>
            <p className="text-xl font-bold">0</p>
          </Card>
        </div>

        {/* Date Selector */}
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <span>Seleccione fecha</span>
            <Calendar className="w-5 h-5 text-gray-500" />
          </div>
        </Card>

        {/* Team Section */}
        <div className="flex justify-between items-center">
          <h3 className="font-medium">mi equipo</h3>
          <Link href="#" className="text-blue-500 text-sm">
            ver todo
          </Link>
        </div>
      </main>

      <BottomNavigation />
    </div>
  )
}

