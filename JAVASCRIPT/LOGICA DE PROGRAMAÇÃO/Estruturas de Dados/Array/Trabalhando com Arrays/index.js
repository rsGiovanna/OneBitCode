const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

//Adicionar Elementos no final do array
//Push
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

//Adicionar Elementos no começo do array
//Unshift
tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

//Remover elementos no final do array 
//Pop
const ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//Remover elementos no começo do array
//Shift
const primeiroElemento = arr.shift()
console.log(arr)
console.log(primeiroElemento)

//Pesquisar um elemento no array
//Includes
const inclui = arr.includes("Gandalf")
console.log(inclui)

//Pesquisar um elemento no array por indice
//IndexOf
const indice = arr.indexOf("Gandalf")
console.log(indice)

//Cortar os arrays
//Slice 
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

//Concatenar arrays
//Concat
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

//Substituição dos elementos de um array
//Splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

//Iterar sobre os elementos de um array
for(let indice = 0; indice < sociedade.length; indice++){
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição -> " + indice) 
}