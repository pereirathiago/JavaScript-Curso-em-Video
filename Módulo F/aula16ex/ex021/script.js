
function adicionar() {
    let txtnum = document.getElementById('txtnum')
    let sel = document.getElementById('txtsel')
    let v = []
    if (txtnum.value.length == 0) {
        alert('Por favor, digite um numero')
    } else {
        let num = Number(txtnum.value)
        if (num < 101 && num > 0) {
            v.push(num)
            for(let c in v) {
                let item = document.createElement('option')
                item.text = `Valor ${num} adicionado`
                item.value = `sel{c}`
                sel.appendChild(item)
                c++
            }
        } else {
            alert('erro')
        }
    }
}

function finalizar() {
    let res = document.getElementById('res')
    res.innerHTML = `<p>Ao todo temos ${v.length} números cadastrados</p>`
    res.innerHTML += `<p></p>`
    res.innerHTML += `<p></p>`
    res.innerHTML += `<p></p>`
    res.innerHTML += `<p></p>`
}