const rlSync = require('readline-sync')

const nome = rlSync.question("Qual o seu nome? \n")
const idade = rlSync.question("Qual a sua idade? \n")

console.log(`Parabéns, ${nome}! Você já viveu ${idade} anos!`)
