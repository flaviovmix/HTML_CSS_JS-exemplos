// ATIVIDADE 1
var num1 = parseFloat( document.getElementById("num-1").innerHTML );
var num2 = parseFloat( document.getElementById("num-2").innerHTML );
var resultado = num1 + num2;

document.getElementById("resultado").innerHTML = "<strong>" +  resultado + "</strong>";

// ATIVIDADE 2

function celsiusToFahrenheit() {
    var fahrenheit = (9 * celsius / 5) + 32;
    return fahrenheit;
}

var celsius = parseFloat( document.getElementById("celsius").innerHTML );
document.getElementById("fahrenheit").innerHTML = "<strong>" + celsiusToFahrenheit(celsius) + "</strong>";

// ATIVIDADE 3
var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
];

var arry2 = grupos.slice(-2,);
arry2.push(["Mariana", "Felipe", "Carla"]);

document.getElementById("pre").innerHTML = arry2;

// ATIVIDADE 4 (a)
var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5': 420,
    'n_aval_4': 80,
    'n_aval_3': 33,
    'n_aval_2': 20,
    'n_aval_1': 4,

    'total_avaliacoes': function() {
        var total;
        total = this.n_aval_1;
        total = total + this.n_aval_2;
        total = total + this.n_aval_3;
        total = total + this.n_aval_4;
        total = total + this.n_aval_5;

        return total;
    },

    'media_avaliacoes': function() {
       
        var media;

        var valor_peso = 
            ( 5 * this.n_aval_5 ) +
            ( 4 * this.n_aval_4 ) +
            ( 3 * this.n_aval_3 ) +
            ( 2 * this.n_aval_2 ) +
            ( 1 * this.n_aval_1 )
        ;

        var somatório_pesos = 
            this.n_aval_5 +
            this.n_aval_4 +
            this.n_aval_3 +
            this.n_aval_2 +
            this.n_aval_1
        ;
        
        media = valor_peso / somatório_pesos;

        return media.toFixed(1);
    },
}

document.getElementById("categoria-principal").innerHTML = "<strong>" + curso.categoria[0] + "</strong>";
// ATIVIDADE 4 (b)
document.getElementById("total-avaliacoes").innerHTML = curso.total_avaliacoes();
document.getElementById("media-avaliacoes").innerHTML = curso.media_avaliacoes();

// ATIVIDADE 5
var pessoa = {
    'nome': 'Flávio',
    'sobrenome': 'Passos',
    'email': 'flaviovmix@gmail.com',
}

function gerarTabela(pessoa) {
    var 
        tabela = '<table class="tableBox">';
        tabela += '<tr><th>Nome Completo</th><th>Email</th></tr>';
        tabela += '<tr><td>' + pessoa.nome + ' ' + pessoa.nome +'</td><td>' + pessoa.email + '</td></tr>';
        tabela += '</table>';

    return tabela;
}

document.getElementById("table-pessoa").innerHTML = gerarTabela(pessoa);



