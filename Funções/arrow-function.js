function apresentação(nome) {
    return `meu nome é ${nome}`;
}

// arrow funcition
// Não podem ser nomeadas, e sempre é declarada com um const com o nome da função
const apresentaArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// se houver mais de uma linha, precisa haver quebra de linha
const somaNumerosPequenos = (numero1, numero2) => {
    if (numero1 > 10 || numero2 > 10) {
        return "somente numeros de 1 a 9"
    }else {
        return numero1 + numero2;
    }
}

// arrou funcion = jeito rápido e curto
// Hoisnting se comporta da mesma forma como a expressão


