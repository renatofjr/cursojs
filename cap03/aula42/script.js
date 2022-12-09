// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura
// de uma imagem (number). Retorne true se a imagem estiver no modo paisagem.

function ePaisagem1(largura, altura) {
    return largura > altura;
}

const ePaisagem2 = (largura, altura) => largura > altura;

console.log(ePaisagem1(1920, 1080));
console.log(ePaisagem2(1080, 1920));