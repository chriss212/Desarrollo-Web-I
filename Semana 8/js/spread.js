// clonar arreglos

const numeros = [1, 2, 3, 4, 5, 6]

const copia = [...numeros]

copia[0] = 100

console.log(numeros)
console.log(copia)

// concatenar arreglos

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const combinedArray = [...array1,...array2]

console.log(combinedArray)


// extender objetos

const persona = {nombre: "Christian", apellido: "Sánchez"}
const empleado = {...persona, carnet: 20235787}

console.log(empleado)