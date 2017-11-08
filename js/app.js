// Typing the following digits of valid Credit card: 11597532154678954
do {
  var ccNumber = prompt('Please, insert the digits of your credit card:');
} while (!ccNumber);

// contenido de la posicion 0 : v_prueba.substring(0,1)
// contenido de la posicion 1 : v_prueba.substring(1)
// Invocando a una function : isValidCard
var vAnswer = isValidCard(ccNumber);

if (vAnswer % 10 === 0) {
  alert('Your credit card is valid');
} else {
  alert('Im sorry but your credit card is not valid');
}

// Function "isValidCard"
function isValidCard(pNroTarjeta) {
// -- string to array
  var stringToArray = pNroTarjeta.split('');
  // -- reversing array
  var reversingArray = stringToArray.reverse();
  var result = 0;
  var sumDigits = 0;
  // verifying through credit card digits
  for (var i = 0; i < reversingArray.length; i++) {
  // verifying if it is an ODD number
    if (i % 2 === 0) {
      // -- Step 1: multiple * 2
      result = reversingArray[i] * 2;
      var result2 = '' + result;
      // -- Step 2 :  verifying If the sum is over or same as 10
      if (result >= 10) {
        sumDigits = sumDigits + parseInt(result2.substr(0, 1)) + parseInt(result2.substr(1));
      }
    // Verifying if the number is even
    } else {
      result = reversingArray[i];
      sumDigits = result;
    }
  }
  return sumDigits;
}
