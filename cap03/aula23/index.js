/*
Operadores Lógicos
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

FALSY
*false
0
'' "" ``
null / undefined
NaN
*/

console.log('Luiz Otávio' && '' && 'Maria');

function falaOi() {
    return 'Oi';
}

let vaiExecutar = 'João';

console.log(vaiExecutar && falaOi());
console.log(0 || false || null || 'Luiz Otávio' || true);


const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || 'João' || c || d || e)

