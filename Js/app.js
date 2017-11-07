function isValidCard(number) {
  number.reverse(); // revierte el array ingresado.
  var newArray = []; // se crea un for para que cuente de uno en uno dentro del array.
  for (var i = 0; i < number.length; i++) {
    var result; // si el numero sacado en i es par entonces multiplicara * 2
    while (number[1] % 2 === 0) {
      result1 = number[i] * 2; // dentro del mismo si el resultado de la multiplicación es mayor a 10. Entonces dividira 10/2 donde dara resultado
      if (result1 >= 10) {// 10
        result = result1 / 10; // ->1.2 -- Math.trunc saca solo el primer valor dado de un decimal.
        var oneNumber = Math.trunc(result); // ->1
        var twoNumber = result1 % 10;
        var finalResult = oneNumber + twoNumber;
        newArray.push(finalResult);
      } else if (result < 10) {
        newArray.push(result1);
      }
      if (number[i] % 2 !== 0) {
        newArray.push(number[i]);
      }   
      return console.log(newArray);    
    }      
  }
}
isValidCard([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3]);