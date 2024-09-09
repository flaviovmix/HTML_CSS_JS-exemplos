export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo nome do ítem");

    if(novoItem !== null && novoItem.trim() !== "") {
        const itemTextoAtualizado = elemento.querySelector("#item-titulo");
        itemTextoAtualizado.textContent = novoItem;

        const estavaComprado = elemento.querySelector(".checkbox-input").checked;

        if(estavaComprado) {
            elemento.querySelector(".checkbox-input").checked = true;
            elemento.querySelector(".checkbox-customizado").classList.add("checked");
            itemTextoAtualizado.style.textDecoration = "line-through";
        }
    }
}