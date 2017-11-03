do{
  var num=prompt('Ingrese tarjeta de credito'); //validar que ingrese un dato
}while(!num);
var cont=0; //contador para ver si se ingresa un numero
for(var i=0;i<num.length;i++){ //recorre la cadena num
  if(isNaN(num[i])===true){  //si en la cadena hay una letra es true
    cont=1; //si es una letra el contador sera 1
  }
}
if(cont===1){
  alert('Error al ingresar los datos'); //si se ingreso un numero dara una alerta de error
}
else{

function isValidCard(num){
  var array=[]; //array donde se almacenara los numeros de forma inversa
  array[0]=0; //en el indice se almacenara 0 ya que empezamos desde el indice 0
  var j=1; //la variable j es para que se almacene en el array los numero de manera inversa
  var sum=0; //suma inicializa en 0
  for(var i=num.length-1;i>=0;i--){  //para almacenar los numeros de forma inversa
    array[j]=parseInt(num[i]); //en el array se empezara almacenar desde el indice 1
    j++;
  }
  for(var s=0;s<array.length;s++){ //recorre la cadena
    if(s%2===0){  //ve los indices pares
      array[s]=array[s]*2; //los indices pares lo multiplica por dos
      if(array[s]>=10){ //si es mayor o igual a 10
        var digitOne=parseInt(array[s]/10); //extrae el primer digito
        var digitTwo=array[s]%10;  //extrae el segundo digito
        array[s]=digitOne+digitTwo; //suma los digitos
      }
    }
    sum +=array[s]; //suma todos los numeros del array
  }
  if(sum % 10 ===0){ //verifica si el residuo de la suma entre 10 es 0
    return true; //si el residuo es 0 retornara true
  }
  else{
    return false; //si el residuo es diferente a 0 retornara false
  }
}
  if(isValidCard(num)===true){ //si es true entonces la tarjeta es valida
  alert('La tarjeta es valida');
  }
  else{  //si retorna false la tarjeta es invalida 
  alert('La tarjeta es invalida');
  }
}
