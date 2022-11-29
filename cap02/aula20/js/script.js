function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function criaPessoa(nome, sobrenome, peso, altura) {
        return { nome, sobrenome, peso, altura }
    }

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push(criaPessoa(nome.value, sobrenome.value, peso.value, altura.value));
        resultado.innerHTML += `<p>Incluído: ${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value} </p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();