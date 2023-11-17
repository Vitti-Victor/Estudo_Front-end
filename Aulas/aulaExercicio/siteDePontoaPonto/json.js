function conferir() {
  var ini = document.querySelector("input.inicio");
  var fim = document.querySelector("input.fim");
  var pas = document.querySelector("input.passo");
  var res = document.querySelector("p.res");

  if (
    Number(ini.value) == 0 ||
    Number(fim.value) == 0 ||
    Number(pas.value) == 0
  ) {
    res.innerHTML = "Impossivel contar";
    //window.alert("[ERROR] Faltam Dados!");
  } else {
    res.innerHTML = "Contando: ";
    var i = Number(ini.value);
    var f = Number(fim.value);
    var p = Number(pas.value);
    if (p <= 0) {
      window.alert("Passo incorreto. Incerindo valor de passo igual a 1");
      p = 1;
    }

    if (i < f) {
      for (var c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    } else if (f < i) {
      for (var c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`;
      }

      res.innerHTML += `\u{1F595}`;
      
    }
  }
}
