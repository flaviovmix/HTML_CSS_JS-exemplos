function media(n1, n2) {
    return (parseFloat(n1) + parseFloat(n2)) / 2;
}

    function gerarTabela(nome, nota1, nota2, faltas) {
        var tabela = document.getElementById("corpoTabela");

        const linha = document.createElement("tr");

        const tdNome = document.createElement("td");
        tdNome.textContent = nome;
        linha.appendChild(tdNome);

        const tdNota1 = document.createElement("td");
        tdNota1.textContent = nota1;
        linha.appendChild(tdNota1);

        const tdNota2 = document.createElement("td");
        tdNota2.textContent = nota2;
        linha.appendChild(tdNota2);

        const media = document.createElement("td");
        media.textContent = (parseFloat(nota1) + parseFloat(nota2)) / 2;
        linha.appendChild(media);

        const tdFaltas = document.createElement("td");
        tdFaltas.textContent = faltas;
        linha.appendChild(tdFaltas);

        const aviso = document.createElement("tr");
        const tdAviso = document.createElement("td");
        tdAviso.colSpan = 6;
        tdAviso.style.textAlign = "center";
        tdAviso.style.fontWeight = "bold";
        tdAviso.style.padding = "5px";
        tdAviso.textContent = "Aluno reprovado por falta acima de 85%";
        aviso.appendChild(tdAviso);

        tabela.appendChild(linha);
        tabela.appendChild(aviso);

    }

var btnAdicionar = document.getElementById("adicionar");
btnAdicionar.addEventListener("click", () => {
    var nome = document.getElementById("nome").value;
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var faltas = document.getElementById("faltas").value;

    gerarTabela(nome, nota1, nota2, faltas);
}

);
// btnAdicionar.addEventListener("click", gerarTabela);