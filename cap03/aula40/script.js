const numeros = [1,2,3,4,5,6,7,8,9];

for (let num of numeros) {
    if (num === 2) {
        console.log(`Pulei o número ${num}`);
        continue; //pula e continua
    } else if (num === 6) {
        console.log(`Sai do laço no número ${num}`);
        break; //sai do laço
    }
    console.log(num);
}

console.log('##########')

let i = 0;
while (i < numeros.length) {
    let num = numeros[i]

    if (num === 2) {
        console.log(`Pulei o número ${num}`);
        i++;
        continue; //pula e continua
    } else if (num === 6) {
        console.log(`Sai do laço no número ${num}`);
        i++;
        break; //sai do laço
    }
    console.log(num);

    i++;
}