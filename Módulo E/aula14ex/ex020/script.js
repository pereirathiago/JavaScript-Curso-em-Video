function calcular() {
    let txtnum = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    if (txtnum.value.length == 0) {
        alert('Por favor, digite um numero')
    } else {
        let num = Number(txtnum.value)
        // for (let c = 1; c <= 10; c++) {
        //     r = num * c
        //     let item = document.createelement('option')
        //     item.text = `${num} X ${c} = ${r}`
        //     tab.appendChild(item)
        // } 
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${num} X ${c} = ${num*c}`
            item.value = `tab{c}`
            tab.appendChild(item)
            c++
        }
    }
}