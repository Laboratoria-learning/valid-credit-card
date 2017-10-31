//Pedimos al usuario que digite los numeros de su tarjeta
var numberOfCard=prompt("Escriba un numero: ");
//Verifica si escribio algo
if(numberOfCard == " "){
  alert("Escribe el numero de tu tarjeta");
}
else{
  function isValidCard(numberOfCard){
    //Almacenamos los numeros de la tarjeta
    var arrayOfNumberOfCard = [];
    //Hacemos un bucle para extraer los caracteres de de numberOfCard
    for(i = 0; i < numberOfCard.length; i++){
      var firtsNumber = numberOfCard.charAt(i);
      arrayOfNumberOfCard.push(firtsNumber);
    }
    var arrayOfNumberOfCardRevers = arrayOfNumberOfCard.reverse();
    for(i = 1; i < arrayOfNumberOfCardRevers.length; i+=2){
      var multiplied = arrayOfNumberOfCardRevers[i] * 2
      if(parseInt(multiplied) >= 10){

      }
    }

   return arrayOfNumberOfCardRevers;
  }

}
isValidCard(numberOfCard);
