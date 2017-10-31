//Creamos una función isValidCard y mediante un for obtenemos un nuevo array inverso//

var card = prompt("Ingrese el número de tarjeta");

var isValidCard = function (isValidCard) {

    var newcard = [];

    var size = isValidCard.length;

    var lastPosition = size-1;

    for (var i = lastPosition; i>=0; i--) {

        newcard.push(isValidCard[i]);

    }


      return newcard;

}

document.write
isValidCard(card);
