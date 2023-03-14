const primeiroNome = prompt("Digite o seu primeiro nome: ");
const sobrenome = prompt("Digite o seu sobrenome: ");
const campoEstudos = prompt("Digite o seu campo de estudos: ");
const nascimento = prompt("Digite o seu ano de nascimento: ");

alert(
    "Recruta cadastrado com sucesso!\n \n" + 
    "Nome completo: " + primeiroNome + " " + sobrenome + " \n" +
    "Campo de estudo: " + campoEstudos + "\n" +
    "Idade: " + (2023 - nascimento)
)