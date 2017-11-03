// ingresando los digitos de tarjeta: 11597532154678954
do {
   var v_nroTarjeta = prompt("Por favor, ingrese los digitos de su tarjeta:");
}while(!v_nroTarjeta);

// contenido de la posicion 0 : v_prueba.substring(0,1)
// contenido de la posicion 1 : v_prueba.substring(1)
//Invocando a una function : isValidCard
var v_respuesta = isValidCard(v_nroTarjeta);

if(v_respuesta%10==0){
  alert("La tarjeta es valida");
}else{
  alert("La tarjeta no es valida");
}

// Function "isValidCard"
function isValidCard(p_nroTarjeta){
  //-- string a arreglo
  var stringToArray = p_nroTarjeta.split("");
  //-- revertiendo arreglo
  var reversingArray = stringToArray.reverse();
  var v_resultado = 0;
  var sumaDigitos = 0;
  //recorriendo posiciones del numero de tarjeta de credito
  for(var i= 0; i < reversingArray.length; i++){
    //saber si un caracter es PAR
    if(i%2==0){
      //-- paso 1: caracter multiplicar X 2
      v_resultado = reversingArray[i] * 2;
      var v_resultado2 = "" + v_resultado;
      //-- Paso 2 : si es mayor o igual a 10 se debe sumar cada caracter
      if (v_resultado >= 10){  // 10 Y 18 EL Resultado
          sumaDigitos = sumaDigitos + parseInt(v_resultado2.substr(0,1)) + parseInt(v_resultado2.substr(1));
      }
    //saber si un caracter es IMPAR
   }else{
      v_resultado = reversingArray[i];
      sumaDigitos = v_resultado;
   }

  }
  return sumaDigitos;
}
