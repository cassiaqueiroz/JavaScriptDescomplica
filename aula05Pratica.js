const array = [1, "dois", 3, "quatro", 5, "seis", true];

// Utilizando map para duplicar os números e transformar as strings em letras maiúsculas

const mappedArray = array.map((element) => {
  if (typeof element === "number") {
    return element * 2;
  } else if (typeof element === "string") {
    return element.toUpperCase();
  } else {
    return element;
  }
});

console.log("Array mapeado:", mappedArray);

// Utilizando filter para filtrar somente os números do array

const filteredArray = array.filter((element) => typeof element === "number");

console.log("Array filtrado:", filteredArray);

// Utilizando reduce para somar os números do array

const sum = array.reduce((accumulator, element) => {
  if (typeof element === "number") {
    return accumulator + element;
  } else {
    return accumulator;
  }
}, 0);

console.log("Soma:", sum);
