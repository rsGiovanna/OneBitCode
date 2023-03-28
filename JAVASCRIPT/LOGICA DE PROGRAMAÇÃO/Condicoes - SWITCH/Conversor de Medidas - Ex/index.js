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
        alert("O resultado é:  " + valorMetros * 1000 + "mm")
        break
    case "2":
        alert("O resultado é:  " + valorMetros * 100 + "cm")
        break
    case "3":
        alert("O resultado é:  " + valorMetros * 10 + "dm")
        break
    case "4":
        alert("O resultado é:  " + valorMetros / 10 + "dam")
        break
    case "5":
        alert("O resultado é:  " + valorMetros / 100 + "hm")
        break
    case "6":
        alert("O resultado é:  " + valorMetros / 1000 + "km")
        break
    default:
        alert("Opção inválida")
}