function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('input.idade')
    var res = document.querySelector('p.res')
    
    if(Number(fAno.value) == 0 || Number(fAno.value) > ano){
        window.alert('[ERRO 1] Dados preenchidos incorretamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var img = document.createElement('img')
        img.setAttribute('class', 'foto')
       
        var ida = ano - Number(fAno.value)

        var gen = ''
        if(fsex[0].checked){
            if(ida >=0 && ida < 10){
                gen = 'criança do sexo masculino'
                img.setAttribute('src', 'child-817373_1280.png')
            }else if(ida < 21){
                gen = 'jovem do sexo masculino'
                img.setAttribute('src', 'boy-2420289_1280.png')
            }else if(ida < 50){
                gen = 'adulto do sexo masculino'
                img.setAttribute('src', 'man-1690965_1280.png')
            }else{
                gen = 'idoso do sexo masculino'
                img.setAttribute('src', 'man-1845259_1280.png')
            }
        } else if(fsex[1].checked){
            if(ida >=0 && ida < 10){
                gen = 'criança do sexo feminino'
                img.setAttribute('src', 'child-817373_1280.png')
            }else if(ida < 21){
                gen = 'jovem do sexo feminino'
                img.setAttribute('src', 'boy-2420289_1280.png')
            }else if(ida < 50){
                gen = 'adulto do sexo feminino'
                img.setAttribute('src', 'man-1690965_1280.png')
            }else{
                gen = 'idoso do sexo feminino'
                img.setAttribute('src', 'man-1845259_1280.png')
            }   
        }
        res.innerHTML = `Detectamos ${gen} com ${ida} anos.`
        res.appendChild(img)
    }



    
}