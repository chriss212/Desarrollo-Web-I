const persona1 = {
    nombre: "Christian",
    apellido: "Sánchez",
    edad: 19,
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}`)
    }
}

persona1.saludar()
console.log(persona1)

