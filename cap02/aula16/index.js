const alunos = ['Luiz', 'Maria', 'João'];

// alunos[alunos.length] = 'Luiza';
// alunos[alunos.length] = 'Fábio';
// alunos[0] = 'Eduardo';
// alunos[3] = 'Luiza';

// Acrescenta item no final do array
alunos.push('Otávio');
alunos.push('Luiza');
alunos.push('Fábio');

// Acrescenta item no início do array
alunos.unshift('Renato');
alunos.unshift('Paula');

// Remover item do final
const removido1 = alunos.pop();
console.log(removido1);

// Remove item do início
const removido2 = alunos.shift();
console.log(removido2);

// Remove item conforme passado
// delete alunos[1];

// Fatiar array
console.log(alunos.slice(0, 3));
console.log(alunos.slice(1, -2));

console.log(alunos);

console.log(alunos instanceof Array);