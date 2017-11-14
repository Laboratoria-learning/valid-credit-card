// verifica si una tarjeta es válida
// number:es el número de la tarjeta
function isValidCard(number) {
  // newArray: almacenará los digitos de la tarjeta
  var newArray = [];
  // ciclo que extrae extrae el último dígito y lo elimina
  for (var i = 0; i <= 15; i++) {
    var lastNumber = number % 10;
    number = parseInt(number / 10);
    // agrega el dígito eliminado a newArray
    newArray[i] = lastNumber;
  }
  // ciclo que toma las posiciones pares de newArray
  for (var j = 1; j < newArray.length; j += 2) {
    // multiplica las posiciones pares *2
    newArray[j] = newArray[j] * 2;
    // secondDigit:almacenará el último dígito de los números mayores o iguales a 10
    // firstDigit:almacenará el primer dígito de los números mayores o iguales a 10
    var secondDigit = 0;
    var firstDigit = 0;
    // verificando condición para digitos mayores o iguales a 10
    if (newArray[j] >= 10) {
      // tomando primer y último dígito
      secondDigit = newArray[j] % 10;
      firstDigit = parseInt(newArray[j] / 10);
      // reemplazando los números mayores a 10 por la suma de sus dígitos
      newArray.splice(j, 1, secondDigit + firstDigit); // reemplazando
    }
  }
  // totalSum:almacena la suma de todas la posiciones de newArray
  var totalSum = 0;
  // ciclo que itera las posiciones de newArray
  for (var i = 0; i < newArray.length; i++) {
    // va sumando las posiciones
    totalSum += newArray[i];
  }
  // si la suma es divisible por 10 :TARJETA VALIDA
  // si no es, TARJETA INVALIDA
  if (totalSum % 10 === 0) {
    return alert('TARJETA VALIDA');
  } else {
    return alert('TARJETA INVALIDA');
  }
}
// haciendo que el usuario no ingrese un campo vacío
do {
  var number = parseInt(
    prompt('Ingrese el número de su tarjeta para confirmar validez')
  );
} while (!number);
isValidCard(number);
