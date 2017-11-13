// Funcion valida tarjeta de credito
function isValidCard(cardNumber) {
  // validar que el usuario ingrese el numero de tarjeta
  do {
    var cardNumber = prompt('Ingrese el numero de la tarjeta de credito a validar(13Digitos)');
    // Agregamos los numeros de la tarjeta a un array en orden inverso y convertimos a cada elemento en tipo numerico
  } while ((cardNumber.length <= 12 || cardNumber.length >= 14));var reverseCardNumber = cardNumber.split('').reverse().map(Number);
  var sumArrayElements = '';
  var message = '';
  // buscar cada elemento par del array y multiplicar por 2
  for (var i = 1; i < reverseCardNumber.length; i = i + 2) {
    reverseCardNumber[i] = reverseCardNumber[i] * 2;
    if (reverseCardNumber[i] >= 10) {
      // convierte el numero en string, se separa los digitos del numero y convierte en numericos
      var separatedDigits = reverseCardNumber[i].toString().split('').map(Number);
      // suma los dos digitos del elemento separado en dos cifras
      reverseCardNumber[i] = (separatedDigits[0] + separatedDigits[1]);
    }
    // obtiene la suma total del array
    sumArrayElements += reverseCardNumber[i];
  }
  // devuelve mensaje al usuario
  (sumArrayElements % 10 === 0) ? message = 'El numero de tarjeta es valido' : message = 'El numero de tarjeta es invalido';
  return alert(message);
}
// llama a la funcion
isValidCard();
