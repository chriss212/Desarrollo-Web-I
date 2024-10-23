function ingresarDatos() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    // let edad = parseInt(document.getElementById("edad").value);
    let fechaNacimiento = new Date(document.getElementById("fecha_nacimiento").value);
    let ahora = new Date()
    let edad = ahora.getFullYear() - fechaNacimiento.getFullYear()

    let mensaje = `Hola ${nombre} ${apellido} tienes ${edad} años`

    document.getElementById("contenido").innerText = mensaje
    alert(mensaje)


}    