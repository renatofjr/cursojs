// factor
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

// Mesma coisa do fonte acima
// function criaPessoa(nome, sobrenome, idade) {
//     return { nome, sobrenome, idade }
// }

// Criação de pessoas
// const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
// const pessoa2 = criaPessoa('Maria', 'Oliveira', 25);
// const pessoa3 = criaPessoa('João', 'Miranda', 25);
// const pessoa4 = criaPessoa('Junior', 'Miranda', 25);
// const pessoa5 = criaPessoa('Jean', 'Otávio', 25);

// console.log(pessoa1.nome);

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome}: A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();