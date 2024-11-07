async function addToArray(data, array) {
    if (!Array.isArray(array)) {
        throw Error("El segudno parametro no es un arreglo")
    } else {
        setTimeout(() => {
            array.push(data);
            return array

        }, 3000)
    }
}


async function multiplyBy2(array) {
    return array.map(x => x*2)
}

async function call() {
    let numeros = [1, 2, 3]
    await addToArray(numeros, 4)
    console.log(numeros)
}