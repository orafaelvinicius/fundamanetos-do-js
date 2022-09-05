// == (comparação implícita)
const numero = 13;
const texto = "13";

console.log("Comparação implícita " + (numero == texto));

// === (comparação explícita)

console.log("Comparação explícita "  + (numero === texto));

// typeof
console.log("Tipo da variável " + typeof numero)
console.log("Tipo da variável " + typeof texto)

// == só compara o valor
// === compara o valor e o tipo do dado

// As boas práticas pedem para usar a comparação explicita (===) e fazer a concersão explícita com a função nativa (Number, String etc)

