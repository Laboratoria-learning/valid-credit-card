var cardNumber = prompt('INGRESE SU NUMERO DE TARJETA'); // creammos la variable donde se almacena el numero de la tarjeta
var array = []; // pasar los elementos de la tarjeta a un array
for (i = 0; i < cardNumber.length; i++) {
  array.push(cardNumber[i]);
}

for (j = 0; j < array.length; j++) {// invertir los elementos del array
  var item = array.pop();
  array.splice(j, 0, item);
}
var newArray = []; // variable donde se almacenara los numeros
for (k = 0; k < array.length; k++) {
  newArray.push(parseInt(array[k]));
}
var newArray = []; // variable donde se almacenara los numeros de uno en uno //4088521938925895
for (k = 0; k < array.length; k++) {
  newArray.push(parseInt(array[k])); // newArray[5, 9, 8, 5, 2, 9, 8, 3, 9, 1, 2, 5, 8, 8, 0, 4]
}
// separando numeros pares de impares
var pair = []; // numeros pares
var impair = 0; // numeros impares // 47
for (m = 0; m < newArray.length; m++) {
  if ([m + 1] % 2 === '0') {
    pair.push((newArray[m]) * 2);
  } else if ([m + 1] % 2 !== 0) {
    impair += newArray[m];
  }
}
// separando los numeros pares = o mayores que 10
var smallNumbers = 0; // numeros menores que 10
var bigNumbers = []; // numeros mayores que 10
for (p = 0; p < pair.length; p++) {
  if (pair[p] <= 10) {
    smallNumbers += (pair[p]);
  } else {
    bigNumbers.push(pair[p]); // [ 10, 18 ]
  }
}

var joinedNumbers = bigNumbers.join(''); // 1018
var numberSeparated = joinedNumbers.split(''); // [ '1', '0', '1', '8' ]

var arrayNumbers = [];
for (q = 0; q < numberSeparated.length; q++) { // pasando numeros para sumarlos // [ 1, 0, 1, 8 ]
  arrayNumbers.push(parseInt(numberSeparated[q]));
}

var sumOfLarge = 0;
for (r = 0; r < arrayNumbers.length; r++) {
  sumOfLarge += (arrayNumbers[r]);
}

var count = impair + smallNumbers + sumOfLarge;
if (cardNumber === '' || cardNumber !== Number) {
  alert('TIENE QUE INGRESAR NUMERO VALIDO ');
} else if (count % 10 === 0) {
  alert('TU TARJETA DE CREDITO ES VALIDA ');
} else {
  alert('TU TARJETA DE CREDITO ES INVALIDA');
}

// 4088521938925895
