"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-xl font-bold text-green-500">✅ Pago exitoso</h1>
      <Button className="mt-4" onClick={() => router.push("/")}>
        Volver al inicio
      </Button>
    </div>
  );
}
