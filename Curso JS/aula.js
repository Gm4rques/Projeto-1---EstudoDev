console.log('Gabriel')
console.log('Welcome')

//VARIAVEIS

/* let idade = 5
console.log(idade)
let altura = 180
console.log(altura) */

// camelCase <= boas praticas

/* Usar const mais do que let é boa pratica ! 
usar let apenas quando houver necessidade,
de mudar algo no percurso do codigo */

let nome = 'Gabriel' // string lateral
let idade = 27 // number lateral
let estaAprovado = true // boolean
let sobrenome = undefined    //undefined = nao atribuido
let corSelecionado = null // quando voce quer redefinir um valor




let pessoa = {
    nome: 'Gabriel',
    idade:  27,
    estaAprovado: true,
    sobrenome: 'Marques'

}
console.log(pessoa)


let familia = [true,30,'Gabriel',63]
console.log(familia.length)
console.log(familia[2])


let especificacoes = ['Gabriel',27,'Santa Ruth',69]

// como nomear uma função? Verbo + Substantivo = ação + oque ela faz

let corSite = "azul"
function resetaCor (cor, tonalidade){
    corSite = cor + ' ' + tonalidade
}

console.log(corSite)
resetaCor("vermelho", "escuro")
console.log(corSite)

// simplificar if else
//tem um cliente, 100pts = premium, se nao ele é comum

let pontos = 200
let tipo = pontos > 100 ? 'premium' : 'comum'
console.log(tipo)


let a = 'vermelho'
let b = 'azul'

let c = a
a = b
b = c

console.log(a)
console.log(b)

