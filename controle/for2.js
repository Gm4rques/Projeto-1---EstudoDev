const notas = [5.5, 4.3, 2.6, 7.5, 6.4]

for (let i in notas) { 
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
