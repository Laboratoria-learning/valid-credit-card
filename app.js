function isValidCard(number) {
  if (number === '') {
    alert('No puede dejar este campo vacio');
  }
  // guardaremos el número invertido
  var arr = [];
  for (var i = number.length - 1; i >= 0; i--) {
    arr.push(parseInt(number.charAt(i)));
  }
  // recorremos el array
  for (var i = 0; i < arr.length; i++) {
    // indice impar -- para la posición par 
    if (i % 2 === 1) {
      var numberPar = arr[i] * 2;
      if (numberPar >= 10) {
        // convertir a string
        var sum = numberPar.toString();
        // con parseInt convertir a número
        var newNumber = parseInt(sum.charAt(0)) + parseInt(sum.charAt(1));
        arr[i] = newNumber;
      } else {
        arr[i] = numberPar;
      }
    }
  }
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total % 10 === 0) {
    return ('Tarjeta válida');
  } else {
    return ('Tarjeta inválida');
  }
}
var number = prompt('Introduce el número de tarjeta');
alert(isValidCard(number));
