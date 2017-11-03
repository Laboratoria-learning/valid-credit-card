# VERIFICACION DE NUMERO TARJETA DE CREDITO
## ENUNCIADO
- Crea una web que pida, por medio de un _prompt()_ , el número de una tarjeta de crédito y confirme su **_validez_** según el _algoritmo de Luhn_.

## OBJETIVO
- Crear un programa que **_VERIFIQUE_** si el numero de la tarjeta de credito ingresada es valida usando el _algoritmo de Luhn_

### flujograma
 - Revisar el archivo Excel.xls **_flujograma tarjeta de crédito válida_** encontrada en la carpeta **_docs_** , enlace:
 

### pseudocódigo


    PROGRAMA: Comprobar validez de una tarjeta.

    ENTRADAS: N° de tarjeta, sin contener campos vacios

    SALIDA: N° de tarjeta valido o N° de tajeta invalido

    - MOSTRAR “ingrese su numero de tarjeta”;

    - LEER el numero de tarjeta;
    - PARA  i = 0 hasta la longitud del numero de tarjeta (cadena de texto) con INCREMENTOS de +1
      - TRANSFORMAR cada digito en numero entero;
      - AGREGAR cada digito a la la primera posicion de la izquierda;

    FIN PARA;
    - RETORNA numero invertido;

    - DUPLICAR  los digitos de las posiciones pares del numero invertido;

    - SI el numero duplicado es > 10 ENTONCES;
       - Sumar los digitos del resultado;

    - SUMAR, TOTAL= digitos + nuevos digitos obtenidos

    - SI TOTAL % 10 ENTONCES
      - MOSTRAR "su numero de tarjeta es valida"

    - SI NO
      - MOSTRAR "su numero de tarjeta es Invalida"

    FIN PROGRAMA.
