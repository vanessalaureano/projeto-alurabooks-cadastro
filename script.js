async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";

    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`) // await = aguardam
        var consultaCEPConvertida = await consultaCEP.json()
        if(consultaCEPConvertida.erro) {
            throw Error('Esse CEP não existe.'); // throw = lançar
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>O CEP é inválido. Tente novamente.</p>`;
        console.log(erro)
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

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


