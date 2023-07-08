async function buscaEndereco(cep) {
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`) // await = aguardam
        var consultaCEPConvertida = await consultaCEP.json()
        if(consultaCEPConvertida.erro) {
            throw Error('Esse CEP não existe.');
        }
        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        console.log(erro)
    }
}

/* let ceps = ['01001000', '01001001', '01001005'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
Promise.all(conjuntoCeps).then(respostas => console.log(respostas)); */



/* .then(resposta => resposta.json()) // then = então
    .then(r => { // => arrow function
        if (r.erro) {
            throw Error('Esse CEP não existe.') // throw = lançar
        } else {
            console.log(r)
        }
    })
    .catch(erro => console.log(erro)) // catch = pegue
    .finally(mensagem => console.log('Processamento concluído.')); // finally = finalmente */


/* setTimeOut - faz acontecer algo depois de um certo tempo que definirmos

Event Loop - ciclo que monitora e executa as ações que mandamos para o JavaScript

Call Stack - mecanismo que organiza como irá funcionar o script quando existem muitas funções

Task Queue - fila de tarefas assíncronas

Callbacks - funções enviadas como parâmetro para outras funções

API - Interface de Programação de Aplicações */


