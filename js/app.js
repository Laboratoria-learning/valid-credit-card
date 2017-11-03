/* Create a website that asks, by means of a prompt (), the number of a credit card and confirm its validity according to Luhn's algorithm.
Specific Considerations:
Your code must consist of 1 function: isValidCard
The user should not be able to enter an empty field */

/* Creating the function CardNumberInArray to pass the digits of the number
of the card entered into an array in reverse order */
function CardNumberInArray(numberCard) {
  if (numberCard === '') {
    alert('INGRESAR almenos un numero');
  } else {
    var cardNumberInArrayReverse = [];
    for (var i = 0; i < numberCard.length; i++) {
      /* Accessing each digit of the entered number (string), transforming it into "number" (parseInt) and adding to the new array
       with "unshift" so that it is in the inverted order */
      cardNumberInArrayReverse.unshift(parseInt(numberCard.charAt(i)));
    }
    return cardNumberInArrayReverse; // Retornamos el nuevo Array.
  }
}
do {
  var inPut = prompt('Ingrese su numero de tarjeta de credito');
  var newCard = CardNumberInArray(inPut);
  // console.log (newCard);
} while (inPut === '');

/* Creating a function that returns a new array with the digits
duplicates of the even positions of the "newCard" array.*/
function duplicateDigitCard(newCard) {
  var array = [];
  for (var j = 0; j < newCard.length; j++) {
    // Creating the condition to locate the even positions of the "newCard" array.
    if (j % 2 === 1) {
    // duplicating the digits of the even positions.
      var result = newCard[j] * 2;
      // creating the condition to add the digits if the duplicate digit is greater than or equal to 10.
      if (result >= 10) {
        var sum = 0;
        for (var i = 0; i < String(result).length; i++) {
          sum += parseInt(String(result).charAt(i));
        }
        array.push(sum);// adding to the new array the sum of the digits of the duplicate digit that is> = 10.
      } else {
        array.push(result); // adding duplicate digits <10 to the new array.
      }
    } else {
      array.push(newCard[j]); // adding the digits of the odd positions to the new array.
    }
  }
  return array; // Retornar el nuevo array
}
// Calling the function and placing the new array in the variable "modifiedCardNumber"
var modifiedCardNumber = duplicateDigitCard(newCard);

/* Creating a function (isValidCard) that adds the digits of the new array "modifiedCardNumber" and see if it is divisible by 10 to verify the validity
of the card number */
function isValidCard(modifiedCardNumber) {
  var sumTotal = 0; // creating sumTotal variable where the total of digits will be added at the end
  for (var i = 0; i < modifiedCardNumber.length; i++) {
    sumTotal += modifiedCardNumber[i];
  }
  /* Creating the condition that the total sum be divisible by 10 to verify
  the validity of the card number */
  if (sumTotal % 10 === 0) {
    alert('Su numero de tarjeta es valido');
  } else {
    alert('Su numero de tarjeta  no es valido');
  }
}
// Llamando la funcion
isValidCard(modifiedCardNumber);
