var n = prompt("Ingrese su Nro de Tarjeta de credito");
function  isValidCard(n){
    var val =/^[0-9]*$/;
    if(n ==="" || (!val.test(n)) ){
     do{
       var m = prompt("Esta vacio o solo debe contener digitos de 0-9,Por favor vuelva a ingresar ");    
       
     }while(!m || !val.test(m) );
     n = m;
   }



/*var arr = [];
for(i=0;i<(n.length);i++){
     arr.push(parseInt(n[i]));
}*/
  var arr = n.split("");
  for (var i = 0; i < arr.length; i++) {
    var x = parseInt(arr.pop());
    arr.splice(i, 0, x);
  }



var sum = arr[arr.length-1];
for(i=0;i<(arr.length-1);i++){
          if((i+1)%2 === 0){
            p1=  arr[i]*2; 
          //  
                     if (p1>9){
                         c2 = parseInt(p1/10);
                         r2 = parseInt(p1%10); 
                         p2= c2+r2;
                      }else {
                      p2=p1;}
            arr.splice(i,1,p2) ; 
            
            }
       sum = sum+arr[i];
    }

   
    if(sum%10=== 0){
      alert(n +": Tarjeta valida " + ", suma : " +sum)
    }else{
      alert(n +": Tarjeta invalida"+ ", suma :" +sum)
    }
}    

isValidCard(n);