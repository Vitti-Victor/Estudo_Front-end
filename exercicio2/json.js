function carregar(){
    var msg = document.querySelector('p.msg')
    var img = document.querySelector('img.imagem')
    var bom = document.querySelector('p.bom')
    var data = new Date()
    //var hora = 5    
    //var minutos = 64
    var hora = data.getHours()
    var minutos = data.getMinutes()
    
    if(hora >= 0 && hora < 10 ){
        if(minutos >= 0 && minutos < 10){
            msg.innerHTML = `Agora são 0${hora}:0${minutos}`
        }else{
            msg.innerHTML = `Agora são 0${hora}:${minutos}`
        }    
    }else{
        if(minutos >= 0 && minutos < 10){
            msg.innerHTML = `Agora são ${hora}:0${minutos}`
        }else{
            msg.innerHTML = `Agora são ${hora}:${minutos}`
        }    
    }

    if(hora >= 6 && hora < 12){
        img.src = 'assets/fotoManha.png'
        document.body.style.background = '#f7de85'
        bom.innerHTML = 'Bom Dia'

    }else if(hora >= 12 && hora < 18){
        img.src = 'assets/fotoTarde.png'
        document.body.style.background = '#f89c2d'
        bom.innerHTML = 'Boa Tarde'

    }else if(hora >= 18 && hora < 23){
        img.src = 'assets/fotoNoite.png'
        document.body.style.background = '#162f44'
        bom.innerHTML = 'Boa Noite'

    }else if(hora >= 0 && hora <6){
        img.src = 'assets/fotoMadrugada.png'
        document.body.style.background = '#110d1c'
        bom.innerHTML = 'Boa Madrugada. Vai dormir fiote'
    }
}