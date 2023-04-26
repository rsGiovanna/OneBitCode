let saldo = prompt("Informe a quantidade de dinheiro inicial:")
saldo = parseFloat(saldo)
let opcao = ""

do {
    opcao = prompt(
        "Saldo disponível: R$" + saldo +
        "\n1. Adicionar dinheiro" +
        "\n2. Remover dinheiro" +
        "\n3. Sair"
    )
    switch(opcao) {
        case "1":
            saldo += parseFloat(prompt("Informe a quantidade de dinheiro a ser adicionada:"))
            break
        case "2":
            saldo -= parseFloat(prompt("Informe a quantidade de dinheiro a ser removida:"))
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Opção inválida!")

    }
} while(opcao !== "3")