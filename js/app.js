var input = prompt('Ingrese Numero de Tarjeta');
function isValidCard(number) {
// el numero de tarjeta es transferido a un array
  var cardArray = [];
  for (i = 0; i < input.length; i++) {
    var newArry = input[i];
    cardArray .push(newArry);
  }
  // array invertido
  var invertido = arry.reverse();
  // creando un array para posiciones pares
  var pairPosition = [];
  // creando un array para posicion impar
  var imparPosition = [];
  // coloca los elementos de la posicion par
  for (var i = 0; i < invertido.length; i += 2) {
    pairPosition.push(invertido);
  }
  for (i = 1;i < invertido.length; i += 2) {
	  pairPosition.push(invertido);
  }
  // creando una variable para la suma de elementos sin son >10
  var newNumber = [];
  for (i = 0; i < imparPosition.length; i++) {
    // duplica los elementos
    imparPosition[i] = imparPosition[i] * 2;
    // compara si es mayos a 10
    if (imparPosition[i] > 9) {
			 newNumber = imparPosition[i] + imparPosition[i + 1];
    }
  }
  // suma de los elementos
  var sum = pairPosition[i] + h[i];
  // evalua si la suma es divisble entre 10
  if (sum % 10 === 0) {
    return 'Su tarjeta es válida';
  } else {
    return 'Su tarjeta es inválida';
  }
}
