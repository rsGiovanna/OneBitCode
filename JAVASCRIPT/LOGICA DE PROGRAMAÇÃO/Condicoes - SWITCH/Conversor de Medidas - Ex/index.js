const valorMetros = prompt("Escreva uma medida em metros: ")
const unidadeMedida = prompt(
    "Para qual unidade de medida deseja converter?" +
    "\n 1) Milímetro(mm)" +
    "\n 2) Centímetro(cm)" +
    "\n 3) Decímetro(dm)" +
    "\n 4) Decâmetro(dam)" +
    "\n 5) Hectômetro(hm)" +
    "\n 6) Quilômetro(km)"
)

switch (unidadeMedida) {
    case "1":
        alert("O valor em milímetro(mm) é: " + valorMetros * 1000)
        break
    case "2":
        alert("O valor em centímetro(cm) é: " + valorMetros * 100)
        break
    case "3":
        alert("O valor em decímetro(dm) é: " + valorMetros * 10)
        break
    case "4":
        alert("O valor em decâmetro(dam) é: " + valorMetros / 10)
        break
    case "5":
        alert("O valor em hectômetro(hm) é: " + valorMetros / 100)
        break
    case "6":
        alert("O valor em quilômetro(km) é: " + valorMetros / 1000)
        break
    default:
        alert("Opção inválida")
}