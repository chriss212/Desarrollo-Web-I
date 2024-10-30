function Persona(_nombre, _apellido, _edad) {
    this.nombre = _nombre,
    this.apellido = _apellido,
    this.edad = _edad,
    this.saludar = function() {
        console.log(`Hola mi nombre es ${this.nombre}`)
    }
}

const persona1 = new Persona("guillermo", "calderon", 15)
const persona2 = new Persona("laura", "caceres", 35)

Persona.prototype.saludar=function() {
    console.log(`Hola mi nombre es ${this.nombre}`)
}

persona1.saludar()
persona2.saludar()

console.log(persona1)