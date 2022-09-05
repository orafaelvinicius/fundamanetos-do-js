// string modelo

const nome = "Rafa";
const idade = 2022 - 1996
const cidadeDeNascimento = "Rio de Janeiro"

// Sem template string
// const apresentacao = "meu nome é " + nome + ", minha idade é: " + idade + ", nascido na cidade do " + cidadeDeNascimento;

const apresentacao = `Meu nome é ${nome}, minha idade é: ${idade} e eu nasci na cidade do ${cidadeDeNascimento}`
console.log(apresentacao)

// // Outro exemplo
const cliente = "Leo";
const idadeCliente = 26;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${cliente} diz: "por favor, quero beber ${idadeCliente >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)
