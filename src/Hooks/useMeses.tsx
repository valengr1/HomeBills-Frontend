import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Mes {
  idaño_mes: number;
  idmes: number;
  descripcion: string;
}

const useMeses = () => {

  const navigate = useNavigate();
  const [meses, setMeses] = useState<Mes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMeses = async () => {
      try {
        const response = await fetch("http://localhost:3000/meses", {
          method: "GET",
          credentials: "include", // ✅ Necesario para enviar la cookie de sesión
        });

        if (response.status === 401) {
          alert("Tu sesión ha expirado. Inicia sesión nuevamente.");
          navigate("/");
        }

        if (!response.ok) {
          throw new Error("Error al obtener los meses");
        }
        const data = await response.json();
        setMeses(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    getMeses();
  }, []);

  return { meses, loading, error };
};

export default useMeses;
