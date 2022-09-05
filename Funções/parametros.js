// Parâmetros de função

function soma(num1, num2) {
    return num1 + num2
}

console.log(soma(1,2))

// parâmetro x argumento

// orgem dos parâmetros

function concatenacao (nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`
}
console.log(concatenacao(26, "Rafael")) // ordem errada para exemplo


// usando várias funções de uma vez
function multiplica(numero1, numero2) {
    return numero1 * numero2
}
console.log(multiplica(soma(4,5), soma(3,3)))

// Definindo um valor padrão para o parâmetro
function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2
}
console.log(multiplica(soma(4,5)))


// uma boa prártica é usar a função com poucos parâmetros, caso hajam muitos parâmetros,
// significa que a função pode ser quebrada em mais de uma função