/*Os métodos que você está chamando, como reverse(), shift(), push(), etc., 
não alteram a referência ao array valores em si, 
mas sim modificam os elementos dentro do array.
É recomendável usar const e não let ou var
*/

//SOBRE SORT: https://www.youtube.com/watch?v=yc0TYlnZIp4

const valores = [-1, 0, 1, 2, 3, 4, 5, 6];

//Imprimindo a posição do elemento:
console.log(`Posição do número 3: ${valores.indexOf(3)}.`);

//Join - une elementos numa única string
console.log(`Tudo vira string aqui: ${valores.join(", ")}.`);

//Reverse - inverte a ordem dos elementos
valores.reverse();
console.log(`Valores invertidos: ${valores}.`);

//Shift - retira o 1º elemento
valores.shift();
//Note que a impressão vai agora sem o 1º elemento:
console.log(`Com Shift: ${valores}.`);

//Push - acrescenta um elemento no fim do array
valores.push(-2);
console.log(`Inserindo um elemento com o Push: ${valores}.`);

//Pop - retira o último elemento do array
valores.pop();
console.log(`Retirando o último elemento com o Pop: ${valores}.`);

//Slice - corta uma "fatia" do array
console.log(`"Fatiando" com Slice: ${valores.slice(1, 4)}.`);

//Imprimindo apenas números positivos com Filter
//Abaixo a função de seta recebe o argumento "numero" e verifica se ele é maior que zero
console.log(
  "Números positivos:",
/*
Essa sintaxe que tô usando para escrever o filter abaixo
é chamada de "arrow function", note o arrow (=>).
Toda arrow é abreviação de uma função anônima" (sem nome)
*/
//O parênteses na primeira vez que aparece "numero" é para organizar visualmente
  valores.filter((numero) => numero > 0), "."
);

//Find - retorna primeiro elemento que a máquina encontrar no array que preencha determindo requisito
console.log(
  "Primeiro número menor que 0 do array:",
  valores.find((number) => number < 0), "."
);

/*Delete - usado para remover o elemento de um índice. 
No entanto, não reorganiza automaticamente os índices do array. 
Em vez disso, ele define o elemento como "empty" (vazio).*/
delete valores[2];
console.log(valores); 
