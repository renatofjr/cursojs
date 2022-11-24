const numero = Number(prompt('Digite um número:'));

const numeroTitulo = document.getElementById("numero-titulo");
const raizQuadrada = document.getElementById("raiz-quadrada");
const seInteiro = document.getElementById("se-inteiro");
const seNan = document.getElementById("se-nan");
const arredCima = document.getElementById("arred-cima");
const arredBaixo = document.getElementById("arred-baixo");
const arredDec = document.getElementById("arred-dec");

numeroTitulo.innerHTML = numero;
raizQuadrada.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
seInteiro.innerHTML = `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
seNan.innerHTML = `<p>É NaN: ${Number.isNaN(numero)}</p>`;
arredCima.innerHTML = `<p>Arredondamento para baixo: ${Math.floor(numero)}</p>`;
arredBaixo.innerHTML = `<p>Arredondamento para cima: ${Math.ceil(numero)}</p>`;
arredDec.innerHTML = `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
