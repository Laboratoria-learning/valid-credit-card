function isValidCard(cardNumber) {
  // cada digito del string es colocado en un array con split y espacio ''
  var arrayNumbers = cardNumber.split('');
  // el arrayNumbers es invertido
  var arrayInverse = arrayNumbers.reverse();
  // creo un acumulador suma, donde se almacenara las sumas de los digitos de la tarjeta
  var sum = 0;

  // creo un bucle for, que recorre todo los indices del arrayInverse
  for (var i = 0; i < arrayInverse.length; i++) {
    // el array de los numeros tipo string lo convierto en tipo numbers y lo almaceno en el mismo array
    arrayInverse[i] = parseInt(arrayInverse[i]);
    // condiciono un mod == 1, para que solo tomen los indices impares
    if (i % 2 === 1) {
      /* segun la validacón de tarjeta los indices impares (en mi caso porque tomo como inicializacion 
      i = 0) debo multiplicarlo por dos, si el resultado de esa multiplicación me da un número de dos 
      digitos, entonces debo sumar dichos digitos. Para obtener el PRIMER DIGITO, debo 
      dividir el número entre 10 y mostrarlo con un parseInt y obtener solo solo la parte entera del 
      resultado. Luego, para el SEGUNDO DIGITO, debo sacar MOD 10 del valor para obtener las unidades. 
      Después, sumo dicho valores y el resultaado es alamacenado en el arrayInverse */
      arrayInverse[i] = (parseInt((arrayInverse[i] * 2) / 10)) + ((arrayInverse[i] * 2) % 10);
    }
    // Ahora sumare los elementos del array al acumulador sum para obtener un solo resultado.
    sum += arrayInverse[i];
  }
  // Para validar el numero de tarjetas, la suma de digitos MOD 10 debe resultar cero. Si es asi, me muestra true; de lo contrario, false.
  return sum % 10 === 0 ? document.write('Su número de tarjeta es válido.') : document.write('Su número de tarjeta NO es válido');
}

do {
  var centinel = false;
  // Los datos ingresados en un prompt son siempre de tipo string
  var cardNumber = prompt('Ingrese su número de tarjeta:');

  // Condiciono que el ingreso es de 16 digitos, además no sea un ingreso de 16 veces cero.
  if (cardNumber.length === 16 & cardNumber !== 0000000000000000) {
    centinel = true;
    // Llamo a la funcion isValidCard tomando como argumento cardNumber
    isValidCard(cardNumber);
    break;
    // Si no se cumple la función. manda una alerta de que el ingreso no es válido y vuelve a pedir el número
  } else
    alert('Error. Ingreso no válido.');
} while (centinel === false);