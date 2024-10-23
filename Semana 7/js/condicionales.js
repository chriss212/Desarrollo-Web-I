let edad = 18;
if (edad) {
    console.log("TRUE")
}
else {
    console.log("False")
}

let isMayor = (edad>=18)
console.log(isMayor)

let numero = 0
let tipoNumero = (numero>0) ? "Positivo":(numero < 0) ? "Negativo": "Neutro";
console.log(tipoNumero)

let x = 1
while (x < 10){
    console.log(x)
    x++;
}