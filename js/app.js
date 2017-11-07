function isvalidCar() {
  /* solicitando informacion al usuario */
  var cardNumber = prompt(' escribe el numero de tarjeta');
  /* Condicionando hasta que se cumpla las pautas requeridas */
  while (cardNumber === ' ') {
    carNumber = prompt('Ecribe un numero');
  }
  /* Creando un array vacio donde se agregara el numero de tarjeta en array */
  var array = [];
  for (var i = 0; i < cardNumber.length; i++) {
    array.push(parseInt(cardNumber[i].split('')));
  }
  /* InvirTiendo array*/
  var newArray = array.reverse();
  /* Multiplicando las posiciones impares por 2 */
  for (var j = 0; j < newArray.length; j++) {
    if (j % 2 === 1) {
      var duplicate = newArray[j] * 2;
      /* Sumando digitos de numeros mayores que 10 */
      newArray[j] = parseInt(duplicate / 10) + (duplicate % 10);
    }
  }
  /* condicionando que la suma de los numeros de trajeta %10 y-especificando condiciones */
  var SumArr = 0;
  for (var hi = 0; h < newArray.length; hi++) {
    SumArr += newArray[hi];
  }
  if (SumArr % 10 === 0) {
    alert('tarjeta Valida');
  } else {
    alert(' tarjeta no valida ');
  }
}

isvalidCar();
