import { useState } from "react";

function FormularioUsuario({ onUsuarioCreado }) {
  const [formulario, setFormulario] = useState({
    nombre: "",
    ciudad: "",
    edad: "",
    email: ""
  });

  const [enviando, setEnviando] = useState(false);

  function manejarCambio(e) {
    const { name, value } = e.target;
    setFormulario(prev => ({ ...prev, [name]: value }));
  }

  async function manejarEnvio(e) {
    e.preventDefault(); // evita que el navegador recargue la página

    setEnviando(true);

    const respuesta = await fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: formulario.nombre,
        ciudad: formulario.ciudad,
        edad: Number(formulario.edad),
        email: formulario.email || null
      })
    });

    const nuevoUsuario = await respuesta.json();

    setEnviando(false);
    setFormulario({ nombre: "", ciudad: "", edad: "", email: "" }); // limpia el form

    onUsuarioCreado(nuevoUsuario); // avisa al padre que hay un usuario nuevo
  }

  return (
    <form onSubmit={manejarEnvio}>
      <input
        name="nombre"
        placeholder="Nombre"
        value={formulario.nombre}
        onChange={manejarCambio}
        required
      />
      <input
        name="ciudad"
        placeholder="Ciudad"
        value={formulario.ciudad}
        onChange={manejarCambio}
        required
      />
      <input
        name="edad"
        type="number"
        placeholder="Edad"
        value={formulario.edad}
        onChange={manejarCambio}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email (opcional)"
        value={formulario.email}
        onChange={manejarCambio}
      />
      <button type="submit" disabled={enviando}>
        {enviando ? "Guardando..." : "Agregar usuario"}
      </button>
    </form>
  );
}

export default FormularioUsuario;