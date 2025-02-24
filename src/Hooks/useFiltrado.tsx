import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const useFiltrado = () => {
  interface TipoRegistro {
    idtipoRegistro: number
    descripcion: string
  }

  interface Categoria {
    idcategoria: number
    descripcion: string
  }

  const navigate = useNavigate();
  const [tiposRegistros, setTiposRegistros] = useState<TipoRegistro[]>([])
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getTipoRegistros = async () => {
      try {
        const response = await fetch("http://localhost:3000/registros/tipos", {
          method: "GET",
          credentials: "include", // ✅ Necesario para enviar la cookie de sesión
        })

        if (response.status === 401) {
          alert("Tu sesión ha expirado. Inicia sesión nuevamente.");
          navigate("/");
        }

        if (!response.ok) {
          throw new Error("Error al obtener los tipos de registros")
        }

        const data = await response.json()
        setTiposRegistros(data)
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false)
      }
    }

    const getCategorias = async () => {
      try {
        const response = await fetch("http://localhost:3000/registros/categorias", {
          method: "GET",
          credentials: "include", // ✅ Necesario para enviar la cookie de sesión
        })
        if (response.status === 401) {
          alert("Tu sesión ha expirado. Inicia sesión nuevamente.");
          navigate("/");
        }
        if (!response.ok) {
          throw new Error("Error al obtener las categorias")
        }
        const data = await response.json()
        setCategorias(data)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    getTipoRegistros()
    getCategorias()

  }, [])
  return { tiposRegistros, categorias, loading, error }
}

export default useFiltrado;