
// i - index
for (let i = 0; i <= 5; i++) {
    // if ((i % 2) === 0) {
    //     console.log(`Linha ${i}`);
    // }

    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

//                  0       1      2
const frutas = [ 'Maça', 'Pêra', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}