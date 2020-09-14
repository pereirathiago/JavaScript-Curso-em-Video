function calcular() {
    var txtnum = document.getElementById('txtnum')
    var res = document.getElementById('res')
    var num = Number(txtnum.value)
    for (var c = 1; c <= 10; c++) {
        r = num * c
        res.innerHTML += `${num} X ${c} = ${r} <br>` 
    }
}