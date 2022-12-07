//                 0    1    2    3    4    5    6    7    8
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const num = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// ... rest, ... spread
// const [um, dois, tres, ...resto] = numeros;
const [um, , tres, , cinco, , sete] = numeros;
const [list1, list2, list3] = num;

console.log(um, tres, cinco);

console.log(num[1][2]);
console.log(list3[2]);
// console.log(resto);