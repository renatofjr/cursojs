/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)
Valores copiados

Referência (mutável) - array, object, function
Passados por referência
*/

// Imutáveis
let a = 'A';
let b = a; // Cópia o valor
console.log(a, b);

a = 'a';
console.log(a, b);


// Mutável
let c = [1, 2, 3];
let d = c; // Liga o array a com o b, se mudar a muda b

//Para copiar
//let d = [...c];
console.log(c, d); 

c.push(4);
console.log(c, d);

