"use client";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function PayPalPage() {
  const router = useRouter();
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  return (
    <PayPalScriptProvider options={{ "client-id": "AWnU2vMsWJunheeBu-bX9ulV9ZCm9YGupyK24El1BV2pbgzSuYGN7dyt9aURl42DBwNbFbzdQT7KGy-R" }}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <h1 className="text-xl font-bold mb-4">Pago con PayPal</h1>
        <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg text-center">
          {!paymentCompleted ? (
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: "9.99", // Monto de la apuesta
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  alert(`Pago completado por ${details.payer.name.given_name}`);
                  setPaymentCompleted(true);
                });
              }}
            />
          ) : (
            <div>
              <p className="text-green-500 font-bold">Pago exitoso 🎉</p>
              <Button className="mt-4" onClick={() => router.push("/")}>
                Volver al inicio
              </Button>
            </div>
          )}
        </div>
      </div>
    </PayPalScriptProvider>
  );
}
