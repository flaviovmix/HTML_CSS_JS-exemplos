function adicionarLinha() {    
        var real = document.getElementById('real');
        var dolar = document.getElementById('dolar');
        var valorConvertido = (dolar.value * real.value).toFixed(2).replace('.',',');
        var minhaTabela = document.getElementById("tabelaLista");

        var novaLinha = minhaTabela.insertRow(minhaTabela.rows.length);    
        var celula1 = novaLinha.insertCell(0);
        var celula2 = novaLinha.insertCell(1);
        var celula3 = novaLinha.insertCell(2);

        celula1.innerHTML = real.value;
        celula2.innerHTML = dolar.value;
        celula3.innerHTML = `R$ ${valorConvertido}`;
    }