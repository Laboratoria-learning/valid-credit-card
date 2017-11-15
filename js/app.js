function isValidCard(numCard) {
  var newArray = [];
  numCard = prompt('Ingrese un numero de tarjeta');

  /* Recorre hasta la longitud de la cadena */
  for (var i = 1; i < numCard.length; i++) {
   	var array = [];
   	/* A la cadena se le aplica split para obtener sus elementos por separado */
    array = numCard.split('');
    /* Se pone al reverso los valores del array */
    newArray = array.reverse();
    /* Se recorre un nuevo array y teniendo en cuenta la longitud del array	*/
    for (var j = 0; j < array.length; j++) {
	  /* Con el método map convierto los valores del array que vienen como cadena a número */
      var ints = newArray.map(parseFloat);
	  var mult = 1;
	  var sum = 0;
	  
	  /* Valida que sea par */
	  if (ints[j] % 2 === 0) {
	    mult = 2 * (ints[j]);

        /* valida que la multiplicación sea mayor o igual que 10 para sumar sus dígitos */
	    if (mult >= 10) {
		  var digitRigth = parseInt(mult / 10);
		  var digitlefth = mult % 10;
		  sum = digitRigth + digitlefth;
		  }
    	} else {
   		/* valida que sea impar y suma sus dígitos */
	  	if (ints[j] % 2 === 1) {
		   	var odd = 0;
		    odd = odd + ints[j];
		  }
		    
	    if (mult >= 10) {
		  var total = 0;
		  var total = odd + sum;
		 } else
			 total = odd + mult;
  	  }
    }
    if (total % 10 === 0)
	  return 'Tarjeta válida';	
    return 'Tarjeta no válida';
  }
}

isValidCard(4083952015263);