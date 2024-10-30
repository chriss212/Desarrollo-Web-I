function validarFicha() {
    const carnet = document.getElementById("carnet").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const dui = document.getElementById("dui").value.trim();
    const nit = document.getElementById("nit").value.trim();
    const fechaNacimiento = document.getElementById("fechaNacimiento").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const edad = document.getElementById("edad").value.trim();

    const regexCarnet = /^[A-Z]{2}\d{3}$/; 
    const regexNombre = /^[a-zA-Z\s]+$/; 
    const regexDUI = /^\d{8}-\d{1}$/; 
    const regexNIT = /^\d{4}-\d{6}-\d{3}-\d{1}$/; 
    const regexFecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/; 
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    let mensaje = "";

    if (!regexCarnet.test(carnet)) {
        mensaje += "Carnet inválido. Debe ser en formato AB001.<br>";
    }
    
    if (!regexNombre.test(nombre) || nombre.length === 0) {
        mensaje += "Nombre inválido. Solo se permiten letras.<br>";
    }
    
    if (!regexDUI.test(dui)) {
        mensaje += "DUI inválido. Debe ser en formato ########-#.<br>";
    }
    
    if (!regexNIT.test(nit)) {
        mensaje += "NIT inválido. Debe ser en formato ####-######-###-#.<br>";
    }
    
    if (!regexFecha.test(fechaNacimiento)) {
        mensaje += "Fecha de nacimiento inválida. Debe ser en formato DD/MM/AAAA.<br>";
    }
    
    if (!regexCorreo.test(correo)) {
        mensaje += "Correo electrónico inválido.<br>";
    }
    
    const edadNumero = parseInt(edad, 10);
    if (isNaN(edadNumero) || edadNumero <= 0) {
        mensaje += "Edad inválida. Debe ser un número positivo.<br>";
    }

    if (mensaje) {
        document.getElementById("mensaje").innerHTML = "<div style='color:red;'>" + mensaje + "</div>";
        return false; 
    }

    document.getElementById("mensaje").innerHTML = "<div style='color:green;'>Formulario enviado correctamente.</div>";
    return true; 
}
