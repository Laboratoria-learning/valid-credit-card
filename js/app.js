
// creando una funcion llamada isValidCard con un parámetro numberCard
var isValidCard = function(numberCard) {
  // Declarando la variable arrNumberReverse y se asigna los valores ingresados al revés
  var arrNumberReverse = ((numberCard.toString()).split('')).reverse();
  // Creando un arreglo vacío
  var newArr = [];
  // Creando una variable sum inicializado en 0
  var sum = 0;
  // Creando una variable sumDigit inicializado en 0
  var sumDigit = 0;

  // Creando un bucle For que recorre el arreglo arrNumberReverse
  for (var i = 0;i < arrNumberReverse.length;i++) {
    // A un nuevo arreglo llamado newArr se asigna los valores convertidos de string a enteros
    newArr[i] = parseInt(arrNumberReverse[i]);
  };

  // Creando un bucle para recorrer el nuevo arreglo llamado newArr
  for (var j = 0;j < newArr.length;j++) {
    // Si el residuo de la posición mas uno es cero
    if ((j + 1) % 2 === 0) {
      // Si el elemento del arreglo newArr multiplicado por 2 es mayor igual que 10
      if (newArr[j] * 2 >= 10) {
        // la sumDig es igual a la suma de los digitos
        sumDigit = Math.trunc((newArr[j] * 2) / 10 + (newArr[j] * 2) % 10);
        // Almaceno en el acumulador sum la suma de los digitos
        sum += sumDigit;
      } else {
        // Almacena en sum el elemento del array multiplicado por 2
        sum += newArr[j] * 2;
      }
    } else {
      // Almacena en sum el elemento del array
      sum += newArr[j];
    }
  };

  // Se crea una condición para validar si la sum mod 10 es 0
  if (sum % 10 === 0) {
    // Muestra en una cajita el mensaje 'Número de tarjeta Válido'
    alert('Número de tarjeta válido');
  } else {
    // Muestra en una cajita el mensaje 'Número de tarjeta No Válido'
    alert('Numero de tarjeta no válido');
  }
};

do {
  // creando la variable numberCard para ingresar el número de la tarjeta de crédito
  var numberCard = parseInt(prompt('Ingrese su tarjeta de credito'));
  // Mientras el número de la tarjeta ingresada sea undefined seguir con el bucle
} while (numberCard === undefined);

// Llamando a la funcion isValidCard
isValidCard(numberCard);
