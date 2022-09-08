//Aprendizaje rutina, palabras, numeros y hora

//Fecha en español para que aprenda los dias, meses y años, ademas la hora y minutos.
const date = new Date();
const [hora, minutos, segundos] = [date.getHours(), date.getMinutes(), date.getSeconds()];
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'junio',
'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
alert (`Buen dia Benja, hoy es ${dias[date.getDay()]}, ${date.getDate()} de ${meses[date.getMonth()]} de ${date.getUTCFullYear()}
La hora es: ${hora}:${minutos}`)

//Arrays con tareas que debe realizar para poder utilizar la tablet

const tareasMañana = ['levantarse', 'baño', 'dientes', 'desayuno']
const tareasMedia = ['almuerzo', 'dientes', 'trampolin', 'cajas']
const tareasTarde = ['merienda', 'salir', 'bañarse']
const tareasNoche = ['cenar', 'jugar', 'ordenar', 'pastilla', 'baño']
const vocales = ['a', 'e', 'i', 'o', 'u']

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
let vestimenta = ropero.map(function(ropa){    
    return (ropa.tipo)
})



let listaVocales = [] // aun no lo use pero lo voy a necesitar para crear unas tareas

//Funcion de tareas completas para que utilice el Si y el No y aprenda lenguaje (La funcion va recorriendo cada elemento del array consultando si se realizo y ademas, separa las letras para compararlas con las vocales.)
function tareasCompletas (array) {
    for (let i = 0; i < array.length; i++) {
        let arrayVocales = []        
        let tareaCompleta = prompt ('Completaste la tarea ' + array[i] + '?')
        const letras = array[i].split('')
        if (tareaCompleta === 'Si' || tareaCompleta === 'si') {
            for (const elemento of vocales) {
                let resultadoFilter = letras.filter(letra => letra === elemento)
                if (resultadoFilter[0] != undefined) {
                    arrayVocales.push(resultadoFilter[0])
                }                                                             
            }                                    
            listaVocales.push(arrayVocales)
            let consulta = prompt('Escribe las vocales que tiene ' + array[i])
            if (consulta == arrayVocales) {                
                alert ('Muy bien Benja, la respuesta es: ' + arrayVocales)
            }else
                alert ('Incorrecto, la respuesta correcta es ' + arrayVocales)            
        }else if (tareaCompleta != 'Si' && tareaCompleta != 'si'){
            alert('Te falta completar la tarea')
            i = i - 1
        }
    }    
    return alert('Muy bien Benja!!! las tareas ' + array + ' estan completas.')    
}



//Condicion con horarios para que aprenda a usar las palabras y leer.
let contador = 3


while (hora >= 10 && contador <= 3) {      
    if (hora >= 10 && hora <= 11 && contador === 0) {
        alert (`Tenes que completar estas tareas para poder jugar con la tablet: 
01: ${tareasMañana[0]} 02: ${tareasMañana[1]} 03: ${tareasMañana[2]} 04: ${tareasMañana[3]}`)
        tareasCompletas(tareasMañana)                        
        contador = contador + 1
        let vestir = prompt(`Que remera y pantalon te gustaria usar hoy?
        ${vestimenta[0]}
        ${vestimenta[1]}
        ${vestimenta[2]}
        ${vestimenta[4]}        
        `)
        alert (vestir)
    }else if (hora >= 12 && hora <= 14 && contador === 1) {
        alert (`Tenes que completar estas tareas para poder jugar con la tablet: 
01: ${tareasMedia[0]} 02: ${tareasMedia[1]} 03: ${tareasMedia[2]} 04: ${tareasMedia[3]}`)
        tareasCompletas(tareasMedia)        
        contador = contador + 1       
    }else if (hora >= 16 && hora <= 19 && contador === 2) {
        alert (`Tenes que completar estas tareas para poder jugar con la tablet: 
01: ${tareasTarde[0]} 02: ${tareasTarde[1]} 03: ${tareasTarde[2]}`)
        tareasCompletas(tareasTarde)        
        contador = contador + 1
    }else if (hora >= 20 && contador === 3) {
        alert (`Ultimas tareas antes de ir a dormir: 
01: ${tareasNoche[0]} 02: ${tareasNoche[1]} 03: ${tareasNoche[2]} 04: ${tareasNoche[3]} 05: ${tareasNoche[4]}`)
        tareasCompletas(tareasNoche)        
        contador = 0              
    }   
}


let saludo = prompt ('Buenas Noches Benja')
alert (saludo)