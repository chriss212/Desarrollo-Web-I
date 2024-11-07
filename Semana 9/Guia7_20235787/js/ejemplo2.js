const formulario = document.forms["frmRegistro"];
const button = formulario.elements["btnRegistro"];
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});
const bodyModal = document.getElementById("idBodyModal");

const validarFormulario = () => {
    const nombre = formulario["idNombre"].value.trim();
    const apellidos = formulario["idApellidos"].value.trim();
    const fechaNacimiento = new Date(formulario["idFechaNac"].value);
    const correo = formulario["idCorreo"].value.trim();
    const contrasenia = formulario["idPassword"].value.trim();
    const confirmarContrasenia = formulario["idPasswordRepetir"].value.trim();
    const intereses = [
        formulario["idCkProgramacion"].checked,
        formulario["idCkBD"].checked,
        formulario["idCkRedes"].checked,
        formulario["idCkSeguridad"].checked
    ];
    const carrera = formulario.querySelector('input[name="idRdCarrera"]:checked');
    const pais = formulario["idCmPais"].value;

    if (!nombre || !apellidos || !correo || !contrasenia || !confirmarContrasenia || !pais || !carrera) {
        alert("Es necesario completar todos los campos");
        return false;
    }

    const fechaActual = new Date();
    if (fechaNacimiento > fechaActual) {
        alert("La fecha de nacimiento no puede superar a la fecha actual");
        return false;
    }

    const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regexCorreo.test(correo)) {
        alert("El correo electrónico no es válido.");
        return false;
    }

    if (contrasenia !== confirmarContrasenia) {
        alert("Las contraseñas no coinciden");
        return false;
    }

    if (!intereses.some(interest => interest)) {
        alert("Debe seleccionar al menos una opción de interés.");
        return false;
    }

    if (!carrera) {
        alert("Debe seleccionar una carrera.");
        return false;
    }

    if (pais === "Seleccione una opcion") {
        alert("Debe seleccionar un país de origen.");
        return false;
    }

    mostrarDatosModal(nombre, apellidos, fechaNacimiento, correo, intereses, carrera.value, pais);
    return true;
};

const mostrarDatosModal = (nombre, apellidos, fechaNacimiento, correo, intereses, carrera, pais) => {
    const carreraSeleccionada = formulario.querySelector('input[name="idRdCarrera"]:checked').nextElementSibling.innerText;
    const paisSeleccionado = formulario.querySelector(`#idCmPais option:checked`).textContent;

    const tabla = document.createElement("table");
    tabla.classList.add("table");
    tabla.innerHTML = `
        <thead>
            <tr><th>Campo</th><th>Información</th></tr>
        </thead>
        <tbody>
            <tr><td>Nombre</td><td>${nombre}</td></tr>
            <tr><td>Apellidos</td><td>${apellidos}</td></tr>
            <tr><td>Fecha de Nacimiento</td><td>${fechaNacimiento.toLocaleDateString()}</td></tr>
            <tr><td>Correo Electrónico</td><td>${correo}</td></tr>
            <tr><td>Intereses</td><td>${intereses.filter(i => i).map((i, idx) => ['Programacion', 'Base de Datos', 'Inteligencia Artificial', 'Seguridad Informática'][idx]).join(", ")}</td></tr>
            <tr><td>Carrera</td><td>${carreraSeleccionada}</td></tr>
            <tr><td>País de Origen</td><td>${paisSeleccionado}</td></tr>
        </tbody>
    `;
    
    bodyModal.innerHTML = '';
    bodyModal.appendChild(tabla);
    modal.show();
};

button.onclick = () => {
    if (validarFormulario()) {
    }
};



/* const recorrerFormulario = function () {
    let totText = 0;
    let totRadio = 0;
    let totCheck = 0;
    let totDate = 0;
    let totSelect = 0;
    let totFile = 0;
    let totPass = 0;
    let totEmail = 0;
  
    let elementos = formulario.elements;
    let totalElementos = elementos.length;
  
    for (let index = 0; index < totalElementos; index++) {
        let elemento = elementos[index];

        let tipoElemento = elemento.type;
  
        let tipoNode = elemento.nodeName;

        if (tipoElemento == "text" && tipoNode == "INPUT") {
            console.log(elemento);
            totText++;
        } else if (tipoElemento == "password" && tipoNode == "INPUT") {
            console.log(elemento);
            totPass++;
        } else if (tipoElemento == "email" && tipoNode == "INPUT") {
            console.log(elemento);
            totEmail++;
        } else if (tipoElemento == "radio" && tipoNode == "INPUT") {
            console.log(elemento);
            totRadio++;
        } else if (tipoElemento == "checkbox" && tipoNode == "INPUT") {
            console.log(elemento);
            totCheck++;
        } else if (tipoElemento == "file" && tipoNode == "INPUT") {
            console.log(elemento);
            totFile++;
        } else if (tipoElemento == "date" && tipoNode == "INPUT") {
            console.log(elemento);
            totDate++;
        } else if (tipoNode == "SELECT") {
            console.log(elemento);
            totSelect++;
        }
    }

    let resultado = `
    Total de input[type="text"] = ${totText}<br>
    Total de input[type="password"] = ${totPass}<br>
    Total de input[type="radio"] =${totRadio}<br>
    Total de input[type="checkbox"] = ${totCheck}<br>
    Total de input[type="date"] = ${totDate}<br>
    Total de input[type="email"] = ${totEmail}<br>
    Total de select = ${totSelect}<br>
    `;

    bodyModal.innerHTML = resultado;
    modal.show();

};

button.onclick = () => {
    recorrerFormulario();
}; */