function somar() {
    var tn1 = window.document.querySelector('input.txtn1')
    var tn2 = window.document.querySelector('input.txtn2')
    var result = window.document.querySelector('strong.resultado_aqui')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    result.innerText = `A Soma de ${n1} mais ${n2} é igual a ${s} `
}

function subtrair(){
    var tn1 = window.document.querySelector('input.nun1')
    var tn2 = window.document.querySelector('input.nun2')
    var result = window.document.querySelector('strong.sub_aqui')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var sub = n1 - n2
    result.innerText = `A subtração de ${n1} menos ${n2} é igual a ${sub}`

}