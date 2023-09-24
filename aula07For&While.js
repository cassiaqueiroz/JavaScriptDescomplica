//For tradicional
var carros = [
  { id: 1, modelo: "Citroen", dono: "Fulano", preco: 100000 },
  { id: 2, modelo: "Ferrari", dono: "Ayrton Senna", preco: 250000 },
];

var donos = "";
for (var i = 0; i < carros.length; i++) {
  donos += carros[i].dono + " tem um " + carros[i].modelo + ".\n";
}
console.log(donos);
console.log("===============================");

//For...in - sintaxe mais reduzida que For tradicional

var donos = "";
for (const i in carros) {
  donos += carros[i].dono + " tem um " + carros[i].modelo + ".\n";
}
console.log(donos);
console.log("===============================");

/*
For...of - podemos iterar diretamente sobre os elementos do array 
em vez de índices ou propriedades. 
É uma maneira mais moderna e legível de iterar
*/
var donos = "";
for (const carro of carros) {
  donos += carro.dono + " tem um " + carro.modelo + ".\n";
}
console.log(donos);

//While
var w = 1;
var text = "";
while (w <= 3) {
  text += "Ahora 'w' es " + w + ".\n";
  w++;
}
console.log(text);

//Do while - é executado ao menos 1 vez, independente da condição
var dw = 0;
var textdw = "";
do {
  dw += 1;
  textdw += "Ahora 'dw' es " + dw + ".\n";
} while (dw <= 2);
{
}
console.log(textdw);

