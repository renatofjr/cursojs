function calcIMC() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function fazCalcIMC(evento) {

        evento.preventDefault();
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        let result = (peso.value / (altura.value ** 2)).toFixed(2);
        let msgResult = '';
        // let colorBackground = ''

        if (result < 18.5) {
            msgResult = 'Abaixo do peso';
            // colorBackground = '#FF0000'
        } else if (result < 24.9) {
            msgResult = 'Peso normal';
        } else if (result < 29.9) {
            msgResult = 'Sobrepeso';
        } else if (result < 34.9) {
            msgResult = 'Obesidade grau 1';
        } else if (result < 39.9) {
            msgResult = 'Obesidade grau 2';
        } else {
            msgResult = 'Obesidade grau 3';
        }

        resultado.innerHTML = `<p style="background-color: #eff0f1;">Seu IMC é ${result} (${msgResult})</p>`;
    }

    form.addEventListener('submit', fazCalcIMC);
}


calcIMC();