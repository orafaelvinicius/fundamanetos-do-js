// console é uma ferramenta do node e navegadores usada para exibir resultados dos códigos

// log -> registro
const minhaVar = true

console.log(245)
console.log("Texto exibido")
console.log(minhaVar)

// // Alguns exemplos de uso do console api

// console.log()// log -> Registro
// console.error() //para exibir mensagens de erro;
// console.table() //para visualizar de forma mais organizada informações tabulares;
// console.time() //e o console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;
// console.trace() //para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.

// Exemplo de erro com classe
console.log("deu erro");
console.error(new Error("deu erro")); // new Error trabalha com a classe Erro padrão do JS
