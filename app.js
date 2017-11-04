
function isValidCard(cardNumber) {
  var string = cardNumber.toString();
  cardNumber !== undefined;
  cardNumber === parseInt(prompt('Ingrese el número de su tarjeta de crédito'));
  var cardlength = string.length;
  var sum = 0;
  for (var i = 0; i < cardlength; i = i + 2) {
    var numbers = (string.charAt(i)) * 2;
    if (numbers >= 10) {
      var numbersCard = numbers.toString();
      numbers = (numbersCard.charAt(0)) + (numbersCard.charAt(1));
    }
    sum = sum + numbers;
  } for (var j = 1; j < cardlength; j = j + 2) {
    sum = sum + (string.charAt(i));
  }
  if (sum % 10 === 0) {
    alert('Has ingresado un número de tarjeta correcto');
  } else {
    alert('Has ingresado un número de tarjeta incorrecto');
  }
}
