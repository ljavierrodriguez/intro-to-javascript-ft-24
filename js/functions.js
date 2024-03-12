/* Functions */
/* 
// functions names 
function functionName(params, ...){
    sentences
}

// declaratives functions
const functionName = function(params, ...){
    sentences
}

// Arrow functions
const functionName = (params, ...) => {
    sentences
}

*/

function saludar(){
    console.log('Hola, ' + name);
}

const saludar2 = function(name){
    console.log('Hola, ' + name);
}


var name = "Luis";
let saludo = saludar();


function totalizar(...valores){
    let total = 0;
    /* for (let i = 0; i < valores.length; i++){
        total += valores[i]
    } */
    valores.forEach(function(valor){
        total += valor;
    })
    return total;
}


let total = totalizar(10, 20, 30, 40, 50); // 60
console.log(total)


function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

function operacion(fc, a, b){
    return fc(a, b)
}

let resultado = 0;
resultado = operacion(sumar, 10, 10);
console.log(resultado)
resultado = operacion(restar, 10, 10);
console.log(resultado)


let t = sumar(10, 10)
console.log('La suma es: ' + t);

// function anonima de flecha
/* 
let dividir = (a, b) => {
    return a / b;
} 
*/
let dividir = (a, b) => a / b;