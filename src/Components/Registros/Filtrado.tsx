import useFiltrado from "../../Hooks/useFiltrado"

function Filtrado() {

  const { tiposRegistros, categorias, loading, error } = useFiltrado()
  if (loading) return <p>Cargando meses...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <p>Filtrar</p>

      {/* Input con opciones para seleccionar: Ingreso, Egreso */}
      <div>
        <div>
          <label htmlFor="filtrarPorTipoRegistro">Tipo de registro</label>
          <select id="filtrarPorTipoRegistro">
            <option value="todos">Todos</option>
            {tiposRegistros.map((tipo) => (
              <option key={tipo.idtipoRegistro} value={tipo.idtipoRegistro}>{tipo.descripcion}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="filtrarPorCategoria">Categoría</label>
          <select id="filtrarPorCategoria">
            <option value="todos">Todos</option>
            {categorias.map((categoria) => (
              <option key={categoria.idcategoria} value={categoria.idcategoria}>{categoria.descripcion}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Filtrado