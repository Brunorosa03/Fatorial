var n

console.log('Digite um número')
process.stdin.on('data', function(data) {
    n = data.toString().trim()
   
    if (n == 0 ) {
    console.log('1')
    }
    let resultado = 1
        for (let i = 1; i <= n; i++) {
        resultado *= i
        console.log(resultado)
    }

process.exit()
})
