function adicionarLinha() {
    var nome = document.getElementById('nome-pessoa');
    var telefone= document.getElementById('telefone-pessoa');


    var minhaTabela = document.getElementById("tabelaLista");
    var novaLinha = minhaTabela.insertRow(minhaTabela.rows.length);
    var celula1 = novaLinha.insertCell(0);
    var celula2 = novaLinha.insertCell(1);

    celula1.innerHTML = nome.value;
    celula2.innerHTML = telefone.value;
}