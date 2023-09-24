//Função vem do Latim: “realizar, executar"
//Argumento (Latim): “tornar claro, demonstrar"

//Sintaxes:
//Sintaxe 01 - declaração de função
function multiplicar(a, b) {
  return a * b;
}
var multi = multiplicar(3, 4);
console.log("Sintaxe 01: " + multi);

//Sintaxe 02 - utilizando o construtor Function()
//Espera argumentos tipo string
//Não recebe nenhum argumento que especifique o nome da função
/*
A convenção geral para funções construtoras 
(usadas com new para criar objetos): 
começar com letra maiúscula;
funções regulares (veja um exemplo abaixo):
começar com uma letra minúscula.
*/
var multiply = new Function("x", "y", "return x * y");
function multiplying() {
  resultado = multiply(3, 4);
  console.log("Sintaxe 02: " + resultado);
}
multiplying();

//Tipos de função:
//Função regular
function somar(w, z) {
  return w + z;
}
var sum = somar(3, 4);
console.log("Função Regular: " + sum);

//Função anônima (não recebe um nome)
var divi = function (c, d) {
  return c / d;
};
console.log("Função Anônima: " + divi(9, 3));

//Arrow Function
const subtrair = (n1, n2) => {
  return n1 - n2;
};
console.log("Arrow Function: " + subtrair(100, 57));

//Função dentro de função
// Função externa: saudação
var nome = "Sara";
function saudacao(nome) {
  console.log(`Olá, ${nome}!`);

  // Função interna: mensagem
  function mensagem() {
    console.log("Espero que você esteja bem!");
  }

  // Chamando a função interna dentro da função externa
  mensagem();
}

// Chamando a função externa
saudacao(nome);

//Function + CharAt + toUpperCase + Slice + Map
var produtos = ["maçã", "banana", "laranja"];
var pets = ["nina", "mel", "ratinho"];

// Função para capitalizar a primeira letra
function primieraEmMaisculo(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

var produtosEmMaiusculas = produtos.map(primieraEmMaisculo);
var petsEmMaiusculas = pets.map(primieraEmMaisculo);
console.log(produtosEmMaiusculas);
console.log(petsEmMaiusculas);
