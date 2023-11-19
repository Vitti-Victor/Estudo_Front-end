function gerar(){
    var num = document.querySelector('input.tab').value
    var res = document.querySelector('select.res')

    if(num == ''){
        window.alert('Digite algum valor')
    }else{

        res.innerHTML = ''
        for(var i = 0; i <= 10; i++){
            var item = document.createElement('option')
            item.innerText = `${num} x ${i} = ${num * i}`
            res.appendChild(item)
        }
        item.value = `tab${c}`
        

    }



}