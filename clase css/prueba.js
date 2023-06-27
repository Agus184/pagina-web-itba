let nombre= "esteban"
let numeros = [15,22,23]
console.log (nombre)
console.log (numeros[0])
const array = ["steve",30,true]

array.push (10)
console.log(array[10])

nombre= "otra cosa"

let mejor_profesor = {//objeto literal

    nombre: "esteban",
    rol: "profesor",
    edad: 29+1,
    en_funciones:true,
    cumplir_años: function ()
    {this.edad=this.edad+1}
    }

console.log (mejor_profesor.nombre)
mejor_profesor.cumplir_años()
console.log (mejor_profesor.edad)

function saludar() {
    console.log ("hola mundo")
    }

saludar ()

let despedir= function (){console.log("adios")}

despedir ()

function consologear (valor) {
    console.log (valor)
    }

consologear (1*255)

//1*255 es el valor que necesita la funcion osea llamo a la funcion asignandole una variable


function sumar (a,b) {
    return a+b
    }

//return me devuelve la suma de "a" y de "b"

consologear (sumar(1,2))

//llamo a la funcion consologear que me printea un valor que viene de otra funcion que a su vez toma 2 valores

// la funcion expresada es la que esta guardada dentro de una variable

// funcion flecha 

function(a){
    return a+100
    }

a => a+100;

(a,b) => a+b+100

a => {
    console.log (a)
    return a+100    
    }

// si lleva mas de una linea se usa corchete
// si necesita mas de una variable se usa parentesis


let primerNumero = Number (prompt("ingrese un valor: "))
console.log(primerNumero)

let esrudiantes =[
    {nombre:"papa", apellido:"dsa" ,activo:true,},
    {nombre:"pepe", apellido:"dsa" ,activo:false ,},
    {nombre:"pipa", apellido:"dsa" ,activo:true, },

    ]

console.table(estudiantes[0].nombre)
//printea en forma de cuadro (pre base de datos)
// no tiene manejo de matriz (no es una matriz), es un array de objetos

let paraBD= JSON.stringify(estudiantes)
console.log (paraBD)
// convertirlo a JSON para pasar a base de datos
console.log(paraBD[0].nombre)
//da error porque no es un array

let convertido = JSON.parse(paraBD)
// traerlo de JSON a idioma de javascript
console.log(convertido[0].nombre)
//no da error porque ya es un array

function puedePasar (edad) {
    if (edad>18)
        {return "puede pasar"}
    else if (edad>50)
        {return "estupido"}
    else 
        {return "ingresa un num"}
    }
    


console.log(puedePasar (19))
puedePasar (15)
puedePasar ("otra cosa")


let edad = 19
console.log ("el valor es: " + edad)

// forma de pete

console.log (`el valor es ${edad+1}`)

// forma pro es mas corto




// array es una especie de lista pero mas felixble modelo mas comun de array= array.prototype."la funcion que quiero"()
//#region push: agrega un valor al final 
//pop: quita el ultumo valoree
// shift: elimina el 1er elemento
// unshift: agrega un elemento (puede recibir parametros)
// reduce: acumula segun una op matematica todo un array
// reverse: invierte todo el array
// metodo mas basico para invertir un orden
// find (for/if) = buscar y separar un elemento del array
// splice: permite agregar, sacar algo en alguna posicion
// la funcion se declara con function
// llamar funcion es con function() asi la invoco
//la podes llamar previa a la existencia de la funcion osea arriba la invoco y abajo la funcion
//otra forma de invocar una funcion es guardandola dentro de una variable y esta no se puede llamar previa a su existencia
// console.log = al print de phyton
// let + el nombre + = es igual a crear una var en python
//prompt es como hacer un input en python
// mockaroo pagina para hacer pruebas
//json sirve para mandar a base de datos cuando recivis pasas de json a el idioma de javascript'


// la tercera entrega necesita un archivo de js, por ej un console log que digo hola mundo

// unir html con js no entra en la entrega

//js con html por ej menu desplegable es menu desplegable

//manejar la data que se muestra es backend

// dentro de cada case tiene que haber un break