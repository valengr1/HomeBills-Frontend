import { useEffect } from "react";
import { useNavigate, useLocation, NavigateFunction } from "react-router-dom";

const usePreventBackNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleBackButton = (event: PopStateEvent) => {
      if (location.pathname === "/meses") {
        event.preventDefault(); // Evita el retroceso

        const confirmLogout = window.confirm(
          "Si vuelves atrás, se cerrará tu sesión. ¿Deseas continuar?"
        );

        if (confirmLogout) {
          cerrarSesion(navigate);
        } else {
          window.history.pushState(null, "", window.location.href); // Mantiene la ruta actual
        }
      }
    };

    if (location.pathname === "/meses") {
      // Solo agrega una nueva entrada en el historial cuando estamos en /meses
      window.history.pushState(null, "", window.location.href);
      window.addEventListener("popstate", handleBackButton);
    }

    return () => {
      // Elimina el evento solo si estaba en /meses
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [location, navigate]);
};

const cerrarSesion = async (navigate: NavigateFunction) => {
  try {
    const response = await fetch("http://localhost:3000/usuarios/logout", {
      method: "POST",
      credentials: "include",
    });

    if (response.ok) {
      alert("Sesión cerrada");
      navigate("/", { replace: true });
    }
  } catch (error) {
    console.error("Error cerrando sesión:", error);
  }
};

export default usePreventBackNavigation;
