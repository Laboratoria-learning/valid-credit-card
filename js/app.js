function isValidCard() {
  do {
    var num = prompt('Ingrese número');
  }
  while (!num || !/^([0-9])*$/.test(num)); // valida que solo ingrese números y no esta vacio


  var message = '';
  var sum = 0;

  var arrayCard = num.split(''); // separar los digitos y colocarlos en un array
  var arrayReverse = arrayCard.reverse(); // revertir el arreglo

  for (i = 0;i < arrayReverse.length; i++) {
    if (i % 2 !== 0) { // si la posición es impar
      var elementSelection = parseInt(arrayReverse[i]) * 2; // multiplicar por 2
      if (elementSelection >= 10) { // validar el resultado es >=10
        var digitInitial = parseInt(elementSelection / 10); // separar los digitos
        var digitFinal = elementSelection % 10;
        var elementFinal = digitInitial + digitFinal; // sumar los digitos
        arrayReverse[i] = elementFinal; // reemplazar por el valor inicial
      } else { // si el valor es menor que 10
        var otherElement = parseInt(arrayReverse[i]) * 2; // multiplicar por 2
        arrayReverse[i] = otherElement; // reemplazar el valor
      }
    }
  }

  for (j = 0;j < arrayReverse.length;j++) {
    sum += parseInt(arrayReverse[j]); // sumar todos los elementos del array
  }

  sum % 10 === 0 ? message = 'válido' : message = 'inválido'; // si la suma es multiplo de 10 o no devolver el mensaje especificado


  return document.write('El número de tarjeta ' + num + ' es ' + message); // mostrar en la pagina web
}


isValidCard();
