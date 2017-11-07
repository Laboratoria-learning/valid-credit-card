var pasword = prompt('Enter your card-number!!!');
// Ejemplos:
//card-numbers= 3625102593 || 4625102593
//creando funcion para comprobar si la targeta es valida o no?
function isValidCard(cardNumber) {
	cardNumber = '0' + cardNumber;
	var cardNumberArray = cardNumber.split('');
	cardNumberArray = cardNumberArray.map(function (n) { return parseInt(n) })
	var sum = 0;
	var res = 0;
	for (var i = 0; i < cardNumber; i++) {
		if (i % 2 == 0) {  //par
			res = cardNumberArray[i] * 2;
			if (res >= 10) {
				res = res / 10 + res % 10;
			}
			sum += res;

		} else { //impar
			sum += cardNumberArray[i];
		}
	}
	console.log('La suma fue :' + sum);
	if (sum % 10 == 0) {
		return true;
	} return false;
}

console.log(isValidCard(pasword));