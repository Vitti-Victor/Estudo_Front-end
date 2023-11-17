function conferir(){
    var ida = document.querySelector('input.nasc')
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.querySelector('p.resp')

    res.style.marginTop = '15px'


    if(Number(ida.value) <= 0 || Number(ida.value) > ano){
        window.alert('[ERROR 1] Ano Incorreto. Preencha os campos corretamente')
    }else{

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        var sex = document.getElementsByName('radsex')

        var dIda = ano - Number(ida.value)

        var gen = ''

        if(sex[0].checked || sex[1].checked){
            if(sex[0].checked){
                if(dIda >= 0 && dIda < 10 ){
                    gen += 'A criança do sexo masculino'
                    img.setAttribute('src', 'assets/bebeMasc.png')
                    img.style.margin = '15px 0 15px'
                    img.style.width = '200px'
                    img.style.height = '200px'
                    img.style.borderRadius = '100%'
                }else if(dIda < 20){
                    gen += 'O adolescente do sexo masculino'
                    img.setAttribute('src', 'assets/adoleMasc.png')
                    img.style.margin = '15px 0 15px'
                    img.style.width = '200px'
                    img.style.height = '200px'
                    img.style.borderRadius = '100%'
                }else if(dIda < 30){
                    gen += 'O jovem do sexo masculino'
                    img.setAttribute('src', 'assets/jovemMasc.png')
                    img.style.margin = '15px 0 15px'
                    img.style.width = '200px'
                    img.style.height = '200px'
                    img.style.borderRadius = '100%'
                }else if(dIda < 50){
                    gen += 'O adulto do sexo masculino'
                    img.setAttribute('src', 'assets/adultoMasc.png')
                    img.style.margin = '15px 0 15px'
                    img.style.width = '200px'
                    img.style.height = '200px'
                    img.style.borderRadius = '100%'
                }else{
                    gen += 'O adulto do sexo masculino'
                    img.setAttribute('src', 'assets/idosoMasc.png')
                    img.style.margin = '15px 0 15px'
                    img.style.width = '200px'
                    img.style.height = '200px'
                    img.style.borderRadius = '100%'
                }

            }else if( sex[1].checked){
                if(dIda >= 0 && dIda < 10 ){
                    gen += 'A criança do sexo feminino'
                    img.setAttribute('src', 'assets/bebeFemi.png')
                    img.style.margin = '15px 0 15px'
                    img.style.width = '200px'
                    img.style.height = '200px'
                    img.style.borderRadius = '100%'
                }else if(dIda < 20){
                    gen += 'A adolescente do sexo feminino'
                    img.setAttribute('src', 'assets/adoleFemi.png')
                    img.style.margin = '15px 0 15px'
                    img.style.width = '200px'
                    img.style.height = '200px'
                    img.style.borderRadius = '100%'
                }else if(dIda < 30){
                    gen += 'A jovem do sexo feminino'
                    img.setAttribute('src', 'assets/jovemFemi.png')
                    img.style.margin = '15px 0 15px'
                    img.style.width = '200px'
                    img.style.height = '200px'
                    img.style.borderRadius = '100%'
                }else if(dIda < 50){
                    gen += 'O adulto do sexo feminino'
                    img.setAttribute('src', 'assets/adultoFemi.png')
                    img.style.margin = '15px 0 15px'
                    img.style.width = '200px'
                    img.style.height = '200px'
                    img.style.borderRadius = '100%'
                }else {
                    gen += 'O idoso do sexo feminino'
                    img.setAttribute('src', 'assets/idosoFemi.png')
                    img.style.margin = '15px 0 15px'
                    img.style.width = '200px'
                    img.style.height = '200px'
                    img.style.borderRadius = '100%'
                }
            }

            res.innerHTML = `${gen} tem ${dIda} anos`
            res.appendChild(img)
        
        }else{
            window.alert('[ERROR 2] Sexo Incorreto. Preencha os campos corretamente')
        }



        
        
        
    }

}