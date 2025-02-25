import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useLista = () => {
  interface Registro {
    idregistro: number
    categoria: string
    descripcion: string
    monto: number
    fecha: string
    tiporegistro: string
  }

  const [registros, setRegistros] = useState<Registro[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const location = useLocation();
  const idaño_mes = location.pathname.split("/")[2];

  useEffect(() => {
    const getRegistros = async () => {
      try {
        const response = await fetch("http://localhost:3000/registros/" + idaño_mes);
        if (!response.ok) {
          throw new Error("Error al obtener los registros")
        }
        const data = await response.json()
        setRegistros(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false)
      }
    }
    getRegistros()
  }, [])


  return { registros, loading, error };
}

export default useLista;