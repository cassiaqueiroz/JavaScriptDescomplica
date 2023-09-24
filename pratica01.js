const rlSync = require('readline-sync')

const nome = rlSync.question("Por favor, digite seu primeiro nome: \n")
const sobrenome = rlSync.question("Agora digite seu sobrenome: \n")
const nomeCompleto = `${nome} ${sobrenome}`
console.log(`Obrigada! Aqui temos seu nome completo: ${nomeCompleto}.`)