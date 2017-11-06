function isValidCard(numberCard) {

  var newArray = [];
  var n = [];
  var sum = 0;
  var verification;

  if (numberCard === undefined) { // para comprobar que no se ingrese el campo vacío
    console.log('Try again');
  } else {
    for (var i = numberCard.length - 1; i >= 0;i--) { // iteración para invertir el orden
      newArray.push(numberCard[i]);
    }
    // iteración para duplicar el valor en este caso de los impares, porque empiezo de cero. Y los almaceno en un nuevo array.
    for (var j = 0;j < newArray.length;j++) { 
      j % 2 !== 0 ? n.push(parseInt((newArray[j] * 2) / 10) + (newArray[j] * 2) % 10) : n.push(newArray[j]);

      for (var k = 0;k < n.length;k++) { // Iteración para suma de los valores del array
        sum += parseInt(n[k]);
        sum % 10 === 0 ? verification = 'Es una tarjeta válida' : verification = 'Es una tarjeta no válida';
      // ternario para verificar si la tarjeta es válida o no
      }
    }
  }
  return verification;
}

var question = prompt('Ingresa el número de tu tarjeta:'); // usuario ingresa numero de tarjeta
isValidCard(question); // 4083952015263//408965 // viendo si se actualiza