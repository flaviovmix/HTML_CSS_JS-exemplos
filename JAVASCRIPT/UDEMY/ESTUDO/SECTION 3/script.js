var funcionarios = [
    {
        'nome': 'Carlos Henrique da Silva',
        'idade': 45,
        'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
        
    },

    {
        'nome': 'Maria Helena Pereira',
        'idade': 32,
        'filhos': undefined,
        
    },

    {
        'nome': 'José Feliciano Maia',
        'idade': 39,
        'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
        
    }
];

var lista_elemento = document.getElementById("filhos");
for(i=0; i<funcionarios.length; i++) {

    if(funcionarios[i].filhos) {    
        var lista_filhos = funcionarios[i].filhos;

        for(j=0; j<lista_filhos.length; j++) {
            lista_elemento.innerHTML += '<p>' + lista_filhos[j] + '<br/>Filhos de ' + funcionarios[i].nome + '</p>';
        }
}
}