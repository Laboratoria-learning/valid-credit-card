/* Condiciones específicas :
Tu código debe estar compuesto por 1 función: isValidCard
El usuario no debe poder ingresar un campo vacío
*/

for (var i = 0; i < array.length; i++) {
  var number = array.pop();
  array.splice(i, 0, number);
}

for (var j = 0; j < array.length; j++) {
  array2.push(j);
  if (j % 2 === true) {
    var doubleNumber = array[j] * 2 ;
    if (doubleNumber >= 10) {
      var firstDigit = parseInt(doubleNumber / 10);
      var secondDigit = doubleNumber % 10;
      var sum = firstDigit + secondDigit;
      for (var index = 0; index < array.length && index % 2 === 0; index++) {
        array.splice(index, 0, sum);
      }
    }
  }
}
