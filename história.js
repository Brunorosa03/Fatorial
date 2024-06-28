const prompt = require('prompt-sync')({sigint: true})

let historia = prompt('Escreva uma história: ')

let palavras = historia.split('')

let numeroDePalavras = palavras.length

let frequenciaPalavras = {}

for (let i = 0; i < palavras.length; i++){
     let palavra = palavras[i].toLowerCase()

     palavra = palavra.replace(/[.,!?;:() ]/g, '')

      if (frequenciaPalavras[palavra]) {
        frequenciaPalavras[palavra]++
      } else {
        frequenciaPalavras[palavra] = 1
      }

    }
console.log(`Número total de palavras: ${numeroDePalavras}`)
console.log(`Frequência de palavras:`)
for (let palavra in frequenciaPalavras) {
    console.log(`${palavra}: ${frequenciaPalavras[palavra]}`)
}
