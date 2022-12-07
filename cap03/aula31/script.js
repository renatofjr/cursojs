const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

let nome = 'Luiz'; // criando
var nome2 = 'Luiz'; // criando

if (verdadeira) {
    let nome = 'Otávio';
    var nome2 = 'Rogério'; // Redeclarado

    if (verdadeira) {
        var nome2 = 'Ronaldo'; // Redeclarado
        let nome = 'Outra coisa';
    }
}

console.log(nome, nome2);

function falaOi() {
    var sobrenome = 'Miranda';
    var nome = 'Luiz';

    if (verdadeira) {
        let nome3 = 'Renato';
        console.log(sobrenome);
    }

    // console.log(nome3);
}

// console.log(sobrenome);

falaOi();


console.log(sobrenome1);
console.log(sobrenome2);

var sobrenome1 = 'Miranda';
let sobrenome2 = 'Freire';