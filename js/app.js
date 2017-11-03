//Ingresamos numero de tarjetaEjmplo: numero de tarjeta(4551038207641635)
var numCard = prompt("Ingrese un numero de tarjeta de credito!");
//Pasar los numeros a un array 
var numArray = numCard.split(""); 
//colocamos los numeros en orden inverso 
var numReverse = numArray.reverse(); 

function isValidCard(numCard){ 
  //variable donde estara almacenado temporalmente el nuevo numero convertido a entero 
  var numInteger = 0; 
  //Variable donde almacenaremos temporalmente sumatoria de numeros con posicion par(Even) 
  var sumPar = 0; 
  //Variable donde almacenaremos temporalmente sumatoria de numeros con posicion impar(Odd) 
  var sumImpar = 0; 

  //Se creara un for para iterar cada numero de la tarjeta ingresada 
  for (var i = 0; i < numReverse.length; i++) { 
    //convertimos cada indice del array invertido a entero y almacenamos en "numInteger" 
    numInteger = parseInt(numReverse[i]); 
    //Verificaremos si la posicion es par (i % 2) !== 0) 
    if((i+1)%2 == 0 ){ 
       if((numInteger * 2) >= 10) { 
         sumPar += (((numInteger * 2) % 10) + Math.trunc((numInteger * 2) / 10)); 
       } else { 
         sumPar +=numInteger*2; 
       } 
    } else { 
      sumImpar +=numInteger; 
    } 
  } 
   var sumTotal = ((sumPar + sumImpar) % 10) === 0 ? "Numero tarjeta Valida" : "Numero tarjeta Invalida"; 
   return sumTotal; 
} 
//isValidCard(numCard); 
//console.log(sumPar + " " + sumImpar); 
console.log(isValidCard(numCard)); 
