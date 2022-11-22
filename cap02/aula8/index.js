/*
Renato Jr tem 36 anos, pesa 84kg 
tem 1.8 de altura e seu IMC é de 24.280263614290668
Renato Jr nasceu em 1980
*/

const nome = 'Renato';
const sobrenome = 'Jr';
const idade = 36;
const peso = 84;
const altura = 1.86;

let imc; // peso / (altura * altura)
let anoNasc = new Date();
anoNasc = anoNasc.getFullYear()-idade
imc = parseFloat(peso / (altura ** 2)).toFixed(2)
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNasc}`)

