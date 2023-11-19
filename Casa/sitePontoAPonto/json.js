function conferir(){
    var ini = document.querySelector('input.inicio')
    var fim = document.querySelector('input.fim')
    var pas = document.querySelector('input.passo')
    var res = document.querySelector('p.res')
    
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pas.value)

    if( i == 0 || f == 0 || pas == 0){
        window.alert('[ERRO] Por favor, ensira os dados corretamente')
    }else{
        res.innerHTML = 'Contando:' 
        if (p <= 0) {
            window.alert("Passo incorreto. Incerindo valor de passo igual a 1");
            p = 1;
          }

        if(i < f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += ` --> ${c}`
            }
        }else if(i > f){
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` --> ${c}`
            }
        }
    }
}