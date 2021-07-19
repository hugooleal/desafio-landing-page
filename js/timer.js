const blackFriday = new Date("Nov 26, 2021 00:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

  // Get today's date and time
  let hoje = new Date().getTime();
    
  // Find the distance between now and the count down date
  let diferença = blackFriday - hoje;
    
  // Time calculations for days, hours, minutes and seconds
  var dias = Math.floor(diferença / (1000 * 60 * 60 * 24));
  var horas = Math.floor((diferença % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((diferença % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((diferença % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("dias").innerHTML = dias + "d"; 
  document.getElementById("horas").innerHTML = horas + "h";
  document.getElementById("minutos").innerHTML = minutos + "m";
  document.getElementById("segundos").innerHTML = segundos + "s";
    
  // If the count down is over, write some text 
  if (diferença < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "CORRA QUE JÁ COMEÇOU!";
  }
}, 1000);