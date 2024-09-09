import {exclucirItem} from "./excluirItem.js";

const listaComprados = document.getElementById("lista-comprados");
const listaDeCompras = document.getElementById("lista-de-comprar");

let contador = 0;

export function criarItemDaLista(item) {
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("item-lista-container");
    
    const containerNomeDoItem = document.createElement("div");
    containerNomeDoItem.classList.add("liscontainer-nome-compra");

    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("checkbox-container");

    const checkBoxInput = document.createElement("input");
    checkBoxInput.type = "checkbox";
    checkBoxInput.classList.add("checkbox-input");
    checkBoxInput.id = "checkbox-" + contador++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkBoxInput.id);

    checkboxLabel.addEventListener("click", function(evento) {
        const checkBoxInput = evento.currentTarget.querySelector(".checkbox-input");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");

        if(checkBoxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            /*itemTitulo.style.textDecoration = "line-through";*/
            itemTitulo.classList.add("item-comprado");
            itemTitulo.classList.remove("item-nao-comprado");
            listaComprados.appendChild(itemDaLista);
        } else {
            checkboxCustomizado.classList.remove("checked");
            /*itemTitulo.style.textDecoration = "none";*/
            itemTitulo.classList.add("item-nao-comprado");
            itemTitulo.classList.remove("item-comprado");
            listaDeCompras.appendChild(itemDaLista);
        }
    })
    
    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkBoxInput);
    checkboxLabel.appendChild(checkboxCustomizado);
    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox);

    const nomeDoItem = document.createElement("p");
    nomeDoItem.id = "item-titulo";
    nomeDoItem.innerText = item;
    containerNomeDoItem.appendChild(nomeDoItem);

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    const botaoEditar = document.createElement("button");
    botaoRemover.classList.add("botao-acao");
    botaoEditar.classList.add("botao-acao");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";

    botaoRemover.addEventListener("click", function() {
        exclucirItem(itemDaLista);
    });
    botaoRemover.appendChild(imagemRemover);

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";

    botaoEditar.addEventListener("click", function() {
        editarItem(itemDaLista);
    });

    botaoEditar.appendChild(imagemEditar);

    containerBotoes.appendChild(botaoRemover);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);

    const itemData = document.createElement("p");
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR",
        { weekday: "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", 
        {hour: "numeric", minute: "numeric"})}`;
     itemData.classList.add("item-lista-texto");

    itemDaLista.appendChild(containerItemLista);
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}