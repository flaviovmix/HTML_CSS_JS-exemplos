var carro = {
    'Ano': 2018,
    'Modelo': 'Fox',
    'Cilindradas': '1.8',
    'Combustível': 'Gasolina'
}

for(var prop in carro) {
    console.log(prop + ': ' + carro[prop]);
}