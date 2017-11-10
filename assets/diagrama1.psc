Funcion variable_de_retorno <- isValidCard ( )
	sum<-0
	Escribir numberCard
	Repetir
		Leer numberCard
		Para i<-0 Hasta numberCard.length Con Paso 1 Hacer
			Si (numberCard[i]=' ' o isNaN(numberCard[i])) Entonces
				Escribir numberCard
			Fin Si
		Fin Para
	Hasta Que (numberCard.length <16 o numberCard.length >16) 
	Para j<-0 Hasta numberCard.length Con Paso 1 Hacer
		charValue<-parseInt(numberCard[j])
		Si j%2<-0 Entonces
			sum<-sum + charValue
		Fin Si
		Si j%2<>0 Entonces
			Si ((charValue*2)<=9) Entonces
				sum<-sum + (charValue*2)
			Fin Si
			Si ((charValue * 2) > 9) Entonces
				twoDigits<-charValue*2.toString
				sumDigits<-parseInt(twoDigits[0]) + parseInt(twoDigits[1]);
				sum<-sum+sumDigits
			Fin Si
		Fin Si
	Fin Para
	Si sum%10<-0 Entonces
		Leer "El número de su tarjeta es valido"
	SiNo
		Escribir document.getElementById("demo").innerHTML =("El número de su tarjeta es inválido")
	Fin Si
Fin Funcion
Algoritmo tarjeta_de_credito
	
FinAlgoritmo
