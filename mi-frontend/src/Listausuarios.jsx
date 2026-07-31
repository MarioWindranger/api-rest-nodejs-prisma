import { useState, useEffect } from "react";
import TarjetaUsuario from "./Tarjetausuario";

function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setCargando(true);

        fetch(`http://localhost:3000/usuarios?pagina=${pagina}`)
            .then(res => {
                if(!res.ok) throw new Error ("Error al obtener usuarios"); // el throw new manda el error al catch
                return res.json();
            })
            .then(data => {
                setUsuarios(prev => pagina === 1 ? data : [...prev, ...data]); // "el valor que tenía el estado usuarios justo 
                // antes de esta actualización".
                setCargando(false);
            })
            .catch(err => {
                setError(err.message);
                setCargando(false);
            });
        }, [pagina]);

        if (error) return <p>Ocurrió un error: {error}</p>; /* Si este return se cumple entonces aqui termina el renderizado 
        del componente. Cuando una función o componente ejecuta un return, la función termina inmediatamente. */

        return (
            <div>
                <h2> Usuarios </h2>

                {usuarios.map(usuario => ( // a cada elemento del arreglo usuarios, agregale TarjetaUsuario con esos atributos.
                    <TarjetaUsuario
                        key={usuario.id} /* React necesita una clave única para identificar cada elemento de una lista. Así, 
                        cuando la lista cambia (por ejemplo, al cargar más usuarios), React puede saber qué elementos ya existían 
                        y cuáles son nuevos, actualizando el DOM de forma eficiente. */
                        nombre={usuario.nombre}
                        ciudad={usuario.ciudad}
                        edad={usuario.edad}
                        email={usuario.email}
                    />
                ))}

                {cargando && <p> Cargando... </p>}

                <button onClick={() => setPagina(pagina + 1)} disabled = {cargando}> 
                    Cargar más usuarios
                </button>

            </div>
        );
}

export default ListaUsuarios

