
const nome = 'Luiz Otávio';
const nomes = ['Luiz', 'Otávio', 'Henrique'];

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }

// for (let i in nome) {
//     console.log(nome[i]);
// }

for (let i of nome) {
    console.log(i);
}

for (let i of nomes) {
    console.log(i);
}

// nomes.forEach(function (valor, indice, array) {
//     console.log(valor, indice, array);
// })