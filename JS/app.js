var numCard = prompt('Ingrese su numero de tarjeta');
var arr = numCard.split('');
if (arr[0] === ' ' || numCard === ' ' || numCard.length !== 16) {
  alert('Error ingrese un numero');
} else {
  if (typeof(parseInt(arr[0])) === 'number') {
    document.write('El numero de su tarjeta ingresada es: ' + numCard);
    var isValidCard = function(numCard) {
      arr.reverse();
      console.log('este es el reverso: ' + arr);
      var prod = 1;
      var sum = 0;
      for (var i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
          prod = arr[i] * 2;
          if (prod < 10) {
            arr[i] = prod;
          } else {
            resul = Math.floor(prod / 10) + (prod % 10);
            arr[i] = resul;
          }
        } else {
          arr[i] = arr[i] * 1;
        }
      }
      console.log(arr);
      for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
      }
      console.log(sum);
      if (sum % 10 === 0) {
        alert('Tarjeta de crédito válida');
        msg = 'Tarjeta de crédito válida';
      } else {
        alert('Tarjeta de crédito no válida');
        msg = 'Tarjeta de crédito no válida';
      }
      return msg;
    };
    document.write('<br> ' + isValidCard(numCard));
    opcion = true;
  } else {
    alert('Error no puede ingresar letras');
  }
}
