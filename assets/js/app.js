window.addEventListener("load", function(){
  var cuerpo = document.getElementById("body");

  var borde = document.createElement("section");
  cuerpo.appendChild(borde);

  var canchita = document.createElement("div");
  canchita.setAttribute("class", "canchita");
  borde.appendChild(canchita);

  var arco1 = document.createElement("div");
  arco1.setAttribute("class", "arco1");
  canchita.appendChild(arco1);

  var arco2 = document.createElement("div");
  arco2.setAttribute("class", "arco2");
  canchita.appendChild(arco2);

  var centro = document.createElement("div");
  centro.setAttribute("class", "centro");
  canchita.appendChild(centro);


})
