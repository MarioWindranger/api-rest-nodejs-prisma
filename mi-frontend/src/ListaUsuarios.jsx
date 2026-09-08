import { useState, useEffect } from "react";
import TarjetaUsuario from "./TarjetaUsuario";
import FormularioUsuario from "./formulario";
import { API_URL } from "./config";

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCargando(true);

    fetch(`${API_URL}/usuarios?pagina=${pagina}`)
      .then(res => {
        if (!res.ok) throw new Error("Error al obtener usuarios");
        return res.json();
      })
      .then(data => {
        setUsuarios(prev => pagina === 1 ? data : [...prev, ...data]);
        setCargando(false);
      })
      .catch(err => {
        setError(err.message);
        setCargando(false);
      });
  }, [pagina]);

  function agregarUsuarioALaLista(nuevoUsuario) {
    setUsuarios(prev => [nuevoUsuario, ...prev])
  }

  if (error) return <p>Ocurrió un error: {error}</p>;

  return (
    <div>
      <h2>Usuarios</h2>

      <FormularioUsuario onUsuarioCreado = { agregarUsuarioALaLista } /> 

      {usuarios.map(usuario => (
        <TarjetaUsuario
          key={usuario.id}
          nombre={usuario.nombre}
          ciudad={usuario.ciudad}
          edad={usuario.edad}
          email={usuario.email}
        />
      ))}

      {cargando && <p>Cargando...</p>}

      <button onClick={() => setPagina(pagina + 1)} disabled={cargando}>
        Cargar más
      </button>
    </div>
  );
}

export default ListaUsuarios;