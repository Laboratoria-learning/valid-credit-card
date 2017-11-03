// pidiendo al usuario su número de tarjeta
var input = prompt('¿Cual es el numero de su tarjeta?');
// creando la funcion
function isValidCard(number) {
// creando la variable que contendra los numeros y los convertira en un string
  var numcard = number.toString();
  // convirtiendo a un array a la variable
  var array = Array.from(numcard);
  // se usa la función reverse para invertir las posiciones
  var newarray = array.reverse();
  // creara la variable sum que iran conteniedo los valores de los index
  var sum = 0;
  // crear un array vacio que contendra los valores que son pares
  var arraypar = [];
  // recorriendo el array en posicion inversa
  for (var i = 0;i < newarray.length;i++) {
    // creando la condicion para tomar los valores pares
    if (i % 2 !== 0 && i > 0) {
    // mediante la funcion push se insertan al nuevo array de posicion par
      arraypar.push(newarray[i]);
    }
    // de lo contario ir sumando sus valores a sum
    else {
      sum += parseInt(newarray[i]);
    }
  }
  // se recorre el nuevo arraypar
  for (j = 0;j < arraypar.length;j++) {
  // se crea la condicion si multiplicado por 2 es menor que 10
    if (parseInt(arraypar[j]) * 2 < 10) {
    // si es asi se suman los valores a sum
      sum += parseInt(arraypar[j]) * 2;
    }
    // de lo contario si es mayor o igual a 10
    else if (parseInt(arraypar[j]) * 2 >= 10) {
    // se convierte a un string
      var valor = (arraypar[j]).toString();
      // y se crea la variabe sumalength que contiene la suma de sus digitos
      var sumalength = 0;
      for (var k = 0;k < valor.length;k++); {
        sumalength += parseInt(valor[k]);
      }
      sum += sumalength;
    }
  }
  if (sum % 10 === 0) {
    alert('Su tarjeta es válida');
  }
  else {
    alert('Su tarjeta es invalida');
  }
}
console.log(isValidCard(input));
