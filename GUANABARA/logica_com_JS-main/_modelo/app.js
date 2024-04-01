//app.js
var id = 3;
var data = new Date();
function adicionarLinha() {    
    
    var ano_atual = data.getFullYear();
    var nome = document.getElementById('nome-pessoa');
    var ano_de_nascimento = document.getElementById('ano-de-nascimento');
    var sexo = document.getElementById("sexo");
    var checked = document.getElementById("input-hecked");
    var idade = ano_atual - ano_de_nascimento.value;
    var minhaTabela = document.getElementById("tabelaLista");

    var novaLinha = minhaTabela.insertRow(minhaTabela.rows.length);    
    var celula1 = novaLinha.insertCell(0);
    var celula2 = novaLinha.insertCell(1);
    var celula3 = novaLinha.insertCell(2);
    var celula4 = novaLinha.insertCell(3);
    var celula5 = novaLinha.insertCell(4);

    id++;
    celula1.innerHTML = `<strong>${id}</strong>`;
    celula2.innerHTML = nome.value;
    celula3.innerHTML = `${idade} anos`;
    celula4.innerHTML = sexo.value;
    if(checked.checked) {
        celula5.innerHTML = `
            <span class="de-maior">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                    <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
            </span>
        `
        }else {
        celula5.innerHTML = `
            <span class="de-menor">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-ban-fill" viewBox="0 0 16 16">
                    <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M2.71 12.584q.328.378.706.707l9.875-9.875a7 7 0 0 0-.707-.707l-9.875 9.875Z" />
                </svg>
            </span>
        `
    
    }
    nome.value = ""; 
    ano_de_nascimento.value = ""; 
    sexo.value = "---";
    checked.checked = false;
    nome.focus();
;
}