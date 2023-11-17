function carregar(){
    var title = document.querySelector('h1.title')
    var msg = document.querySelector('p.msg')
    var img = document.querySelector('img.img')
    var dia = document.querySelector('p.bom')
    var data = new Date()
    //var ano = data.getUTCFullYear()
    //var hora = 3
    var hora = data.getHours()
    var min = data.getMinutes()

    
    if( hora >= 0 && hora < 10 ){
        if( min >= 0 && min < 10){
            msg.innerHTML = `Agora são 0${hora}:0${min}`
        }else{
            msg.innerHTML = `Agora são 0${hora}:${min}`
        }
    }else{
        if( min >= 0 && min < 10){
            msg.innerHTML = `Agora são ${hora}:0${min}`
        }else{
            msg.innerHTML = `Agora são ${hora}:${min}`
        }
    }

    if(hora >= 6 && hora < 12){
        title.innerHTML = 'Bom dia'
        img.src = 'assets/fotoManha.png'
        document.body.style.background = '#8d5048'
        dia.innerHTML= 'Que você tenha uma manhã próspera e cheia de vida '
    }else if(hora >= 12 && hora < 18){
        title.innerHTML = 'Boa Tarde'
        img.src = 'assets/fotoTarde.png'
        document.body.style.background = '#d98c36'
        dia.innerHTML= 'Que você tenha uma tarde próspera e cheia de vida '
    }else if(hora >= 18 && hora < 24){
        title.innerHTML = 'Boa Noite'
        img.src = 'assets/fotoNoite.png'
        document.body.style.background = '#2d2d40'
        dia.innerHTML= 'Que você tenha uma boa noite de descanso'
    }else if(hora >= 0 && hora < 6){
        title.innerHTML = 'Boa Madrugada'
        img.src = 'assets/fotoMadrugada.png'
        document.body.style.background = '#050613'
        dia.innerHTML= 'Que você tenha uma boa madrugada, aliás, por que você está acordado ?'
    }
}