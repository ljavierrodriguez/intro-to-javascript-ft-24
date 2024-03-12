/* Loops */
/* 

for(inicializador; condicion; incremento){
    sentencias
}

for(let indice in coleccion){
    sentencias
}

for(let valor of coleccion){
    sentencias
}

while(condicion){
    sentencias
}

do {
    sentencias
} while (condicion)

*/

for(let init = 1; init <= 10; init++){
    console.log(init)
}

for(let init = 10; init >= 1; init--){
    console.log(init)
}

/* for(let i = 1; i <= 100; i++){
    if (i % 5 === 0) continue;
    console.log(i)
} */
/* let rnd = Math.floor(Math.random() * 100) + 1;
console.log("detener en: " + rnd);
for(let j = 1; j <= 100; j++){
    if (j === rnd) break;
    console.log(j)
} */

let nombres = ["Martin", "Gabriela", "Nicolas", "Andres", "Cristian", "Luis", "Ana"];

for(let i = 0; i < nombres.length; i++){
    console.log(i)
    console.log(nombres[i])
}

for(let indice in nombres){
    console.log(indice)
    console.log(nombres[indice])
}

for(let nombre of nombres){
    console.log(nombre)
}


let init = 1;
while(init <= 10){
    console.log(init)
    init++;
}

let indice = 0;
while(indice < nombres.length){
    console.log(nombres[indice]);
    indice++
}

let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

let persona = {
    name: 'Luis',
    lastname: 'Rodriguez'
}

for(let indice in persona){
    console.log(indice)
    console.log(persona[indice])
}

let a = Object.keys(persona)
console.log(a)