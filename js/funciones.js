//Simulador de plazo fijo
let deseo = null
while (deseo === null) { // Mientras deseo sea un valor nulo que se ejecute el siguiente while
    let deposito = parseInt(prompt('¿Cuanto deseas depositar?'))
    while (isNaN(deposito)) {
        deposito = parseInt(prompt('El valor ingresado es incorrecto, ingresa el monto a depositar'))
    }//Si el valor ingresado no es un número o esta en blanco que avise: "El valor ingresado..."

    let dias = parseInt(prompt('Elije a cuantos dias: 30, 60 o 90'))
    while (isNaN(dias) || dias != 30 && dias != 60 && dias != 90) {
        dias = parseInt(prompt('Valor incorrecto, el plazo en dias ingresado debe ser: 30, 60 o 90'))
    }// Si el valor ingresado no es un número o esta en blanco y ademas, si el valor es diferente a 30, 60 o 90

    let tasa = Number(prompt('Ingresa la tasa de interes'))
    while (isNaN(tasa) || tasa === 0) {
        tasa = Number(prompt('Ingresa una tasa de interes correcta'))
    }//Si el valor ingresado no es un número o esta en blanco que avise: "Ingresa una tasa..."

    function calcularIntereses(deposito, dias, tasa) {
        let porTasa = tasa / 100
        const valorFinal = deposito * (1 + ((porTasa * dias) / 365))
        return valorFinal.toFixed(2)
    }
    alert(calcularIntereses(deposito, dias, tasa))

    let respuesta = parseInt (prompt('¿Desea volver a utilizar el simulador?: 1-SI, 2-NO'))
    if (respuesta === 1) { // Condicional para volver a utilizar el simulador.
        deseo === null
    } else {
        deseo = respuesta
        alert ('Gracias por su visita')
    }
}