import { useNavigate } from "react-router-dom";
import useMeses from "../../Hooks/useMeses";
import styles from "../../Styles/Meses/GrillaMeses.module.css";

function GrillaMeses() {
  const { meses, loading, error } = useMeses();
  const navigate = useNavigate();

  if (loading) return <p>Cargando meses...</p>;
  if (error) return <p>Error: {error}</p>;

  const mostrarRegistros = (mes: string) => {
    navigate("/registros/" + mes);
  }

  return (
    <>
      <h1 className={styles.h1}>2025</h1>
      <div className={styles.grillaMeses}>
        {meses.map((mes) => (
          <div onClick={() => { mostrarRegistros(mes.descripcion) }} className={styles.tarjetaMes} key={mes.idmes}>
            <p>{mes.descripcion}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default GrillaMeses;
