function getDiaSemanaTexto(diaSemana) {
    let diaSemanaText;

    switch (diaSemana) {
        case 0:
            diaSemanaText = 'Domingo';
            return diaSemanaText;
        case 1:
            diaSemanaText = 'Segunda';
            return diaSemanaText;
        case 2:
            diaSemanaText = 'Terça';
            return diaSemanaText;
        case 3:
            diaSemanaText = 'Quarta';
            return diaSemanaText;
        case 4:
            diaSemanaText = 'Quinta';
            return diaSemanaText;
        case 5:
            diaSemanaText = 'Sexta';
            return diaSemanaText;
        case 6:
            diaSemanaText = 'Sábado';
            return diaSemanaText;
        default:
            diaSemanaText = '';
            return diaSemanaText;
    }

}

const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();

// if (diaSemana === 0) {
//     diaSemanaText = 'Domingo';
// } else if (diaSemana === 1) {
//     diaSemanaText = 'Segunda';
// } else if (diaSemana === 2) {
//     diaSemanaText = 'Terça';
// } else if (diaSemana === 3) {
//     diaSemanaText = 'Quarta';
// } else if (diaSemana === 4) {
//     diaSemanaText = 'Quinta';
// } else if (diaSemana === 5) {
//     diaSemanaText = 'Sexta';
// } else if (diaSemana === 6) {
//     diaSemanaText = 'Sábado';
// } else {
//     diaSemanaText = '';
// }
const diaSemanaText = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaText);