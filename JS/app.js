//let titulo = document.querySelector('h1');
//titulo.innerHTML = "Jogo do número secreto";

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número 1 e 10.';

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroScreto = gerarNumeroAleatorio();
let tentativas = 1;

console.log(numeroScreto);
mensagemInicial();

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    let mensagemParagrafo = `Escolha número entre 1 e ${numeroLimite}.`;
    exibirTextoNaTela('p', mensagemParagrafo);
}

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.1});
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroScreto) {

        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns, você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else {

        if (chute > numeroScreto) {
            exibirTextoNaTela('p', 'o número secreto é menor.');
        }else {
            exibirTextoNaTela('p', 'o número secreto é maior.');
        }

        tentativas++;
        limparCampo();

    }
}

function reiniciarJogo() {
    numeroScreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    console.log(numeroScreto);
    document.getElementById('reiniciar').setAttribute('disabled',true);
}