// try {
// // É executa quando não há erros
// } catch(err) {
// // É executada quando há erros
// } finally {
// // Sempre executado    
// }

try {
    // console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou o erro');
    console.log('Fechei o arquivo');
} catch (err) {
    console.log('Tratando o erro');
} finally {
    console.log('FINALLY: Eu sempre sou executado');
}

console.log('##########')

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data);
    console.log(hora);
} catch (err) {
    console.log(err);
} finally {
    console.log('Tenha um bom dia.');
}