## Validación de Tarjetas
La siguiente web ha sido diseñada para validar el número de una tarjeta de crédito o débito, según el algoritmo de Luhn.
Más información sobre el algoritmo de Luhn en el siguiente link: [Algortimo_Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn)

Diagrama de flujo :
![Sin titulo](assets/docs/validacard.png "Validar tarjeta")

La web esta conformada por una página principal llamada Index.html, en la cual ejecuta la función llamada **isValidCard** alojada en el archivo app.js.

La página obtiene la entrada de datos mediante un **prompt** .
### Especificaciones de la función isValidaCard

Para la función **isValidCard** se implemento lo siguiente :

*  Crear una variable **num** con valor obtenido mediante un prompt ("Ingrese número de tarjeta").
*  Validar si el valor ingresado son solo números y el campo no debe estar vacio.
```javascript
do{
    var num= prompt("Ingrese número")
  }
while (!num  || !/^([0-9])*$/.test(num));
```
*  Crear dos variables que alojaran valores de mensaje y el acumulador sum :
```javascript
var message='';
var sum =0;
```
*  Convertir el valor **num** en un arreglo con los digitos separados. Esto mediante split('') y asignarle una variable.
```javascript
var  arrayCard=num.split('');
```
*  Revertir el orden de los dígitos dentro del arreglo.
```javascript
var arrayReverse = arrayCard.reverse();
```
*  Recorrer los dígitos mediante un for, para validar cada dato.
*  Si el dígito ocupa una posición impar :
    * Convertirlo a número y multiplicarlo por 2.
    * Luego validar si este nuevo resultado es >=10
        * Si es asi:
            * separar los digitos
            * Sumar los digitos
            * Reemplazar la suma sobre el valor incialmente elegido.

        * Si No es asi :
            * Reemplazar el número obtenido sobre el valor inicial.
*  Si el dígito no ocupa una posición impar lo salta y pasa al siguiente.
*  Convertir los elementos del arreglo que no han sido modificados en números.  
*  Sumar todos los elementos del arreglo  y alojar el resultado en la variable suma.
*  Validar según la siguiente condición :
    * Si
    ```javascript
      sum%10==0 ? message = "válido" : message = "inválido"
    ```
        *  Mostrar mensaje "válido"
    * Sino
        * Mostrar mensaje " Inválido"
* Mostrar el mensaje en la página web
