"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function StripePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    const res = await fetch("/api/stripe-session", { method: "POST" });
    const { url } = await res.json();
    window.location.href = url; // Redirige a la página de pago de Stripe
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-xl font-bold mb-4">Pagar con Stripe</h1>
      <Button className="w-full max-w-md" onClick={handlePayment} disabled={loading}>
        {loading ? "Redirigiendo..." : "Pagar con Tarjeta"}
      </Button>
      <Button className="mt-4" variant="outline" onClick={() => router.push("/pagos")}>
        Volver
      </Button>
    </div>
  );
}
