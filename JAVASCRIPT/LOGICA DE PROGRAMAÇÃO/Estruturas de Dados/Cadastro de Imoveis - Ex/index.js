const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        "Bem-vindo(a) ao cadastro de imóveis!\n" +
        "Total de Imóveis: " + imoveis.length +
        "\n\nEscolha uma opção:\n 1. Novo Imóvel\n 2. Listar Imóveis\n 3. Sair"
    )
    switch (opcao) {

        case "1":
            const imovel = {}
            imovel.proprietario = prompt("Informe o nome do Proprietário do Imóvel: ")
            imovel.quartos = prompt("Quantos quartos possui o Imóvel: ")
            imovel.banheiros = prompt("Quantos banheiros possui o Imóvel: ")
            imovel.garagem = prompt("O Imóvel possui garagem? (Sim/Não): ")

            const confirmacao = confirm("Deseja salvar este imóvel?\n" +
                "Proprietário: " + imovel.proprietario + "\n" +
                "Quartos: " + imovel.quartos + "\n" +
                "Banheiros: " + imovel.banheiros + "\n" +
                "Possui garagem? " + imovel.garagem
            )
            if (confirmacao) {
                imoveis.push(imovel)
                alert("Imóvel cadastrado com sucesso!")
            } else {
                alert("Voltando ao menu!")
            }
            break

        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nPossui garagem? " + imoveis[i].garagem
                )
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
    }
} while (opcao !== "3")