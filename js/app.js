///Pedimos al usuario que digite los numeros de su tarjeta
var numberOfCard=prompt("Escriba un numero: ");
//Verifica si escribio algo
if(numberOfCard == " "){
  alert("Escribe el numero de tu tarjeta");
}
else{
  //Creamos una funcion para verificar la validez de la tarjeta
  function isValidCard(numberOfCard){
    //Almacenamos los numeros de la tarjeta
    var arrayOfNumberOfCard = [];
    //Hacemos un bucle para extraer los caracteres de los numeros string
    for(i = 0; i < numberOfCard.length; i++) {
      //Extraemos uno a uno los numeros string
      var firtsNumber = numberOfCard.charAt(i);
      //Enviamos los numeros al array, para almacenarlos
      arrayOfNumberOfCard.push(firtsNumber);
    }
    //El array invertimos para poder usar el algoritmo Luhn
    var arrayOfNumberOfCardRevers = arrayOfNumberOfCard.reverse();
    //Este bucle nos permite trabajar solo con los numeros de los indices pares
    for(i = 1; i < arrayOfNumberOfCardRevers.length; i+= 2){
      //Multiplicamos el los numeros de indice par por dos
      var multiplied = parseInt(arrayOfNumberOfCardRevers[i]) * 2;
      //Verificamos si es mayor o igual a 10
      if(parseInt(multiplied) >= 10){
        //Le damos al resultado un valor de tipo string para usar el indice
        var multString =multiplied.toString();
        //Para poder sumar parseamos el valor de tipo string
        var sumFigure = parseInt(multString[0]) + parseInt(multString [1]);
        //Por medio de splice cambiamos los elementos de indice par del array
        arrayOfNumberOfCardRevers.splice(i, 1, sumFigure);
       }
     }
     //Esta variable almacenará la suma de los elementos
     var sumTotal = 0 ;
     //Este bucle nos permite trabajar con todo los elementos de array
     for(i = 0; i < arrayOfNumberOfCardRevers.length; i++) {
       //Sumaremos todo los elementos del array
       sumTotal+= parseInt(arrayOfNumberOfCardRevers[i]);
     }
     //Evaluamos si la suma cumple la condicion
     if (sumTotal % 10 === 0) {
       //Retornaremos esta alerta si cumple la condicion
       return alert("Su tarjeta es valida");
     }
     else{
       //Retornaremos esta alerta si no cumple la condicion
       return alert("Su tarjeta es invalida");
     }
   }
}
isValidCard(numberOfCard);