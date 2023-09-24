const readline = require("readline-sync"); // Importa a biblioteca readline-sync para leitura de entrada do usuário.

function lerNotas() {
  const notas = []; // Inicializa um array para armazenar as notas.

  // Loop para ler as notas do usuário.
  for (let i = 0; i < 3; i++) {
    const nota = parseFloat(readline.question(`Digite a nota ${i + 1}: `)); // Solicita uma nota ao usuário.
    notas.push(nota); // Adiciona a nota ao array de notas
    
  }

  return notas;
}

function calcularMediaPonderada(notas) {
  const pesos = [2, 3, 5];
  let somaPesos = 0; // Inicializa a variável para a soma dos pesos.
  let somaNotas = 0; // Inicializa a variável para a soma das notas.

  // Loop para calcular a soma dos pesos e a soma ponderada das notas.
  for (let i = 0; i < notas.length; i++) {
    somaPesos += pesos[i];
    somaNotas += notas[i] * pesos[i];
  }

  const media = somaNotas / somaPesos; // Calcula a média ponderada.
  return media;
}

function main() {
  console.log("Calculadora de Média Ponderada \n");

  const notas = lerNotas(); // Chama a função lerNotas para obter as notas do usuário.
  const media = calcularMediaPonderada(notas); // Calcula a média ponderada das notas.

  console.log(`\nA média ponderada do aluno é: ${media.toFixed(2)}.`);
}

main(); // Chama a função principal para iniciar o programa.
