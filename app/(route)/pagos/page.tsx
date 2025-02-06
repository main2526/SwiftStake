import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PagosPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-xl font-bold mb-4">Selecciona un método de pago</h1>
      <div>

      </div>
      <Card className="p-6 space-y-4 w-full max-w-md mb-2 text-center">
        <Link href="/pagos/paypal">
          <Button className="w-full">PayPal</Button>
        </Link>
      </Card>
  
      <Card className="p-6 space-y-4 w-full  max-w-md text-center">
        <Link href="/pagos" className="cursor-not-allowed">
          <Button disabled className="w-full cursor-not-allowed">Stripe (Tarjeta de crédito) proximamente...</Button>
        </Link>
      </Card>

      <Card className="p-6 space-y-4  my-2 w-full max-w-md text-center">
        <Link href="/apuesta" >
          <Button  variant="destructive" className="w-full"> Pagina de Apuestas </Button>
        </Link>
      </Card>
    </div>
  );
}
