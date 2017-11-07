function isValidCard(tarjeta) {
  var inverse = tarjeta.toString().split(''); // convertimos el numero ingresado primero a string y luego convertimos a array
  inverse.reverse(); // una vez obtenido un array, lo invertimos
  var adder = 0; // un sumador inicializado en cero

  for (var i = 0; i < inverse.length; i++) { // recorrido del array
    if ((i + 1) % 2 === 0) {
      if (inverse[i] * 2 > 9)
        inverse[i] = (inverse[i] * 2) % 10 + 1; // todo los numeros mayores a 9 comienzan en 1 por lo que se suma 1 mas el numero de la derecha que se extrae con el operador modulo
      else
        inverse[i] = inverse[i] * 2;
    }

    adder += parseInt(inverse[i]);
  }

  return (adder % 10 === 0) ? document.write('Tarjeta Válida') : document.write('Vuelva a realizar el proceso. Gracias');
}

var validate = prompt('Introduzca el número de su tarjeta');
// validacion de ingreso de datos
if ((parseInt(validate) !== validate) || (validate === null)) { // el programa comprueba si el numero ingresado es un entero y asegura que el numero de tarjeta sea un campo obligatorio
  validate = prompt('Error. Introduzca el número de su tarjeta');
} else isValidCard(validate);
