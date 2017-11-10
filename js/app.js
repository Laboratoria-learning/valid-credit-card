// Verifica si el número de tarjeta es válido.
function isValidCard() {
  // Almacena sumatoria de los dígitos.
  var sum = 0;
  var numberCard;

  // Hacer al menos una ves, si numberCard tiene más o menos de 16 elementos.
  do {
    // Los dígitos obtenidos son separados en un array y el orden es invertido.
    numberCard = prompt('Escribe el número de tu tarjeta').split('').reverse();

    // Ciclo que itera por cada elemento del array numberCard.
    for (var i = 0; i < numberCard.length; i++) {
      // Si el elemento es igual a un string vacio aparece nuevo prompt.
      // Si el elemento es NaN aparece nuevo prompt.
      if (numberCard[i] === ' ' || isNaN(numberCard[i])) {
        numberCard = prompt('No coloque espacios vacíos o letras, \n vuelve a escribir el número de tu tarjeta. ').split('').reverse();
      }
    }
  } while (numberCard.length < 16 || numberCard.length > 16);

  for (var j = 0; j < numberCard.length; j++) {
    // Convierte (parsea) una cadena y devuelve un entero de la base decimal.
    var charValue = parseInt(numberCard[j]);

    // Si el índice del elemento es par, adiciona su valor a sum.
    if (j % 2 === 0) {
      sum += charValue;
    }

    // Si el índice del elemento es impar, el elemento se multiplica por 2.
    if (j % 2 !== 0) {
      // Si el producto es menor a 9, se adiciona a sum.
      if ((charValue * 2) <= 9) {
        sum += (charValue * 2);
      }

      // Si el producto es mayor a 9, se separan los dígitos del producto y se suman.
      if ((charValue * 2) > 9) {
        // El producto se convierte a string para separar los dígitos.
        var twoDigits = (charValue * 2).toString();
        var sumDigits = parseInt(twoDigits[0]) + parseInt(twoDigits[1]);
        sum += sumDigits;
      }
    }
  }

  // Si el residuo se sum entre 10 es cero, el número de tarjeta es válido.
  // Si el residuo se sum entre 10 no es cero, el número de tarjeta no es válido.
  if (sum % 10 === 0) {
    document.getElementById('demo').innerHTML = 'El número de su tarjeta es valido';
  } else
    document.getElementById('demo').innerHTML = 'El número de su tarjeta es inválido';
}
