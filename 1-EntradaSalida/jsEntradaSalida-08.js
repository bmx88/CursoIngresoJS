/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numero1;
	let numero2;
	let resultado;
	let mensaje;

	numero1 = document.getElementById ("txtIdNumeroDividendo").value;
	numero2 = document.getElementById ("txtIdNumeroDivisor").value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	resultado = numero1 % numero2;

	mensaje = "El resultado es " + resultado;

	alert(mensaje);
}
