let drink = "chá"; 
let valor;

switch (drink) {
    case "café":
        valor = 3.50;
        console.log(`Hmm, café é uma delícia e custará apenas: R$ ${valor.toFixed(2)}.`);
        break;
    case "leite":
        valor = 3;
        console.log(`Hmm, leite é uma delícia e custará apenas: R$ ${valor.toFixed(2)}.`);
        break;
    case "chá":
        valor = 2.60;
        console.log(`Hmm, chá é uma delícia e custará apenas: R$ ${valor.toFixed(2)}.`);
        break;
    default:
        console.log("Poxa, você escolheu uma opção inválida. Por favor, digite café, leite ou chá.");
}
