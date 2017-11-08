// Declaro variable numberCard para solicitar el número de tarjeta desde un prompt
var CreditCardNumber = prompt('ingrese numero de tarjeta');
// si card esta vacio o está ingresando letras
if (CreditCardNumber === '' || isNaN(CreditCardNumber)) {
  alert('Esta ingresando un campo vacio o letras, Ingrese los numeros de su tarjeta');
} else {
  // caso contrario llama a la funcion isValidCard
  alert(isValidCard(CreditCardNumber));
}
function isValidCard(CreditCardNumber) {
  var message = '';
  var arrayReverse = [];
  var size = CreditCardNumber.length;
  var lastPosition = size - 1;
  var globalSum = 0;
  for (var i = lastPosition; i >= 0; i--) {
    arrayReverse.push(parseInt(CreditCardNumber[i]));
  }

  for (var j = 1;j <= arrayReverse.length;j++) {
    if (j % 2 === 0) {
      var par = arrayReverse[j - 1];
      var number = par * 2;
      if (number >= 10) {
        var digitOne = parseInt(number / 10);
        var digitTwo = number % 10;
        arrayReverse[j - 1] = digitOne + digitTwo;
      } else {
        arrayReverse[j - 1] = number;
      }
    }
  }
  var sumElement = 0;
  for (var index = 0; index < arrayReverse.length;index++) {
    sumElement += arrayReverse[index];
  }
  var div = sumElement % 10;
  if (div === 0) {
    message = 'Es una tarjeta valida';
  } else {
    message = 'No es una tarjeta valida';
  }
  return message;
}
