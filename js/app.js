
// Declaro variable para solicitar el número de tarjeta desde un prompt
var card = prompt('Ingrese número de Tarjeta de Credito a Validar:');
// Evalua si card esta vacio o está ingresando letras
if (card === '' || isNaN(card)) {
// de ser true, brinda un mensaje
  alert('Esta ingresando campo vacio o letras, Ingrese los datos');
}
// caso contrario llama a la funcion isValidCard
else {
  document.write(isValidCard(card));
}
// Funcion para validar el # de una tarjeta de crédito
function isValidCard(num) {
// Declaro un arreglo que contendra todos los elementos del número ingresado
  var arr = [];
  // Declaro variable que almacenara la validez de la tarjeta
  var message = '';
  // recorro el texto ingresado
  for (var i = 0;i < num.length;i++) {
  // Declaro variable que almacena el # de la tarjeta ingresada
    var element = parseInt(num.charAt(i));
    // agrego el elemento al array creado
    arr.push(element);
  }
  // Declaro un nuevo array que contenga los números en orden invertido
  var newArr = arr.reverse();
  // console.log(newArr);
  // Recorro el arreglo posicion por posicion
  for (var j = 1;j <= newArr.length;j++) {
  // evalua si la posicion es par
    if (j % 2 === 0) {
      // Declaro variable que almacena el doble del numero
      var doublePair = newArr[j - 1] * 2;
      // console.log(doublePair);
      // Evaluo si el doble de ese número es mayor o igual a 10
      if (doublePair >= 10) {
      // Separamos los digitos del resultado
        var digitOne = parseInt(doublePair/10);
        var digitTwo = doublePair % 10;
        // sumamos los  digitos del resultado
        var sumDigit = digitOne + digitTwo;
        // Reemplaza en cada posicion par los nuevos numeros
        newArr[j - 1] = sumDigit;
      }
      // caso contrario
      else {
        // reemplazamos en cada posicion por el doble del elemento
        newArr [j - 1] = doublePair;
      }

    }
  }
  // console.log(newArr);
  // Declaro variable que almacenara la suma de todos los elementos del arreglo nuevo
  var sumElement = 0;
  for (var k = 0;k < newArr.length;k++) {
    sumElement += newArr[k];
  }

  // Obtenemos el residuo de la division entre 10
  var div = sumElement % 10;
  // Si es igual a 0
  if (div === 0) {
    // la tarjeta es valida
    message = 'Es una tarjeta valida';
  }
  // caso contrario
  else {
    // la tarjeta no es valida
    message = 'No es una tarjeta valida';
  }
  return message;
}
