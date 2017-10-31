var cardNumberGiven = [];
var addingNumbers = cardNumberGiven.values =(prompt('Ingrese su numero de tarjeta'));
var digits = addingNumbers.split("").map(Number).reverse();


var isValidCard = function(digits){
    
    var sum = 0;
    
    for (var i = 0; i<digits.length;i++){
        var position = i;
        if(i % 2 === 0) {
          position *= 2 ;
          if (position >9) {
          position = (position%10);
        }
    }
    sum += position;
   
     
}
 return (sum%10) === 0;
};

isValidCard(123457);

