// Solicitando al usuario su número de tarjeta de crédito
 
do {
  var inputCodeCard = prompt('Ingrese su número de tarjeta de crédito \nNota: Recuerde que no puede ingresar espacios vacíos, letras o más de 16 dígitos');   
} while (!inputCodeCard || isNaN(inputCodeCard) || (inputCodeCard.length !== 16));
  
// Creando función para validar tarjeta
function isValidCard(inputCodeCard) {
  /* Creando un array donde se almacenarán los números de la tarjeta en orden inverso */
  var arrReverse = []; 
  for (var i = 0; i < inputCodeCard.length; i++) {
    arrReverse.unshift(parseInt(inputCodeCard[i]));
  }

  // Obteniendo números en posición par
  for (var j = 1; j < arrReverse.length; j = j + 2) {
    if (arrReverse[j] * 2 >= 10) {
      var numberByTwo = arrReverse[j] * 2;
      // Si el valor de la multiplicación es de dos dígitos: sumar digitos y luego reemplzar en arrReverse
      arrReverse[j] = parseInt(numberByTwo.toString(10)[0]) + parseInt(numberByTwo.toString(10)[1]);
    } else {
    // Si el valor de la multiplicación es de un dígito, se reemplaza en arrReverse
      arrReverse[j] = arrReverse[j] * 2;
    }
    // Sumando los digitos de la tarjeta
    var sum = 0;
    for (var x = 0; x < arrReverse.length; x++) {
      sum = sum + arrReverse[x];
    }
  }
  
  // Validando tarjeta
  if (sum % 10 === 0) {
    return alert('Tu número de tarjeta es VÁLIDA');
  } else {
    return alert('Tu número de tarjeta es INVÁLIDA');
  }
}
  
// Llamando a la función
isValidCard(inputCodeCard);
