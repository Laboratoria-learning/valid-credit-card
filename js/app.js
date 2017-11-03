//Solicitando un número de tarjeta
var cardNumber = prompt('Ingrese número de tarjeta:');

//Pasando los caracteres a un nuevo array en orden inverso, conviertiendo de cadena a número
var reverseArray = function(string) {
  //Creando array vacio para agregar los caracteres en orden inverso
  var array = [];
  //Iterando los elementos del array
  for (var i=0; i<string.length; i++) {
    //Agregando elementos uno delante de otro
    array.unshift(parseInt(string[i]));
  }
  //Agregando 0 como elemento
  array.splice(0,0,0);
  return array;
}

var isValidCard = function (array) {
  //Declarando e inicializando acumulador para la suma
  var sum = 0;
  //Iterando los elementos del array
  for (var i=0; i<array.length; i++) {
    //Identificando elementos de indice par
    if (i!==0 && i%2===0) {
      //Obteniendo el doble del valor del elemento en la posición i
      var value = array[i]*2;
      //Identificando valores que sean menor a 10
      if (value < 10) {
        //Reemplazando los nuevos valores en la misma posición
        array.splice(i, 1, value); // [ 1, 2, 6, 4, 5, 6, 7 ]
      }
      //Identificando valores que sean mayor o igual a 10
      if (value >= 10) {
        //Convirtiendo el valor a string para poder tomar digitos
        var strValue = value.toString();
        //Sumando valores de los digitos
        var newNumber = parseInt(strValue[0]) + parseInt(strValue[1]);
        //Reemplazando los nuevos valores en la misma posición
        array.splice(i, 1, newNumber);
      }
    }
    //Sumando los elementos de la posición i
    sum += array[i];
  }
  //Validando para mostrar mensaje
  if (sum%10===0) {
    alert('Tarjeta de crédito válida');
  } else {
    alert('Tarjeta de crédito inválida');
  }
}

isValidCard(reverseArray(cardNumber));
