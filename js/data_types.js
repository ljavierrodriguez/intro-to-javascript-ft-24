/* Data Types */
/* 

String
Number
Boolean
Undefined

Object
    Object Literal
    Array
    Null

Functions

*/

let nombre = "Luis"
let apellido = 'Rodriguez'
let nombre_completo = `Hola mi nombre es ${nombre} ${apellido}`; // string template 

let edad = 20;
let temp = -2;
let precio = 10.99;
let descuento = -10.30;

let abierto = true;
let activo = false;

let prueba; // undefined

let persona = {
    nombre: 'John',
    apellido: 'Doe'
}

persona.nombre = "Luis";
persona["apellido"] = "Rodriguez"

let numeros = [1, 2, 3];
let nombres = ["Hugo", "Paco", "Luis"];
let datos = [1, "Luis", [1, 2], { name: 'Paula'}]

console.log(datos[2][1])

let users = null;