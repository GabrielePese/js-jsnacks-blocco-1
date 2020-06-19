// Nella pagina ci sono due input(num1, num2) e una select con options(somma,sottrai,moltiplica,dividi).
// // Al click su un bottone, il programma inserisce in un p#result il risultato dell'operazione scelta.

document.getElementById("button").addEventListener("click", function(){
  var num1 = document.getElementById("num1").value;
  var num1 = document.getElementById("num2").value;

  if (document.getElementById("opt").value == 1) {console.log("scelto 1")}
  else if (document.getElementById("opt").value == 2) {console.log("scelto 2")

  }

});
