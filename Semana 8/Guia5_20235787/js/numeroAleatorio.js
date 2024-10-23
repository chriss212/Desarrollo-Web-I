const numeroAleatorio = Math.floor(Math.random() * 25) + 1

const numeroIntentos = 3

let intentos = 1

function generarNumeroAleatorio() {
    let mensaje
    const parrafo = document.querySelector("#idParrafo")

    if (intentos <= numeroIntentos) {
        let numero = prompt("¿Qué número se ha generado (Intento " + intentos + ")?")

    if (numero == numeroAleatorio) {
        mensaje = `¡Es sorprendente, pudiste adivinar el número oculto (${numeroAleatorio}). Refresque la página para volver a jugar.`
    } else if (intentos == numeroIntentos) {
        mensaje = `Su número de intentos ha terminado. El número oculto era: ${numeroAleatorio}. Refresque la página para volver a jugar.`
    } else {
        if (numero < numeroAleatorio) {
            mensaje = `El número es más alto. Vuelve a intentar. Te quedan ${numeroIntentos - intentos} intentos.`
        } else {
            mensaje = `El numero es más bajo. Vuelve a intentar. Te quedan ${numeroIntentos - intentos} intentos.`
        }
    }
    intentos++
    }   parrafo.innerHTML = mensaje
}
  
    // } else { mensaje = `Vuelve a intentar. Quedan ${numeroIntentos - intentos} intentos.`
    // }