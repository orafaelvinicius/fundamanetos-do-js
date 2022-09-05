// tipo de dado
// booleano

// conversão implícita
const numero = 456;
const numeroString = "456";

console.log("Comparação tipo e conteúdo: " + (numero === numeroString)) /// "===" compara tipo e conteúdo
console.log("Compara conteúdo (implícita): " + (numero == numeroString)) /// "==" compara conteúdo

console.log("Somando número e string: " + (numero + numeroString)) /// "==" compara conteúdo

// conversão explícita
// Funções Number() e String() para conversão 

console.log(numero + Number(numeroString))
// ou
const numeroStringFormat = Number("456");
