const pares = [2, 4, 6, 8, 10, 12]
const cuadrados = pares.map(x=>x**2)
console.log(cuadrados)

// método filter

const multiplos5 = pares.filter(x => x%5 === 0)
console.log(multiplos5)