// Variáveis

// var (variável) 
var altura = 5;
var comprimento = 7;

area = altura * comprimento; // realizando a operação fora da variável
var area // declaração da variável com os atributos do script anterior.

console.log(area)

// let (variável que não deixa ser repetida)
let forma = 'retangulo'
let altura = 5;
let comprimento = 7;

let area // a declaração de operação de let também pode ser feito fora do let, mas isso pode gerar problemas futuros

if (forma === 'retangulo') {
    area = altura * comprimento; // realizando a operação fora da variável
} else {
    area = (altura * comprimento) / 2
}

console.log(area)

// const (variável que não pode ser alterada durante a execução)
const forma = "triangulo";
const altura = 5;
const comprimento = 7;

let area;
if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2
}

console.log(area)
