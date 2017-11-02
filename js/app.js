/* Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y
confirme su validez según el algoritmo de Luhn.
Consideraciones Específicas

Tu código debe estar compuesto por 1 función: isValidCard
El usuario no debe poder ingresar un campo vacío*/

// var numberOfTarjet=prompt('Ingresa tú número de tarjeta');
function isValidCard(number) {
  // Declaramos un array vacío para almacenar el número invertido de la tarjeta en un array
  var arrOfNumberOfTarjet = [];
  // recorremos el número
  for (var i = 0;i < number.length;i++) {
    // Obtenemos el caracter de la posición i
    var char = number.charAt(i);
    // Añadimos el caracter obtenido a un array
    arrOfNumberOfTarjet.push(parseInt(char));
  }

  // Recorremos el array para obtener el producto en las posiciones pares, recorremos las posiciones pares
  for (var j = 1; j < arrOfNumberOfTarjet.length;j = j + 2) {
    // Multiplicamos los dígitos de las posiciones pares por 2
    var prodDigitOfArray = (arrOfNumberOfTarjet[j] * 2);
    // Evaluamos si ese producto en mayor o igual que 10
    if (prodDigitOfArray >= 10) {
      // Covertimos el prodDigitOfArray en un String
      var newProd = prodDigitOfArray.toString();
      // Declaramos una variable para almacenar la suma de los digitos del producto
      var sumProdDigitArray = 0;
      // Sumamos lo dígitos
      sumProdDigitArray = parseInt(newProd.charAt(0)) + parseInt(newProd.charAt(1));
      // Eliminamos en la posición par el elemento que se encuentra en este y agregamos la suma de los dígitos del producto del número *2 que esta en la posición par
      arrOfNumberOfTarjet.splice(j, 1, sumProdDigitArray);
    }
  }

  // Creamos una variable sumTotal, para almacenar la suma de todos los dígitos del nuevo array
  var sumTotal = 0;
  // Recorremos el nuevo arrOfNumberOfTarjet que guarda los dígito nuevos que vamos a sumar
  for (l = 0;l < arrOfNumberOfTarjet.length;l++) {
    // Sumanos los números de  todas las posiciones
    sumTotal += arrOfNumberOfTarjet[l];
  }
  // Evaluamos que la suma total dividada entre 10,tenga residuo 0 para qe sea un número de tarjeta válida
  if (sumTotal % 10 === 0) {
    return alert('Usted a ingresado un número de tarjeta válida');
  } else {
    return alert('Usted a ingresado un número de tarjeta no válida, por favor verifique sus datos!!!');
  }
}
// Menú
do {
  var op = 0;
  var strMenu = '1. Validar Número de Tarjeta\n2. Apagar\n';
  op = parseInt(prompt(strMenu));

  if (op === 1) {
    // Ingresamos el numero de la tarjata de credito
    var numberOfTarjetClient = prompt('Ingrese el número de tarjeta:');

    // Validamos que el usuario no ingrese campor vacíos

    // Si la cadena es vacía
    if (numberOfTarjetClient === '') {
      alert('Usted no ingresado su número de tarjeta,Debe ingresar un número');
      // sino se cumple
    } else {
      // validamos el número de tarjeta
      isValidCard(numberOfTarjetClient);
    }
  }
} while (op !== 2);
