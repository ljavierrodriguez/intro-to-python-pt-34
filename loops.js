// Loops o Bucles
/*  

for(iterador; condicion; incremento){
    sencencias
}

for(indice in coleccion){
    sentencias
}

for(valor of coleccion){
    sentencias
}

while(condicion){
    sentencias
}

do {
    sentencias
} while (condicion);

*/

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let nombres = ['Hugo', 'Paco', 'Luis'];

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

for (let indice in nombres) {
    console.log(nombres[indice]);
}

for (let valor of nombres) {
    console.log(valor);
}

let j = 1;
while (j <= 10) {
    console.log(j);
    j++;
}

let k = 0;
while (k < nombres.length) {
    console.log(nombres[k]);
}

let m = 0;
do {
    console.log(nombres[m]);
    m++;
} while (m == 10)