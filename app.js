function isValidCard(number){
    if (number === ''){
        alert('No puede dejar este campo vacio');
    }
    var arr = [];//guardaremos el numero invertido
    for (var i = number.length - 1; i >= 0; i--){
        arr.push(parseInt(number.charAt(i)));//
    }
    //recorremos el array
    for (var i = 0; i < arr.length; i++){//La primera vuelta no va entrar
        //indice impar por logica entrara para la posicion par 
        if (i  % 2 === 1){
            var numberPar = arr[i] * 2;
            if (numberPar >= 10){
                //convierto a string
                var sum = numberPar.toString();
                //con parseInt convierto a numero
                var newNumber = parseInt(sum.charAt(0)) + parseInt(sum.charAt(1))
                arr[i] = newNumber;
            }else {
                arr[i] = numberPar
            }
        }
    }
    var total = 0;
    for (var i = 0; i < arr.length; i++){
        total += arr[i];
    }
    if (total % 10 === 0){
        return('Tarjeta valida');
    }else {
        return ('Tarjeta invalida');
  }
}
var number = prompt('Introduce el numero de tarjeta');
console.log(isValidCard(number));