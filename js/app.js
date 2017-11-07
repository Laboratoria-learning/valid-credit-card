
// 1.Crear función isValidCard

function isValidCard(sixteenDigitString) {
  var creditNumber = parseInt(prompt('ingrese número de su tarjeta de crédito'));
  //  for(i = 0; i <= creditNumber.length; i++)
  var reverse = 0; // Donde se va a guardar los números invertidos
  var resto = sixteenDigitString; // Número de la tarjeta
  do {
    reverse = reverse * 10 + (resto % 10);
    resto = Math.floor(resto / 10);
  } while (resto > 0);

  var numSum = 0; // numSum es la sumatoria de todos los números una vez apliacado las operaciones
  var value = 0; // value son el resultado de las operaciones que se les ha aplicado a los números (par, impar)
  for (var i = 1; i <= 16; i++) {
    if (i % 2 === 0) {
      value = 2 * reverse[i];
      if (value >= 10) {
        value = (Math.floor(value / 10) + value % 10);
      }
    } else {
      value += reverse[i];
    }
    numSum += value;
  }
  return (numSum % 10 === 0 ? 'Tarjeta de Crédito Válida' : 'Tarjeta de Crédito no Válida');
}
isValidCard;

console.log(isValidCard(564324567892345));
