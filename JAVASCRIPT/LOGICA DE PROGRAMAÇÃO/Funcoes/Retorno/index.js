function calcularMedia(a, b){
    const media = (a + b) / 2
    return media
}

const resultado = calcularMedia(7, 2)

console.log(resultado)

function criarProduto(nome, preco){
    const produto ={
        nome,
        preco,
        estoque: 1
    }
    return produto
}


console.log(criarProduto("Notebook Intel Core i3 8GB", 2500))