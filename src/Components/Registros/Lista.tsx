import useLista from "../../Hooks/useLista"

function Lista() {
  const { registros, loading, error } = useLista()
  if (loading) return <p>Cargando registros...</p>
  if (error) return <p>Error: {error}</p>
  if (registros.length === 0) return <p>No hay registros</p>

  return (
    // Lista de registros
    <div>
      <div>
        <p>Últimos registros</p>
        <p>Mostrar todos</p>
      </div>
      {/* Cards */}
      <div>
        {registros.map((registro) => (
          <div key={registro.idregistro}>
            <div>ícono</div>
            <div>
              <p>{registro.categoria}</p>
              <p>{registro.descripcion}</p>
            </div>
            <div>
              <p>{registro.monto}</p>
              <p>{registro.fecha}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Lista