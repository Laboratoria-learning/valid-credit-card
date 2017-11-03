# Tarjeta de crédito válida

Crea una web que pida, por medio de un `prompt()`, el número de una tarjeta de
crédito y confirme su validez según el [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).
Lee este blog que explica [cómo funciona el algoritmo de Luhn](http://www.quobit.mx/asi-funciona-el-algoritmo-de-luhn-para-generar-numeros-de-tarjetas-de-credito.html).

## Entregables

Para cada producto debes entregar **un repositorio de GitHub** que
contenga:
1. Archivo `README.md` que explique el **pseudocódigo** de tu solución y su
**diagrama de flujo**
2. Archivo `app.js` con el **código** de tu solución
3. Archivo `index.html` vinculado con tu `app.js`

## Tips

A continuación un video de Michelle que te lleva a través del algoritmo de
Luhn y te da tips para completar este proyecto:

[![tips credit card](https://img.youtube.com/vi/f0zL6Ot9y_w/0.jpg)](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

## Consideraciones específicas

1. Tu código debe estar compuesto por 1 función: `isValidCard`
2. El usuario no debe poder ingresar un campo vacío

## Criterios de evaluación

Se tomarán en cuenta las siguientes consideraciones a la hora de evaluar tu solución:

1. Nombramiento de variables
2. Indentación
3. Validación de input: el usuario no debe poder ingresar un campo vacío o de tipo que no corresponda
4. Estructura de tus archivos
5. Archivo `README.md` correctamente redactado
6. Uso de comentarios para hacer tu código más legible
7. Que el programa cumpla con el propósito requerido

## Pseudocódigo

1. Inicio
2. Ingresar el numero de la tarjeta de credito  
3. Convierte el numero de la tarjeta en un array, luego invierte el array                                              
4. Ubica en un nuevo array a la posiciones pares e impares
5. cada elemento del array de las posiciones impares se multiplica por dos
6. Evalua si cada elemento es mayor 9, si sucede suma los elementos del valor analizado y se guarda en una variable h
7. Suma los elementos de la posiciones pares y el de la variable h
8. Evalua si la suma es divisble entre 10
9. Si lo es retorna tarjeta valida, en caso contrario tarjeta invalida
10. Fin

## DIAGRAMA DE FLUJO
![recursos](assets/docs/tarjeta_de_credito.JPG)   
