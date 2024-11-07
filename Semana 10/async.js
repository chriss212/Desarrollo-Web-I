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
    numeros = await addToArray(4, numeros)
    console.log(numeros)
}

call()