## Tarjeta de credito valida

La funcion del programa es pedir al usuario  que digite su numero de  tarjeta de credito
para que  pueda ser  validada y sea conforme.


##### En esta ocasion crearemos un programa donde se nos indica si una tarjeta es valida o no.

En las siguientes lineas el pseudocodigo nos ayudara a visualizar los pasos a realizar
nuestro programa de Tarjeta de credito valida por medio del algoritmo de luhn.

Primer paso

>Inicio

declarar una variable para poder ingresar los datos del numero de tarjeta.

>var ==> tarjeta

Mostrar en pantalla.

>"Digitar el numero de su tarjeta".

Procesar y validar  el numero de la tarjeta con el algoritmo de luhn

Pasar el N° de los digitos que estan en la posicion par ,deben ser multiplicado por 2
y sumados si son >= 10 .

> n1 , n2 , n3 , n4, n5 ,n6 , n7 ,n8 ,n9 ,n1o , n11, n12,n13 ===> N° de la tarjeta== n(i)

>       2         4      6         8      10         12      ===>Posicion

 n1  +  n2*2 +n3  +  n4*2 +n5  +  n6*2+n7  +  n8*2+n9 + n10*2 +n11 +n12*2+n13 ==== suma total


si la suma total y 10 dan como residuo igual a cero la tarjeta es valida.

Fin