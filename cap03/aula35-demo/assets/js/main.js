const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'}
]

const container = document.querySelector('.container');
const div = document.createElement('div');

function gerarMsg(el) {
    for (let i = 0; i < el.length; i++) {
        let { tag, texto } = elementos[i];
        let tagCriada = document.createElement(tag);
        let textoCriado = document.createTextNode(texto);
        // tagCriada.innerHTML = texto;
        // tagCriada.innerText = texto;
        tagCriada.appendChild(textoCriado);
        div.appendChild(tagCriada);
    }
    return
}

container.appendChild(div);

gerarMsg(elementos);