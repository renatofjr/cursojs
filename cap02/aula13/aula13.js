// let umaString = "Um \"texto\"";
let umaString = "Um texto";

// Concatenação de strings
console.log(umaString.concat(' em', ' um', ' lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

// Retorna letra da posição passada
console.log(umaString.charAt(6));
console.log(umaString[9]);

// Indice que a palavra começa
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('o', 3)); // Começa a procurar depois do indice 3
console.log(umaString.lastIndexOf('o', 3)); // Começa a buscar de trás pra frente
console.log(umaString.search(/x/)); // Aceita expressão regular

// Expressão regular
console.log(umaString.match(/[a-z]/g));

umaString = 'O rato roeu a roupa do rei de roma.';
console.log(umaString.replace(/r/, '#'));
console.log(umaString.replace(/r/g, '#'));

// Tamanho da string
console.log(umaString.length);

// Fatia a string
console.log(umaString.slice(2, 5));
console.log(umaString.slice(-5, -1));
console.log(umaString.substring(umaString.length - 5, umaString.length - 1));
console.log(umaString.split(' '));

console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());

