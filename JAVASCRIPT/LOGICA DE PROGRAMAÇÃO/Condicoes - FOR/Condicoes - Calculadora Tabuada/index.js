const numeroTabuada = prompt("Olá, eu sou o Rôbo da Tabuada!\n" + "Informe um número que você deseja calcular a tabuada: ")
let resultado = ""

for (let fator = 1; fator <= 20; fator++) {
    resultado += " -> " + numeroTabuada + " * " + fator + " = " + (numeroTabuada * fator) + "\n"
}

alert("Resultada da tabuada de " + numeroTabuada + ":\n\n" + resultado)