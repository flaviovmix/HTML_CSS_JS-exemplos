import { verificarListaVazia } from "./verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-comprar");
const listaComprados = document.getElementById("lista-comprados");

const exclucirItem = (elemento) => {
    let confirmacao = confirm("Tem certeza que deseja excluir esse ítem?");

    if(confirmacao) {
        elemento.remove();

        verificarListaVazia(listaDeCompras);
        verificarListaComprados(listaComprados);
    }
}

export {exclucirItem};