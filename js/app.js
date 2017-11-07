// Solicitamos que ingrese el número de tarjeta
var cardNumber = prompt('Ingrese el número de su tarjeta sin espacios ni guiones');
function isValidCard(cardNumber) {
  var sum = 0;
  // Calcula la longitud de la tarjeta
  var size = cardNumber.length;
  if (size === 16) {
  // Validamos que la longitud sea igual a 16 digitos
    for (var i = size - 1; i >= 0 ; i--) {
    // Recorre en forma inversa el número de la tarjeta
      var digit = parseInt(cardNumber.charAt(i)); // Obtiene cada uno de los digitos de la tarjeta
      if (i % 2 === 0) {
      // multiplica por 2 las posiciones pares de la tarjeta y almacena la cantidad en la variable digit
        digit *= 2;
      }
      if (digit > 9) {
        // luego de multiplicar verifica si es mayor a 9 y le resta si es el caso para obtener la suma de cifras
        digit -= 9;
      }
      // Suma los digitos pares que han sido operados y los impares
      sum += digit;
    }
    if (sum % 10 === 0) {
      // Si el residuo de sum entre 10 es 0 entonces la tarjeta es correcta
      console.log('El número de tarjeta ingresada es correcta');
    } else {
      // Si el residuo de sum entre 10 es 0 entonces la tarjeta es incorrecta
      console.log('El número de tarjeta ingresada es incorrecta');
    }
  } else {
    console.log('El número de tarjeta ingresada es incorrecta la longitud es diferente a 16');
  }
}

isValidCard(cardNumber);