import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-comprar");

export function adicionarItem(evento) {
    evento.preventDefault();

    if(item.value === "") {
        alert("Favor, informe um nome para o ítem");
        return;
    }
    
    const itemDaLista = criarItemDaLista(item.value);
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);


}