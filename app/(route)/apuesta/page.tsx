import { Card } from "@/components/ui/card"
import { Calendar, ChevronDown, Copy } from "lucide-react"
import Image from "next/image"
import BottomNavigation from "@/components/bottom-navigation"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MiApuestaPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <header className="bg-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Swift Logo"
            width={150}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 bg-white rounded-full px-4 py-1 shadow border">
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

      <main className="p-4 space-y-4">
        {/* Filters */}
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-gray-500">Seleccione fecha</span>
            </div>
            <ChevronDown className="w-4 h-4" />
          </Button>
          <Select defaultValue="todo">
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Filtrar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todo">todo</SelectItem>
              <SelectItem value="en-curso">en curso</SelectItem>
              <SelectItem value="finalizado">finalizado</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <h2 className="font-medium">Lista de apuestas</h2>

        {/* Active Bet Card */}
        <Card className="p-4 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex gap-4 text-sm">
                <span>Apuesta</span>
                <span>Beneficio estimado</span>
              </div>
              <div className="flex gap-8 font-bold">
                <span>77,441.81</span>
                <span className="text-green-500">1,898.10</span>
              </div>
            </div>
            <span className="text-[#40E0D0] flex items-center gap-1">
              <span className="w-4 h-4 rounded-full border-2 border-[#40E0D0] flex items-center justify-center">
                ⌛
              </span>
              en curso
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 ">
            <span>Número de apuesta</span>
            <span className="text-[#40E0D0] ">#202501171425481619S</span>
            <Copy className="w-4 h-4 mx-3" />
          </div>

          <div>
            <div className="text-sm">Contenido de apuestas</div>
            <Card className="mt-2 p-3 bg-blue-100 rounded-lg">
              <div className="flex items-center gap-2">
                <span>⚽</span>
                <span className="text-sm">Plymouth Argyle VS Queens Park Rangers</span>
              </div>
              <div className="flex gap-8 mt-2 text-sm">
                <div>
                  <span className="text-gray-500">puntaje</span>
                  <p>3-1</p>
                </div>
                <div>
                  <span className="text-gray-500">Impares</span>
                  <p>2.58%</p>
                </div>
                <div>
                  <span className="text-gray-500">estado</span>
                  <p>en curso</p>
                </div>
              </div>
            </Card>
          </div>
        </Card>

        {/* Lost Bet Card */}
        <Card className="p-4 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex gap-4 text-sm">
                <span>Apuesta</span>
                <span>beneficio real</span>
              </div>
              <div className="flex gap-8 font-bold">
                <span>77,441.81</span>
                <span>1,861.32</span>
              </div>
            </div>
            <span className="text-purple-500 flex items-center gap-1">
              <span className="w-4 h-4 rounded-full border-2 border-purple-500 flex items-center justify-center">
                ✓
              </span>
              Establecido
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-gray-500">
              <span>Número de apuesta</span>
              <span className="text-[#40E0D0]">#202501161512478113S</span>
              <Copy className="w-4 h-4" />
            </div>
            <span className="text-red-500 mx-2">perder</span>
          </div>

          <div>
            <div className="text-sm">Contenido de apuestas</div>
            <Card className="mt-2 p-3 bg-blue-100 rounded-lg">
              <div className="flex items-center gap-2">
                <span>⚽</span>
                <span className="text-sm">Al-Khaleej VS Al-Orubah</span>
              </div>
              <div className="flex gap-8 mt-2 text-sm">
                <div>
                  <span className="text-gray-500">puntaje</span>
                  <p>-</p>
                </div>
                <div>
                  <span className="text-gray-500">Impares</span>
                  <p>-</p>
                </div>
                <div>
                  <span className="text-gray-500">estado</span>
                  <p>perder</p>
                </div>
              </div>
            </Card>
          </div>
        </Card>
      </main>

      <BottomNavigation />
    </div>
  )
}

