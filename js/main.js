//Aprendizaje rutina, palabras, numeros y hora
//<-------------------<API OPENWEATHERMAP>------------------->//
//<-------------------<GEO>---------------------->//
let latitude = -34.6
let longitude = -58.45
const geo = !navigator.geolocation.getCurrentPosition(position => {
    latitude = position.coords.latitude
    longitude = position.coords.longitude
})
const sectionTW = document.getElementById('stw')
const cardDiv = document.getElementById('containerCard')
const clima = async() => {      
    const climaApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=sp&appid=5c77677b6df8e033cdb6f856910bbf53&units=metric`)
    const responseJson = await climaApi.json()
    const weather = await fetch('js/estadosTiempo.json')
    const weatherJson = await weather.json()
    let rutaImagen = []
    let estadoTiempo = []
    weatherJson.weather.forEach(elemento =>{
        responseJson.weather.forEach(element => {
            if (element.icon === elemento.id) {
                rutaImagen.push(elemento.imagen)
                estadoTiempo.push(elemento.description)
                sectionTW.append(cardDiv)
                cardDiv.innerHTML =
                    `<div class="containerImg">
                        <img src="${rutaImagen[0]}" class="imgClima" alt="...">
                        <p class="card-text">${estadoTiempo[0]}</p>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${responseJson.name}</h5>
                        <p class="card-text">Temperatura: ${Math.floor(responseJson.main.temp)}º</p>                                          
                    </div>`                
            }
        })       
    })    
}   
//<-------------------------------------------->//
const reiniciarTareas = document.querySelector('.reload')
reiniciarTareas.addEventListener('click', () => {
    const max = 40
    const min = 1
    const numero1 = Math.floor((Math.random() * (max - min + 1)) + min)
    const numero2 = Math.floor((Math.random() * (max - min + 1)) + min)
    const resultado = numero1 + numero2    
    
    Swal.fire({
        title: `Resuelve la siguiente suma: ${numero1}+${numero2} `,
        html: 
        '<input id="swal-input1" class="swal2-input">',                     
        confirmButtonText: 'Aceptar',        
        preConfirm: () => {
            let resultadoInput = document.getElementById('swal-input1').value            
            return(resultadoInput)
        },                       
    }).then((resultadoInput) => {        
        if (parseInt(resultadoInput.value) === resultado) {
            Swal.fire({
                icon: 'success',
                title: `!Correcto!`,
                confirmButtonText: '<i id="botonReiniciar" class="fa fa-thumbs-up"></i> Reiniciar',
                preConfirm: () => {
                    let botonReiniciar = document.getElementById('botonReiniciar')
                    return(botonReiniciar)
                },                
            }).then((botonReiniciar) => {
                if (botonReiniciar) {
                    localStorage.clear()
                    location.reload()
                }
            })
        }else {
            Swal.fire({
                icon: 'error',
                title: `¡Pu Puuu! El resultado era: ${resultado}`,                
            }) 
        }
    })    
})

const fecha = new Date()
let [hora, minutos, segundos] = [fecha.getHours(), fecha.getMinutes(), fecha.getSeconds()]


//<-------<funcion para agregar el 0 en hora, minutos y segundos>------>//
function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i
}
//<------<Fecha en español para que aprenda los dias, meses y años, hora y minutos>------->//
function fechaHora() {
    clima()    
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
    let date = diaActual + ", " + fechaActual + " " + mesActual + " " + añoActual
    document.getElementById("fecha").innerHTML = date    
    let refresh = setTimeout(function () { fechaHora() }, 500)
    return (hora, minutos, segundos)
}
//<-------------<Para llamar automaticamente la funcion fechaHora>---------->//
const llamar = function (callback) {
    callback()
}
llamar(fechaHora)



//<-----------------<Vocales>-------------->//
const vocales = 'aeiou'.split('')
function vocalesAleatorias(array) {
    let posicionActual = array.length
    while (0 !== posicionActual) {
        const posicionAleatoria = Math.floor(Math.random() * posicionActual)
        posicionActual--
        [array[posicionActual], array[posicionAleatoria]] = [array[posicionAleatoria], array[posicionActual]]
    }
    return array
}

function obtenerVocalesAleatorias(cantidad) {
    vocalesAleatorias(vocales)
    return vocales.slice(0, cantidad).join('')
}

//<-----<Funcion con evento para mostrar tarjetas y agregar botones en la parte trasera de la card segun la funcion horario>------>//
let containerFrontBack = document.querySelectorAll('.containerFrontBack')
let vocalesCompletas = []


function mostrarDiv(array) {
    for (const contenedor of containerFrontBack) {
        let texto = contenedor.firstElementChild.firstElementChild.innerHTML        
        for (let elemento of array) {            
            let mostrar = texto === elemento && contenedor.classList.remove('displayNone')
            if (texto === elemento) {
                const letras = elemento.toLowerCase().split('')
                let arrayVocales = []
                for (const elemento of vocales) {                
                    let resultadoFilter = letras.filter(letra => letra === elemento)
                    if (resultadoFilter[0] != undefined) {
                        arrayVocales.push(elemento)
                        
                    }
                }
                let vocalesSeparadas = arrayVocales.join('')
                vocalesCompletas.push(arrayVocales.join(''))                                         
                let contenedorBack = contenedor.lastElementChild
                let divBack = document.createElement('div')
                divBack.classList.add('divBack')
                contenedorBack.append(divBack)                
                divBack.innerHTML =
                    `<h3 class="h3">¿Que vocales tiene ${elemento}?</h3>
                    <div class="divButon">
                        <button type="button" class="botonOpcion b1" >${vocalesSeparadas}</button>
                        <button type="button" class="botonOpcion b2">${obtenerVocalesAleatorias(2)}</button>
                        <button type="button" class="botonOpcion b3">${obtenerVocalesAleatorias(4)}</button>
                    </div>                    
                
                    `
                const max = 5
                const min = 1                
                let botonOpcion = document.querySelectorAll('.b1')
                let botonOpcion2 = document.querySelectorAll('.b2')
                let botonOpcion3 = document.querySelectorAll('.b3')                
                for (let i = 0; i < botonOpcion.length; i++) {
                    let numeroAl = Math.floor((Math.random() * (max - min + 1)) + min)
                    botonOpcion[i].style.order = `${numeroAl}`
                    numeroAl = Math.floor((Math.random() * (max - min + 1)) + min)                    
                    botonOpcion2[i].style.order = `${numeroAl}`
                    numeroAl = Math.floor((Math.random() * (max - min + 1)) + min)                   
                    botonOpcion3[i].style.order = `${numeroAl}`                    
                }
            }           
        } 
    }
}

//<----------------<Funcion con condicional para mostrar tarjetas segun hora>------------->//
//<--------<Arrays con tareas que debe realizar>------>//
const tareasMañana = ['Levantarse', 'Baño', 'Dientes', 'Desayuno']
const tareasMedia = ['Almuerzo', 'Dientes', 'Trampolin', 'Picar']
const tareasTarde = ['Merienda', 'Jugar', 'Bañarse']
const tareasNoche = ['Baño', 'Cenar', 'Jugar', 'Ordenar', 'Pastilla']

function horario() {
    if (hora == 10 && minutos == 00 && segundos == 0) {
        location.reload()
        localStorage.clear()
    } else if (hora >= 9 && hora < 12) {
        mostrarDiv(tareasMañana)
    } else if (hora == 12 && minutos == 00 && segundos == 0) {
        location.reload()
        localStorage.clear()
    } else if (hora >= 16 && hora < 20) {
        mostrarDiv(tareasMedia)
    } else if (hora == 16 && minutos == 00 && segundos == 0) {
        location.reload()
        localStorage.clear()
    } else if (hora >= 16 && hora < 20) {
        mostrarDiv(tareasTarde)
    } else if (hora == 20 && minutos == 00 && segundos == 0) {
        location.reload()
        localStorage.clear()
    } else if (hora >= 20) {
        mostrarDiv(tareasNoche)
    }
    //let refresh = setTimeout(function () { horario() }, 1100)
}
llamar(horario)

//<----------------<Funcion para escuchar el evento del boton SI y NO para mostrar modal y crear divHtml para guardar informacion en localStorage y si se reinicia la pagina, mostrar la tarjeta completado>-------//
let boton = document.querySelectorAll('.buton')
let divHtml = []

boton.forEach(element => {
    if (element.name === 'si') {
        element.addEventListener('click', () => {
            alertSi()
            element.parentElement.classList.add('visibilityNone')
            element.parentElement.lastElementChild.classList.remove('visibilityNone')
            element.parentElement.lastElementChild.classList.add('visibilityYes')
            const propiedadPadre = element.parentElement
            element.parentElement.offsetParent.parentElement.classList.add('rotation')
            if (propiedadPadre.classList.contains('visibilityNone')) {
                divHtml.push(propiedadPadre.offsetParent.outerHTML)
                guardarLocal()
            }           
        })
    } else if (element.name === 'no') {
        element.addEventListener('click', () => {
            alertNo()
        })
    }
})

//<-------------------<Funcion para escuchar botones de vocales y dar opcion correcta e incorrecta>---------------->
let botonOpcion = document.querySelectorAll('.b1')
let botonOpcion2 = document.querySelectorAll('.b2')
let botonOpcion3 = document.querySelectorAll('.b3')

botonOpcion.forEach(propiedad => {          
    propiedad.addEventListener('click', () => {
        let rect = propiedad.getBoundingClientRect()        
        let x = Math.round(rect.x) + 200               
        for (let iterator of vocalesCompletas) {
            if (iterator === propiedad.innerText){
                propiedad.style.background = 'green'
                alertSi()
            }else {
                propiedad.nextElementSibling.addEventListener('click', () =>{
                    propiedad.nextElementSibling.style.background = 'red'
                })
                propiedad.nextElementSibling.nextElementSibling.addEventListener('click', () =>{
                    propiedad.nextElementSibling.nextElementSibling.style.background = 'red'
                })
            }
        }        
    })
})

//<-------------<Modal con SwitAlert2>------------>//
function alertSi() {
    Swal.fire({
        title: '¡Muy bien Benja!',
        customClass: {
            title: 'h2',
            confirmButton: 'btn btn-success'
        },
        buttonsStyling: false,
        imageUrl: './images/completado.svg',
        confirmButtonText: 'Cerrar',
        width: '37rem'
    })
}

//<--------------<Modal con SwitAlert1>------------->// 
function alertNo() {
    swal({
        title: '¡Tenés que completar la tarea!',
        icon: './images/sin_completar.svg',
        button: {
            text: 'Cerrar'
        }
    })
}

//<-----------<Funcion, ciclos y eventos para mantener el divHtml de las tarjetas>---------->//
let containerFront = document.querySelectorAll('.containerFront')
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
        if (infoLocalMin.includes(domInicioMin)) {
            domInicio[e].innerHTML = infoLocal[i]
        }
    }
}
function guardarLocal() {
    for (let i = 0; i < divHtml.length; i++) {
        if (localStorage[0] == undefined) {
            localStorage.setItem(i, divHtml[i])
            divHtml = []
        } else {
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

//Para la proxima...
/* class ropero {
    constructor(id, material, tipo, color, diseño) {
        this.id = id
        this.material = material
        this.tipo = tipo
        this.color = color
        this.diseño = diseño
    }
} */