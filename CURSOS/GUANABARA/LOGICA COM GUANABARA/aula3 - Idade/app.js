function adicionarLinha() {    
        var nome = document.getElementById('nome-pessoa');
        var ano_atual = document.getElementById('ano-atual');
        var ano_de_nascimento = document.getElementById('ano-de-nascimento');
        var idade = ano_atual.value - ano_de_nascimento.value;
        var minhaTabela = document.getElementById("tabelaLista");

        var novaLinha = minhaTabela.insertRow(minhaTabela.rows.length);    
        var celula1 = novaLinha.insertCell(0);
        var celula2 = novaLinha.insertCell(1);
        var celula3 = novaLinha.insertCell(2);
        var celula4 = novaLinha.insertCell(3);

        celula1.innerHTML = nome.value;
        celula2.innerHTML = ano_atual.value;
        celula3.innerHTML = ano_de_nascimento.value;
        celula4.innerHTML = `${idade} anos`;
    }
