let num = [5,8,4,6,7]
// num.push(1)
// num.sort()
// num.push(1)
console.log(num)
// console.log(`O vetor tem ${num.length} posições`)
// console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9)
// console.log(`O valor 8 está na posição ${pos}`)
if (pos == -1) {
    console.log('Valor não encontrado')
} else {
    console.group(`O valor está na posição ${pos}`)
}