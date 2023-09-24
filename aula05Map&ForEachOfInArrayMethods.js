//Map - 
var numeros = [5, 2, 4, 7];
const n = numeros.map(function (number) {
  return number * 2;
});
console.log(n);

const socios = [
  { nome: "Cláudia", idade: 41 },
  { nome: "Raquel", idade: 47 },
  { nome: "Beatriz", idade: 52 },
  { nome: "Jaime", idade: 46 },
];

names = socios.map((integrante) => integrante.nome);
console.log(names);

//For...of
/*
Introduzido no ECMAScript 2015 (ES6), 
oferece uma maneira mais simples e legível 
de percorrer elementos iteráveis, como arrays, 
em comparação com o loop for. 
Útil quando você deseja percorrer os elementos 
sem se preocupar com índices ou controle de iteração
*/
for (let valor of numeros) {
  console.log(valor);
}

console.log(`\n`);

//ForEach
/*
Se você estiver simplesmente percorrendo os elementos de um array 
e executando uma ação em cada um deles, o uso de forEach é mais recomendado 
devido à sua legibilidade e simplicidade. 
No entanto, se você precisar de um controle mais preciso sobre a iteração 
ou estiver lidando com cenários que exigem compatibilidade 
com ambientes mais antigos, um loop for pode ser a melhor escolha.
*/

//Imprimindo elementos do array com forEach
numeros.forEach((valor) => console.log(valor));
console.log(`\n`);

//Somando elementos do array com forEach
var total = 0;
numeros.forEach((valor) => {
  total += valor;
});
console.log(total);
console.log(`\n`);

//Outra forma de sintaxe do forEach
numeros.forEach(function (valor, indice, array) {
  console.log(array[indice]);
});
console.log(`\n`);

//For..in
//É outra opção para iteração de array
/*É usado para iterar sobre as propriedades enumeráveis de um objeto, 
não para iterar diretamente sobre os elementos de um array
*/
//contando ou acompanhando a posição atual no array com a const "indice"
for (const indice in socios) {
  //armazenando cada objeto do array "socios" numa const ("socio")
  const socio = socios[indice];
  console.log(`Nome: ${socio.nome}; Idade: ${socio.idade}.`);
  console.log(socio)
}

