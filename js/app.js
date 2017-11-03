// Función si es tarjeta válida
function isValidCard(Cardnumber) {
  // Declaramos un arreglo vacio
  var array = [];
  // Longitud de número de tarjeta
  var size = Cardnumber.length;
  // cada dígito de número de tarjeta
  var digit;
  // Variable que almacenará suma de digitos
  var result = 0;
  // Pasar cada número al arreglo
  for (i = 0; i < size; i++) {
    array.push(parseInt(Cardnumber[i]));
  }
  // Invertir orden de números en el array
  array.reverse();
  // Aplicar fórmula del algoritmo de Luhn
  for (var i = 0;i < size;i++) {
    // Verificar posiciones pares según computadora
    if ((i % 2) !== 0) {
      // Multiplicar por 2 y verificar si es mayor o igual a 10
      if (array[i] * 2 >= 10) {
        // Obtengo el divisor
        d = parseInt(array[i] * 2 / 10);
        // Obtengo el residuo
        r = array[i] * 2 % 10;
        // Sumo los digitos
        digit = d + r;
      } else
        digit = array[i] * 2;
    } else
      digit = array[i];
    // Sumamos todos los digitos de número de tarjeta
    result += digit;
  }
  // Si resultado de suma módulo 10 es 0, es tarjeta valida
  if (result % 10 === 0) {
    temp = true;
    alert('Tarjeta válida');
  } else {
    temp = false;
    alert('Tarjeta inválida');
  }
  return temp;
}

function validateNoString(str) {
  var temp = true;
  var char;
  // Validación de 13 dígitos
  if (str.length !== 13) {
    temp = false;
    alert('Ingrese 13 dígitos');
  }
  // validar ingreso de solo números
  for (var i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);
    if (char < 48 || char > 57) {
      temp = false;
      alert('Ingrese solo números');
      break;
    }
  }
  return temp;
}

/* Solicitar ingreso de número de tarjeta */
do {
  var Cardnumber = prompt('Ingresar número de tarjeta');
  isValidCard(Cardnumber);
}
while (Cardnumber === '' || !validateNoString(Cardnumber));
