/*
Operadores Lógicos
&& -> AND -> E
|| -> OR -> OR
! -> NOT -> NÃO
*/

const expressaoAnd = true && true && true && true;
const expressaoOr = true || false;
console.log(expressaoAnd);
console.log(expressaoOr);

const usuario = 'Luiz';
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log(vaiLogar);

console.log(!true);