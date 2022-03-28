const escola = "Cod3r"

console.log (escola.charAt(4)) //função que busca um determinado caractere dentro da string
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //nao o caractere mas o codigo daquele determinado caractere
console.log(escola.indexOf('3')) 
console.log(escola.substring(1)) //substituição do caractere especifico da string
console.log(escola.substring(0, 3))
console.log('Escola '.concat(escola).concat('!'))// funçao concat é a mesma coisa que o (+)
console.log('Escola ' + escola + '!')            // mas somente string , com numero o (+) soma a string
console.log(escola.replace(3, 'e'))// 

console.log ('Ana, Maria, Pedro' .split(','))