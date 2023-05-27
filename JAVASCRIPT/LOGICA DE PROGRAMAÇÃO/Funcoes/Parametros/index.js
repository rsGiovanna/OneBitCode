function dobro(x) {
    alert("O dobro de " + x + " é " + (x * 2));
}

/* dobro(); */

function dizerOla(nome = "Mundo") {
    alert("Olá, " + nome + "!");
}

/* dizerOla("João");
dizerOla(); */

function soma(a, b, c, d, e) {
    alert("O resultado da soma é " + (a + b + c + d + e));
}
/* soma(7, 6, 4, 1, 9); */

function criarUsuario(nome, email, senha, tipo = "admin") {
    const usuario = {
        nome, //mesmo que nome:nome
        tipo,
        email,
        senha
    }
    console.log(usuario);
}

function muitosPrametros(nome, telefone, endereço, aniversario, email, senha) {

}
function objetoComParametro(usuario) {
    usuario.nome
    usuario.telefone

}

muitosPrametros("João", "9999-9999", "Rua A", "01/01/2000", "joao@mail", "12345");

const dadosDoUsuario = {
    nome: "João",
    telefone: "9999-9999",
    endereço: "Rua A",
    aniversario: "01/01/2000",
    email: "joao@mail",
    senha: "12345"
}

objetoComParametro(dadosDoUsuario);
console.log(dadosDoUsuario);