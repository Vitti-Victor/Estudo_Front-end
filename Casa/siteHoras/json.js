function carregar() {
  var msg_bom = document.querySelector("h1.horario_bom");
  var img = document.querySelector("img.foto");
  var msg = document.querySelector("p.msg");
  var data = new Date();
  //var hora = 15;
  //var min = 50;
  var hora = data.getHours();
  var min = data.getMinutes();
  var tit = document.querySelector("h1.title");
  var foo = document.querySelector("p.rodap");

  if (hora >= 0 && hora < 10) {
    if (min >= 0 && min < 10) {
      msg.innerHTML = `0${hora}:0${min}`;
    } else {
      msg.innerHTML = `0${hora}:${min}`;
    }
  } else {
    if (min >= 0 && min < 10) {
      msg.innerHTML = `${hora}:0${min}`;
    } else {
      msg.innerHTML = `${hora}:${min}`;
    }
  }

  if (hora >= 6 && hora < 12) {
    var tit = (document.querySelector("h1.title").style.color = "black");
    var foo = (document.querySelector("p.rodap").style.color = "black");
    msg_bom.innerHTML = "Bom Dia";
    document.body.style.backgroundColor = "#f6ed9e";
    img.src = "assets/fotoManha.png";
  } else if (hora >= 12 && hora < 18) {
    msg_bom.innerHTML = "Boa Tarde";
    document.body.style.backgroundColor = "#efb264";
    img.src = "assets/fotoTarde.png";
  } else if (hora >= 18 && hora < 24) {
    msg_bom.innerHTML = "Boa Noite";
    document.body.style.backgroundColor = "#312948";
    img.src = "assets/fotoNoite.png";
  } else if (hora >= 0 && hora < 6) {
    msg_bom.innerHTML = "Boa Madrugada";
    document.body.style.backgroundColor = "#121e35";
    img.src = "assets/fotoMadrugada.png";
  }
}
