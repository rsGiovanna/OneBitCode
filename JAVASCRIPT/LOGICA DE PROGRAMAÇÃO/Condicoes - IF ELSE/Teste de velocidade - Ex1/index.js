const nome_veiculo1 = prompt("Insira o nome do primeiro veículo: ")
const velocidade_veiculo1 = prompt("Insira a velocidade do primeiro veículo: ")

const nome_veiculo2 = prompt("Insira o nome do segundo veículo: ")
const velocidade_veiculo2 = prompt("Insira a velocidade do segundo veículo: ")

if (velocidade_veiculo1 > velocidade_veiculo2) {
    alert(nome_veiculo1 + " é o veículo mais rápido")
} else if (velocidade_veiculo1 < velocidade_veiculo2) {
    alert(nome_veiculo2 + " é o veículo mais rápido")
} else{
    alert(nome_veiculo1 + " " + "e" + " " + nome_veiculo2 + " possuem velocidades iguais")
}
