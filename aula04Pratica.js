// Array de números

const numeros = [5, 10, 15, 20, 25];

// Verificar se pelo menos um número do array não é par ou menor que 0

let algumNaoParOuMenorQueZero = false;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 !== 0 || numeros[i] < 0) {
    algumNaoParOuMenorQueZero = true;

    break;
  }
}

// Verificar se todos os números do array são divisíveis por 3 e 5

let todosDivisiveisPor3E5 = true;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 3 !== 0 || numeros[i] % 5 !== 0) {
    todosDivisiveisPor3E5 = false;

    break;
  }
}

console.log(
  "Pelo menos um número não é par ou menor que zero?",
  algumNaoParOuMenorQueZero
);

console.log(
  "Todos os números são divisíveis por 3 e 5?",
  todosDivisiveisPor3E5
);
