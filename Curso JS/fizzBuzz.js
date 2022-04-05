const resultado = fizzBuzz(55)
console.log(resultado)

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
    return 'Não é um número.'
    if (entrada % 3 === 0)
    return 'fizz'
    if (entrada % 5 === 0)
    return 'Buzz'
    if (entrada % 3 === 0 && entrada === 5)
    return console.log(entrada)
}