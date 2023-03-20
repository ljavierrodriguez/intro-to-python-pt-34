// Funciones
/* 

function funcName(args){
    sentencias
}


const funcName = function(args){
    sentencias
}

const funcName = (args) => {
    sentencias
}


*/

function saludo(){
    console.log("Hola Mundo");
}

let sumar = function(a, b) {
    return + b
}

let restar = (a, b = 10) => {
    return a - b
}

saludo()