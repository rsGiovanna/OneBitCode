function calcularAreaTriangulo() {
    const base = prompt("Informe a base do triângulo: ")
    const altura = prompt("Informe a altura do triângulo: ")
    return base * altura / 2
}
function calcularAreaRetangulo() {
    const base = prompt("Informe a base do retângulo: ")
    const altura = prompt("Informe a altura do retângulo: ")
    return base * altura
}
function calcularAreaQuadrado() {
    const lado = prompt("Informe a lado do quadrado: ")
    return lado * lado
}
function calcularAreaTrapezio() {
    const baseMaior = parseFloat(prompt("Informe a base maior do trapezio: "))
    const baseMenor = parseFloat(prompt("Informe a base menor do trapezio: "))
    const altura = prompt("Informe a altura do trapezio: ")
    return (baseMaior + baseMenor) * altura / 2
}
function calcularAreaCirculo() {
    const raio = prompt("Informe o raio do círculo: ")
    return (3, 14 * raio * raio)
}

function exibirMenu() {
    return prompt(
        "Calculadora Geometrica:\n" +
        "1 - Calcular área do Triângulo\n" +
        "2 - Calcular área do Retângulo\n" +
        "3 - Calcular área do Quadrado\n" +
        "4 - Calcular área do Trapézio\n" +
        "5 - Calcular área do Círculo\n" +
        "6 - Sair"
    );
}

function executar() {
    let opcao = ""
    do {
        opcao = exibirMenu()
        let resultado

        switch (opcao) {
            case "1":
                resultado = calcularAreaTriangulo()
                break
            case "2":
                resultado = calcularAreaRetangulo()
                break
            case "3":
                resultado = calcularAreaQuadrado()
                break
            case "4":
                resultado = calcularAreaTrapezio()
                break
            case "5":
                resultado = calcularAreaCirculo()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida!")
        }

        if (resultado){
            alert("Resultado: " + resultado)
        }
    } while (opcao != "6")
}

executar()