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




//////////// Obs ////////////////  é sempre bom fazer as conversões de forma explícita.
let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.


// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da da multiplicação

let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN

let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.