function calcularDistanciaOrigen(x, y) {
    return Math.sqrt(x**2 + y**2)
}

console.log(calcularDistanciaOrigen(5,5))

const calcularDistanciaEntrePuntos = (x1, y1, x2, y2) => Math.sqrt((x2-x1)**2 + (y2-y1)**2)

console.log(calcularDistanciaEntrePuntos(5, 5, 0, 0))

function calcularEcuacionPuntoPendiente(x, y, m) {
    let terminoIndependiente = m*x + y
    return `y = ${m}x + ${terminoIndependiente}`
}

console.log(calcularEcuacionPuntoPendiente(2, 4, 2))

function sumar(...numeros) {
    let resultado = 0
    for (num of numeros) {
        resultado += num
    }
    return resultado
}

console.log(sumar(5, 6, 7))

// método map

const pares = [2, 4, 6, 8, 10, 12]
const cuadrados = pares.map(x=>x**2)
console.log(cuadrados)

// método filter

const multiplos5 = pares.filter(x => x % 5 === 0)
console.log(multiplos5)

