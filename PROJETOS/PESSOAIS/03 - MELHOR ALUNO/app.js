var id = 3;
var melhorMedia = 7;
var melhorAluno = "nenhum";

const input = document.getElementById('imagemInput');
const preview = document.getElementById('imagemPreview');

input.addEventListener('change', function () {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function () {
            preview.src = reader.result;
            preview.style.display = 'inline';
        });

        reader.readAsDataURL(file);
    }
});

function adicionarLinha() {
    var minhaTabela = document.getElementById("tabelaLista");
    var nome = document.getElementById('nome-pessoa');
    var nascimento = document.getElementById('nascimento');
    var nota1 = document.getElementById("nota1");
    var nota2 = document.getElementById("nota2");
    var nota3 = document.getElementById("nota3");
    var sexo = document.getElementById("sexo");
    var EspeialChecked = document.getElementById("input-hecked");

    if ((nome.value==="") || (nota1.value==="") || (nota2.value==="")) {
        alert("Dados incorretos. Informe o nome e as notas do aluno.")
    }else {
        var areaMelhorAluno = document.getElementById("area-melhor-aluno");
        var media = ((parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota2.value))/3).toFixed(1);

        var dataNascimento = new Date(nascimento.value)
        var dataAtual = new Date();
        var diferenca = dataAtual.getTime() - dataNascimento.getTime();
        var idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
    
        var novaLinha = minhaTabela.insertRow(minhaTabela.rows.length);    
        var celId = novaLinha.insertCell(0);
        var celNome = novaLinha.insertCell(1);
        var celNota1 = novaLinha.insertCell(2);
        var celNota2 = novaLinha.insertCell(3);
        var celNota3 = novaLinha.insertCell(4);
        var celMedia = novaLinha.insertCell(5);
        var celIdade = novaLinha.insertCell(6);
        var celCarFisicas = novaLinha.insertCell(7);
        var celNecEspeciais = novaLinha.insertCell(8);

        celNome.classList.add("coluna-nome");
        celNota1.classList.add("coluna-nota1");
        celNota2.classList.add("coluna-nota2");
        celNota3.classList.add("coluna-nota3");
        celMedia.classList.add("coluna-media");
        celIdade.classList.add("coluna-media");
        celCarFisicas.classList.add("caracteristicas-fisicas");
        celCarFisicas.classList.add("colunaCF");
    
        id++;
        celId.innerHTML = `<strong>${id}</strong>`;
        celNome.innerHTML = nome.value;
        celNota1.innerHTML = nota1.value;
        celNota2.innerHTML = nota2.value;
        celNota3.innerHTML = nota3.value;
        celMedia.innerHTML = media;
        celIdade.innerHTML = `${idade} anos`;

        if (sexo.value == "Feminino"){
            if(idade<=5){
                celCarFisicas.innerHTML = '<img src="icone/bb.png" class="icone" alt="" srcset=""></img>';
            }else if(idade<12) {
                celCarFisicas.innerHTML = '<img src="icone/cf.png" class="icone" alt="" srcset=""></img>';
            }else if(idade<=18) {
                celCarFisicas.innerHTML = '<img src="icone/tf.png" class="icone" alt="" srcset=""></img>';
            }else if(idade<=50){
                celCarFisicas.innerHTML = '<img src="icone/jf.png" class="icone" alt="" srcset=""></img>';
            }else{
                celCarFisicas.innerHTML = '<img src="icone/if.png" class="icone" alt="" srcset=""></img>';
            }
        }else {
            if(idade<=5){
                celCarFisicas.innerHTML = '<img src="icone/bb.png" class="icone" alt="" srcset=""></img>';
            }else if(idade<12) {
                celCarFisicas.innerHTML = '<img src="icone/jm.png" class="icone" alt="" srcset=""></img>';
            }else if(idade<=18) {
                celCarFisicas.innerHTML = '<img src="icone/jm.png" class="icone" alt="" srcset=""></img>';
            }else if(idade<=50){
                celCarFisicas.innerHTML = '<img src="icone/am.png" class="icone" alt="" srcset=""></img>';
            }else{
                celCarFisicas.innerHTML = '<img src="icone/im.png" class="icone" alt="" srcset=""></img>';
            }            
        }

        if (EspeialChecked.checked) {
            celNecEspeciais.innerHTML = `<img src="icone/ac.png" class="icone-ac" alt="" srcset="">`;
        }

    
        if(media > melhorMedia) {
            melhorAluno = nome.value;
            melhorMedia = media;
            areaMelhorAluno.innerHTML = `O melhor aluno(a) é <strong>${melhorAluno}</strong> com a média <strong>${melhorMedia}</strong>`
        }
     }

    // nome.value = ""; 
    // nota1.value = ""; 
    // nota2.value = "";
    // nota2.value = "";
    nome.focus();

}