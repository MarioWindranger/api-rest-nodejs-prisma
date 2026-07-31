function TarjetaUsuario({nombre, ciudad, edad, email}) {
    return (
        <div style = {{ border: '1px solid #ccc', borderRadius: '8px', padding: '12px', marginBottom: '8px' }}> 
            <h3>{nombre}</h3>
            <p> Ciudad: {ciudad}</p>
            <p> Edad: {edad}</p>
            <p> Email: {email || "Sin email registrado"}</p>

        </div>
    );
} 
export default TarjetaUsuario;