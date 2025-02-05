import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function CancelPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-xl font-bold text-red-500">❌ Pago cancelado</h1>
      <Button className="mt-4" onClick={() => router.push("/pagos")}>
        Volver a pagos
      </Button>
    </div>
  );
}
