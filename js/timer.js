const blackFriday = new Date("Nov 26, 2021 00:00:00").getTime();

const x = setInterval(function() {

  let hoje = new Date().getTime();
    
  let diferença = blackFriday - hoje;
    
  var dias = Math.floor(diferença / (1000 * 60 * 60 * 24));
  var horas = Math.floor((diferença % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((diferença % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((diferença % (1000 * 60)) / 1000);
    
  document.getElementById("dias").innerHTML = dias + "d"; 
  document.getElementById("horas").innerHTML = horas + "h";
  document.getElementById("minutos").innerHTML = minutos + "m";
  document.getElementById("segundos").innerHTML = segundos + "s";
    
  if (diferença < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "CORRA QUE JÁ COMEÇOU!";
  }
}, 1000);