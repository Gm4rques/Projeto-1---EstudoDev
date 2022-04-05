VerificarVelocidade(80)

function VerificarVelocidade(velocidade){
    const velocidadeMaxima = 70
    if (velocidade <= velocidadeMaxima)
    console.log('OK')
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / 5))
        if (pontos >= 12)
        console.log('Carteira Suspensa')
        else
        console.log('pontos', pontos)
    }
}