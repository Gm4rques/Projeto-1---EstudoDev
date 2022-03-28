let contador = 1 // CONTADOR , A VARIAVEL QUE VAI CONTROLAR O LAÇO
while(contador <= 10) { // expressao, que dirá se vai continuar ou não no laço
    console.log(`contador = ${contador}`)
    contador++ // incremento
}

for (let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
}

const notas = [4.5, 3.6, 8.4, 7.7, 2.1]
for (let i = 0; i < notas.length; i++){
    console.log(`notas = ${notas[i]}`)
}
