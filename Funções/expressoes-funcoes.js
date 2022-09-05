// // Declaração de função
// function minhaFuncao(param) {
//     // bloco de código
// }
// minhaFuncao("param")

// Expressões de função
const soma = function (num1, num2) {return num1 + num2}
console.log(soma(1,1))

// diferença entre formas de declarar as funções
// na expresssão não há nome de função, ela é executada diretamente deixando a função mais coesa

// sempre quebra as linhas quando possível para facilitar a visualização do código

// diferença principalentre formas de declarar e expressão das funções = HOISTING
//// funções e var são declaradas no topo do arquivo
console.log(apresentacao()) // chamando antes de declarar a função
function apresentacao(){
    return "olá"
}
console.log(soma2(2,2)) // chamando antes de expressar a função dá erro pela ordem de execução dos códigos
const soma2 = function (num1, num2) {return num1 + num2}
