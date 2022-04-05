// Recebe uma quantidade de valores para avaliar
// função exibe se cada valor é par ou impar

exibirTipo(10)
function exibirTipo(limite) {
    for (i = 0; i <= limite; i++)

    if (i % 2 === 0)
    console.log(i, 'Valor Par')
    
    else console.log(i, 'Valor Impar')
}