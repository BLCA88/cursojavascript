let min = 1
let max = 20
let numero = Math.floor(Math.random()*(max-min+1)+min)
console.log(numero)
let numero2 = parseInt(prompt('(Adivina) Ingrese un número del 1 al 20 (tenes 3 intentos)'))
// Juego adivina el número}
for(let i = 1; i <= 3; i++) {
    if (numero === numero2) {
        alert ('Ganaste')
        i = 5
    } else if (i === 3) {
        alert ('Perdiste, el numero correcto es '+numero)
    } else if (numero > numero2) {
        resultado = (numero-numero2)
        if (resultado <= 3){
            alert ('Caliente')
            numero2 = parseInt(prompt('Ingrese un número del 1 al 20 '+'(te quedan '+(3-i)+')'))
        }else if (resultado >= 4){
            alert ('Frio')
            numero2 = parseInt(prompt('Ingrese un número del 1 al 20 '+'(te quedan '+(3-i)+')'))
        }        
    } else if (numero2 > numero) {
        resultado = (numero2-numero)
        if (resultado <= 3){
            alert ('Caliente')
            numero2 = parseInt(prompt('Ingrese un número del 1 al 20 '+'(te quedan '+(3-i)+')'))
        }else if (resultado >= 4){
            alert ('Frio')
            numero2 = parseInt(prompt('Ingrese un número del 1 al 20 '+'(te quedan '+(3-i)+')'))
        }
    } 
} 
//Juego de números pares o impares
let lista = ''
let numero3 = parseInt(prompt('(Par o Impar) Ingresa un número del 1 al 20'))
while ((numero3 > 0) && (numero3 <= 20)) {
    if (numero3 % 2 == 0){               
        for (let r = 1;r  < numero3;r = r + 2){
           lista = lista + ' ' + r + ','                                
        }
        alert('Los números impares son:'+ lista)
        lista = ''
        numero3 = parseInt(prompt('Ingresa un número del 1 al 20'))                
    }else {
        for (let r = 0;r < numero3;r = r + 2){
           lista = lista + ' ' + r + ','          
        }
        alert('Los números pares son:'+ lista)
        lista = ''
        numero3 = parseInt(prompt('Ingresa un número del 1 al 20'))
    }
} 