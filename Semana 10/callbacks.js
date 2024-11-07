const operacion = (numero1, numero2, op) => {
    setTimeout(()=> {
        return op(numero1, numero2)
    }, 3000)
}

function multiplicar(num1, num2) {
    console.log(num1 * num2)
    return num1 * num2
}

console.log(operacion(10, 3, (num1, num2) => num1 + num2))
console.log(operacion(10, 3, (num1, num2) => num1 - num2))
console.log(operacion(10, 3, multiplicar))
console.log("Prueba")




function addToArray(data, array, callback) {
    if(!Array.isArray(array)){
        callback(new Error("El segundo parametro no es un arreglo"), null)
    } else {
        setTimeout(() => {
            array.push(data)
            callback(null, `${array} exito`)
        }, 3000)
    }
}


let numeros = [1, 2, 3]
addToArray(4, numeros, (error, success) => {
    if (error) {
        console.log(error.message)
    }
    else {
        console.log(`Arreglo actualizado: ${success}`)
    }
})

console.log(numeros)