function addToArrayWithPromises(data, array) {
const promise = new Promise ((resolve, reject) => {
    if (!Array.isArray(array)) {
        reject(new Error("El segudno parametro no es un arreglo", message))
    } else {
        setTimeout(() => {
            array.push(data);
            resolve(array)

        }, 3000)
    }
})
    return promise
}

function multiplyBy2(array) {
    return array.map(x => x*2)
}


let numeros = [1, 2, 3]
addToArrayWithPromises(4, numeros)
.then()
.then(multiplyBy2)
.then(result => console.log(result))
.catch(error => console.log(error.message))