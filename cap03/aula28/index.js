// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix

// const data = new Date(2019, 3); // ano, mês, dia, hora, minuto, segundos, milessegundo
const data = new Date('2019-04-20 20:20:59');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()) + 1; // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Min', data.getHours());
console.log('Seg', data.getMinutes());
console.log('ms', data.getSeconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString());
console.log(Date.now());

function zeroEsquerda(num) { 
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = data.getDate();
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data1 = new Date();
const dataBrasil = formataData(data1);
formataData(dataBrasil);