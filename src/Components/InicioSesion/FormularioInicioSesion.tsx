import { useNavigate } from "react-router-dom"

function FormularioInicioSesion() {
  const navigate = useNavigate();

  // Si se recarga el componente, entonces que se cierre sesión


  const validarUsuario = (e: React.FormEvent) => {
    e.preventDefault()
    const usuario = (e.target as HTMLFormElement).usuario.value
    const contraseña = (e.target as HTMLFormElement).contraseña.value
    verificarUsuarioDB(usuario, contraseña);
  }

  const verificarUsuarioDB = async (usuario: string, contraseña: string) => {
    try {
      const response = await fetch("http://localhost:3000/usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ usuario, contraseña }),
      });

      // Si el servidor responde con un estado 4xx o 5xx, manejamos el error en el try
      if (!response.ok) {
        const errorMessage = await response.json(); // Asumiendo que el backend responde con JSON
        alert(errorMessage.mensaje || "Usuario o contraseña incorrectos");
        return null; // Retorna null para indicar que la autenticación falló
      }

      // Si la respuesta es exitosa (200 OK)
      const data = await response.json(); // Suponiendo que el backend responde con JSON
      alert("Inicio de sesión exitoso");
      console.log("Respuesta del servidor:", data);
      navigate("/meses"); // Redirigir a la página principal
      return data;
    } catch (error) {
      // Solo entra aquí si hay un error de conexión o de red
      alert("Ocurrió un error al conectar con el servidor");
      console.error("Error en la conexión:", error);
      return null;
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={validarUsuario}>
        <label htmlFor="usuario">Usuario</label>
        <input type="usuario" id="usuario" name="usuario" />
        <label htmlFor="contraseña">Contraseña</label>
        <input type="password" id="contraseña" name="contraseña" />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  )
}

export default FormularioInicioSesion