// ainda sobre Booleanos

const usuarioLogado = true
const contaPaga = false

// Truthy e Falsy são interpretados como true ou false
// 0 => false
// "" => false
// 1 => true
// console.log(0 == false)
// console.log("" == false)
// console.log(1 == true)

// undefined => não definido
// null => vazio ou nada

let minhaVar; 
let varNull = null;

console.log('objeto undefined: ' + minhaVar)
console.log('objeto nulo: ' + varNull)


let numero = 3;
let texto = "Texto";

console.log("tipo do objeto: " + typeof numero)
console.log("tipo do objeto: " + typeof texto)