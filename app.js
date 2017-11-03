/*Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn. Lee este blog que explica cómo funciona el algoritmo de Luhn.
Consideraciones Específicas
Tu código debe estar compuesto por 1 función: isValidCard
El usuario no debe poder ingresar un campo vacío*/


//

var question = prompt('Ingresa el número de tu tarjeta'); //hago un prompt en donde pido al usuarioque ingrese el número de su tarjeta de crédito

function cardNumberInArray(cardNumber) { //declaro
// hago la función cardNumberInArray
var cardNumberInArrayReverse=[]; //creo un array vacío para que se guarde mi nuevo array
//hago una condicional que solo acepte números, no vacíos o strings
if (cardNumber ==='') {
    return prompt('Ingreso no válido \nVuelva a ingresar el número de su tarjeta');
//si lo ingresado es un número pasa al proceso de convertir en un array
  /*} else if (cardNumber===isNaN){ //no funciona
    return prompt('Ingreso no válido \nVuelva a ingresar el número de su tarjeta'); //intent*/
  }else{
    for(var i = 0 ; i<cardNumber.length; i++){
      cardNumberInArrayReverse.unshift(parseInt(cardNumber.charAt(i)));
    }
    return cardNumberInArrayReverse;
  }
}
console.log(cardNumberInArray(question))


var newNumberCard = cardNumberInArrayReverse

// declaro la funcion cardNumberDuplicated para preparar mi array nuevo con las posiciones pares duplicadas y así luego ingrese al proceso de validación según el algoritmo de Luhn
function preparesForAlgorithm(newNumberCard){
  var arrayToNewCard = [];
  for(var u = 0; u < newNumberCard.length; j++){
    //hago un for para ubicar las posiciones pares dentro de newNumberCard
    if(u%2 === 1){
      //extraigo los digitos de las posiciones pares de newNumberCard
      var result = newCard[u]*2;
      // hago la condición para fijarme que los resultados que son mayor a 10, puedan sumar sus dos cifras
      if(result >= 10){
        var sum = 0; // creo la variable sum para que guarde el resultado de la suma de cifras de los resultados mayores a 10
        for (var o = 0; o < String(result).length; i++){ //un for que recorra mi array, tengo que convertir result en un string para poder extraer la primera cifra
          sum += parseInt(String(result).charAt(i)); //como result en realidad es un string, puedo aplicar un charAt y extraer una de sus "cifras" en string, por lo que debo convertir con un parseInt a un number
        }
        arrayToNewCard.push(sum);//agrego al nuevo array la suma de los digitos del digito duplicado que es>=10.
    }else {arrayToNewCard.push(result);//agrego al nuevo array los digitos duplicados <10.
     }
  }else{
    arrayToNewCard.push(newNumberCard[j]);//agregando al nuevo array los digitos de las posiciones impares.
  }
}
 return arrayToNewCard; // Retornar el nuevo array
}
