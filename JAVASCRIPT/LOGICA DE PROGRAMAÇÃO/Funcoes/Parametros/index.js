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
function novoUsuario(nome, tipo = "admin", email, senha) {
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }
    console.log(usuario);
}

criarUsuario("João", "joao@joao", "123");
novoUsuario("João", "admin", "joao@joao", "123");