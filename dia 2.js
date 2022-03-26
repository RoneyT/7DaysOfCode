let nome = prompt("Qual o seu nome?")
let idade = prompt("Quantos anos você tem?")
let linguagem = prompt("Qual linguagem de programação você está estudando?")
let mensagem = ("Olá "+ nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + " !")

alert(mensagem);
console.log("Olá "+ nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + " !")

let escolha = prompt("Você gosta de estudar " + linguagem +" ? Responda com o número 1 para SIM ou 2 para NÃO.")

if (escolha == 1) {
  alert("1 > Muito bom! Continue estudando e você terá muito sucesso.")
  console.log("1 > Muito bom! Continue estudando e você terá muito sucesso.")
} else {
  alert( "2 > Ahh que pena... Já tentou aprender outras linguagens?")
  console.log( "2 > Ahh que pena... Já tentou aprender outras linguagens?")
}
