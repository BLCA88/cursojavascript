//Aprendizaje rutina, palabras, numeros y hora
//Arrays con tareas que debe realizar para poder utilizar la tablet
const tareasMañana = ['Levantarse', 'Baño', 'Dientes', 'Desayuno']
const tareasMedia = ['Almuerzo', 'Dientes', 'Trampolin', 'Picar']
const tareasTarde = ['Merienda', 'Jugar', 'Bañarse']
const tareasNoche = ['Cenar', 'Jugar', 'Ordenar', 'Pastilla', 'Baño']
const vocales = ['a', 'e', 'i', 'o', 'u']

//funcion para agregar el 0 en hora, minutos y segundos
function checkTime(i) {
    if (i < 10) {        
        i = "0" + i        
    }
    return i
}
//Fecha en español para que aprenda los dias, meses y años, hora y minutos.
function fechaHora() {
    const fecha = new Date()
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
    return (hora, minutos, segundos)                 
}
//Para llamar automaticamente la funcion fechaHora
const llamar = function (callback) {
    callback()
} 
llamar(fechaHora)

//----------------------------------------------------------------------------------------------------------------------------------------------------//

//<----------<Eventos>------------>//
let boton = document.querySelectorAll('.buton')
let containerBoton = document.querySelectorAll('.divB')
let containerFrontBack = document.querySelectorAll('.containerFrontBack')
let containerFront = document.querySelectorAll('.containerFront')
let h2 = document.querySelectorAll('.h2')
let modalSi = document.querySelector('.modalSi')
let modalNo = document.querySelector('.modalNo')
let cerrarModalSi= document.getElementById('Si')
let cerrarModalNo= document.getElementById('No')



// Funcion con evento para mostrar tarjetas
function mostrarDiv (array) {
    for (let contenedor of containerFront) {
        let variable = contenedor.firstElementChild.innerHTML                
        for (let elemento of array) {            
            if (variable === elemento){
                contenedor.parentElement.classList.remove('displayNone')                                                
            } 
        }            
    }    
}

function tareasCompletas (array) {
    for (let i = 0; i < array.length; i++) {        
        mostrarDiv(array)
    }
}

const fecha = new Date()
let [hora, minutos, segundos] = [fecha.getHours(), fecha.getMinutes(), fecha.getSeconds()] 


//Funcion con condicional para mostrar tarjetas segun hora.
function horario (){           
    if (hora == 10 && minutos == 00 && segundos == 0) {        
        location.reload()
        localStorage.clear()        
    }else if (hora >= 10 && hora < 12 ) {       
        tareasCompletas(tareasMañana)        
    }else if (hora == 12 && minutos == 00 && segundos == 0){
        location.reload()
        localStorage.clear()
    }else if (hora >= 12  && hora < 16) {
        tareasCompletas(tareasMedia)                        
    }else if (hora == 16 && minutos == 00 && segundos == 0) {       
        location.reload()
        localStorage.clear()
    }else if (hora >= 16 && hora < 20){
        tareasCompletas(tareasTarde)
    }else if (hora == 20 && minutos == 00 && segundos == 0) {       
        location.reload()
        localStorage.clear()
    }else if (hora >= 0) {
        tareasCompletas(tareasNoche)                                
    }
    let refresh = setTimeout(function(){horario()}, 1100)
}
llamar(horario)

//
class ropero {
    constructor(id, material, tipo, color, diseño){
        this.id = id
        this.material = material
        this.tipo = tipo
        this.color = color
        this.diseño = diseño 
    }
}

/* Funcion para escuchar el evento del boton SI y NO para mostrar modal y crear divHtml para guardar informacion en localStorage y 
si se reinicia la pagina, mostrar la tarjeta completado. */
let divHtml = []

boton.forEach(element => {           
    if (element.name === 'si') {
        element.addEventListener('click', () => {            
            modalSi.classList.add('mostrarModal')            
            element.parentElement.classList.add('visibilityNone')
            element.parentElement.lastElementChild.classList.remove('visibilityNone')
            element.parentElement.lastElementChild.classList.add('visibilityYes')
            let propiedadPadre = element.parentElement            
            if (propiedadPadre.classList.contains('visibilityNone')){
                divHtml.push(propiedadPadre.offsetParent.outerHTML)
                guardarLocal()                
            }                             
        })                      
    } else if (element.name === 'no') {
        element.addEventListener('click', () => {
            modalNo.classList.add('mostrarModal')            
        })
    }          
})
cerrarModalSi.addEventListener('click', () => {
    modalSi.classList.remove('mostrarModal')               
})
cerrarModalNo.addEventListener('click', () => {
    modalNo.classList.remove('mostrarModal')               
})

//Funcion, ciclos y eventos para mantener el divHtml de las tarjetas  

let infoLocal = []
let domInicio = []

for (let i = 0; i < localStorage.length; i++) {
    infoLocal.push(localStorage.getItem(i))    
}

for (let i = 0; i < containerFront.length; i++) {
    domInicio.push(containerFront[i])
}

for (let i = 0; i < infoLocal.length; i++) {
    for (let e = 0; e < domInicio.length; e++) {  
       let domInicioMin = (domInicio[e].firstElementChild.innerText).toLowerCase()       
       let infoLocalMin = infoLocal[i].toLowerCase()       
       if(infoLocalMin.includes(domInicioMin)) {            
            domInicio[e].innerHTML = infoLocal[i]            
       }
    }
}
function guardarLocal () {
    for (let i = 0; i < divHtml.length; i++) {
        if (localStorage[0] == undefined) {
            localStorage.setItem(i, divHtml[i])
            divHtml = []
        }else {            
            for (let clave in Object.entries(localStorage)) {
                let key = Number(clave) + 1                
                if (localStorage[key] == undefined) {                                                         
                    localStorage.setItem(key, divHtml[i])
                    divHtml = []                  
                }
            }      
        }
    }
}