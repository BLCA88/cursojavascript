//Aprendizaje rutina, palabras, numeros y hora

//Arrays con tareas que debe realizar para poder utilizar la tablet
const tareasMañana = ['Levantarse', 'Baño', 'Dientes', 'Desayuno']
const tareasMedia = ['Almuerzo', 'Dientes', 'Trampolin', 'Picar']
const tareasTarde = ['Merienda', 'Jugar', 'Bañarse']
const tareasNoche = ['Cenar', 'Jugar', 'Ordenar', 'Pastilla', 'Baño']
const vocales = ['a', 'e', 'i', 'o', 'u']

//<----------<Eventos>------------>//
let card = document.querySelectorAll('.containerFrontBack')
let boton = document.querySelectorAll('.buton')
let containerBoton = document.querySelectorAll('.divB')
let containerFrontBack = document.querySelectorAll('.containerFrontBack')
let containerFront = document.querySelectorAll('.containerFront')
let h2 = document.querySelectorAll('.h2')

//Evento en tarjeta para mostrar el completado cuando se preiona el boton SI
function ocultarDiv (element){
    let divClickeado = element.parentElement
    divClickeado.classList.add("visibilityNone")
    divClickeado.lastElementChild.classList.remove("visibilityNone")
    divClickeado.lastElementChild.classList.add("visibilityYes")
}

boton.forEach(element => {       
    if (element.name === 'si') {
        element.addEventListener('click', mensaje1)
        element.addEventListener('click', function(){ocultarDiv(element)})     
    } else if (element.name === 'no') {
        element.addEventListener('click', mensaje2)
    }
    function mensaje1() {    
        alert('Muy bien Benja')                
    }
    function mensaje2() {    
        alert('Tenes que completar la tarea')       
    }      
})
// Funcion con evento para mostrar tarjetas
function mostrarDiv (array) {
    for (let contenedor of containerFront) {
        let variable = contenedor.firstElementChild.innerHTML        
        for (let elemento of array) {
            if (variable == elemento){
                contenedor.parentElement.classList.remove('displayNone')                                
            } 
        }            
    }    
}

//funcion para agregar el 0 en hora, minutos y segundos
function checkTime(i) {
    if (i < 10) {        
        i = "0" + i        
    }
    return i
}
//Fecha en español para que aprenda los dias, meses y años, ademas la hora y minutos.
function fechaHora() {
    let fecha = new Date()
    let [hora, minutos, segundos] = [fecha.getHours(), fecha.getMinutes(), fecha.getSeconds()]                
    hora = checkTime(hora)    
    minutos = checkTime(minutos)
    segundos = checkTime(segundos)
    document.getElementById("reloj").innerHTML = hora + ":" + minutos + ":" + segundos    
    const mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    let diaActual = dias[fecha.getDay()]
    let fechaActual = fecha.getDate()
    let mesActual = mes[fecha.getMonth()]
    let añoActual = fecha.getFullYear()
    let date = diaActual+", "+fechaActual+" "+mesActual+" "+añoActual    
    document.getElementById("fecha").innerHTML = date
    let refresh = setTimeout(function(){fechaHora()}, 500)
    if (hora >= 10 && hora <= 12) {        
        tareasCompletas(tareasMañana)
    }else if (hora >= 13  && hora <= 14) {        
        tareasCompletas(tareasMedia)
    }else if (hora >= 16 && hora <= 18) {
        tareasCompletas(tareasTarde)
    }else if (hora >= 20) {
        tareasCompletas(tareasNoche)                         
    }          
}
//Para llamar automaticamente la funcion fechaHora
const llamar = function (callback) {
    callback()
} 
llamar(fechaHora)

//Array con objetos de vestimenta
let ropero = [ 
    {id: 1, material: 'algodon', tipo: 'remera manga corta', color: 'azul', diseño: 'ositos estampados'},
    {id: 2, material: 'algodon', tipo: 'remera manga larga', color: 'azul francia', diseño: 'liso'},
    {id: 3, material: 'polyester', tipo: 'pantalon largo liviano', color: 'verde, azul', diseño: 'cuadrille'},
    {id: 3, material: 'algodon', tipo: 'pantalon largo liviano', color: 'rosa, verde nilo, celeste', diseño: 'cuadrille'},
    {id: 4, material: 'seda organica', tipo: 'pantalon corto', color: 'rojo', diseño: 'liso'},
    {id: 4, material: 'polyester', tipo: 'pantalon corto', color: 'blanco, verde', diseño: 'dividido'},
    {id: 5, material: 'algodon', tipo: 'calzoncillo', color: 'negro', diseño: 'liso'},
    {id: 5, material: 'algodon', tipo: 'calzoncillo', color: 'gris', diseño: 'liso'},
    {id: 6, material: 'cuero sintetico', tipo: 'zapatilla', color: 'negro', diseño: 'puma'}
]
let vestimenta = ropero.map(function(ropa){  // Filtra los tipo de ropas para consultar mas adelante que quiere vestir especificamente.  
    return (`${ropa.tipo} ${ropa.color}`)
})

function tareasCompletas (array) {
    for (let i = 0; i < array.length; i++) {                
        let arrayVocales = []
        const letras = array[i].split('')
        mostrarDiv(array)                                       
        /* if (tareaCompleta === 'Si' || tareaCompleta === 'si') {                                  
            for (const elemento of vocales) {
                let resultadoFilter = letras.filter(letra => letra === elemento)
                if (resultadoFilter[0] != undefined) {
                    arrayVocales.push(resultadoFilter[0])              
                }                                                             
            }                                                           
            listaVocales.push(arrayVocales)           
            if (consulta == arrayVocales) {                
                alert ('Muy bien Benja, la respuesta es: ' + arrayVocales)                                
            }else                
                alert ('Incorrecto, la respuesta correcta es ' + arrayVocales)                            
        } */
    }
}





