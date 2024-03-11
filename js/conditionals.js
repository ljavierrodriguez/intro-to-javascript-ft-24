/* Conditionals */
/* 
If Simple:

if (condition) { // true
    sentences
}

If-Else

if (condition) {
    sentences
} else {
    sentences
}

if-Else Anidado

if (condition) {
    sentences
} else if (condition) {
    setencias
} else if (condition) {
    sentences
} else {
    sentences
}


*/
let a = 10;
let b = 8;
let c = 20;

if (a > b){ // true
    console.log("El mayor es A")
}


if (a > c){
    console.log("El mayor es A")
} else {
    console.log("El mayor es C")
}

if (a > b && a > c) {
    console.log("El mayor es A");
} else if (b > c ){
    console.log("El mayor es B");
}else {
    console.log("El mayor es C");
}


var nombre;

nombre = "Luis";

if (nombre !== ''){
    var apellido = "Smith"
}

console.log(apellido)