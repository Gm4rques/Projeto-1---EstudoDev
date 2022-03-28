const pessoa = {
    saudacoes: 'bom dia',
    falar () {
        console.log(this.saudacoes)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()