"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function NotDisponible() {
  const [count, setCount] = useState(6);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (count === 0) {
      router.push("/perfil"); // Redirige a la página principal
    }
  }, [count, router]);

  return (
    <div className="flex justify-center mx-5">
      This section will be available soon. Redirecting in {count} seconds...
    </div>
  );
}

export default NotDisponible;
