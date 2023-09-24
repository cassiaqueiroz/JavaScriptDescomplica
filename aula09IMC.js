function criarInvestigado(nome, a, p) {
  return {
    nome,
    altura: a,
    peso: p,
    imc() {
      const indice = this.peso / (this.altura ** 2).toFixed(1);
      if (indice < 18.5) {
        console.log("Abaixo do peso");
      } else if (indice >= 18.5 && indice < 24.9) {
        console.log("Peso normal");
      } else if (indice >= 25 && indice < 29.9) {
        console.log("Acima do peso");
      } else if (indice >= 30 && indice < 34.9) {
        console.log("Obesidade 1");
      } else if (indice >= 35 && indice < 39.9) {
        console.log("Obesidade 2");
      } else if (indice >= 40) {
        console.log("Obesidade 3");
      }
    },
  };
}

const investigado01 = criarInvestigado("Cássia",1.56,49);
investigado01.imc();