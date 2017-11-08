// Creación de una función para validar tarjetas de crédito mediante algoritmo Luhn
function isValidCard(creditCard) {
  // Creación de una variable centinela, debe ser false si la tarjeta es inváldida y true si es válida
  var centinel = false;
  // Creación de un array evenDigits en el que se introducirán los dígitos pares contando de derecha a izquierda
  var evenDigits = [];
  // Creación de una variable sum para almacenar la suma de los dígitos
  var sum = 0;

  // Validación para que no se pueda ingresar un campo vacío.
  if (creditCard === '') {
    alert('No puede ingresar un campo vacío.');
    return centinel;
  }

  // Recorrido de los digitos pares del string creditCard
  // El contador inicia en el segundo dígito desde la derecha, si es mayor o igual que cero, entra al bucle
  for (var i = creditCard.length - 2; i >= 0; i -= 2) {
    // Según el algoritmo, los dígitos pares se multiplican por 2
    if (creditCard[i] * 2 > 9)
      // Si el resultado es mayor que 9, se le resta 9 y entra a evenDigits mediante un push
      evenDigits.push(creditCard[i] * 2 - 9);
    else
      // De lo contrario, el resultado entra a evenDigits
      evenDigits.push(creditCard[i] * 2);
  }

  // Recorrido de los dígitos impares del string creditCard
  // El contador inicia en el primer dígito desde la derecha, si es mayor o igual que cero entra al bucle
  for (var i = creditCard.length - 1; i >= 0; i -= 2)
    // Se suma el valor de cada dígito a impar a la variable sum, el resultado es el nuevo valor de sum
    sum += parseInt(creditCard[i]);

  // Recorrido del array evenDigits de uno en uno
  for (var i = 0; i < evenDigits.length; i++)
    // Se suma el valor de cada elemento a la variable sum, el resultado es el nuevo valor de sum
    sum += evenDigits[i];

  // Si el valor final de sum es múltiplo de 10
  if (sum % 10 === 0) {
    // El valor de centinel es true y la tarjeta el válida
    centinel = true;
    alert('Tarjeta válida.');
    // De lo contrario es false y la tarjeta NO es válida
  } else {
    centinel = false;
    alert('Tarjeta de crédito inválida.');
  }
  return centinel;
}

// Bucle para que no se pueda ingresar un campo vacío
do {
  var centinel = false; // Se crea una variable centinel para realizar las validaciones
  var creditCard = prompt('Ingrese el número de su tarjeta de crédito:'); // Se pide al usuario el número de su tarjeta mediante un prompt
  var digits = 0; // Se crea una variable para contar los dígitos

  // Si creditCard es un string vacío, se muestra el mensaje 'No puede dejar este campo vacío'
  if (creditCard === '') {
    alert('No puede dejar este campo vacío.');
  } else if (creditCard !== '') {
    // Sino, recorre el string
    for (var i = 0; i < creditCard.length; i++) {
      if (creditCard.charCodeAt(i) >= 48 && creditCard.charCodeAt(i) <= 57) {
        // Por cada caracter numérico digits aumenta en 1
        digits += 1;
      }
    }
    if (digits === 16 && creditCard.length === 16) { // Si creditCard tiene 16 caracteres y todos son numeros, centinel es true y se llama a la función
      centinel = true;
      isValidCard(creditCard);
    } else // Sino, se muestra una alerta
      alert('Por favor, ingrese 16 caracteres numéricos.');
  }
} while (centinel === false); // Si centinel es false vuelve a correr el bucle