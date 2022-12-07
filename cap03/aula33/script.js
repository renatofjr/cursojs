const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
// const { nome = '', sobrenome, idade } = pessoa;
// const { nome, sobrenome} = pessoa;
// const { endereco: { rua, numero }, endereco} = pessoa;
const {nome, ...resto} = pessoa;
console.log(nome, resto);