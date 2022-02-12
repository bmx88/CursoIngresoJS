/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numero1;
	let numero2;
	let resultado;
	let mensaje;

numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

resultado = numero1 + numero2;

mensaje = "La suma es " + resultado;

alert(mensaje);
}

function restar()
{
	let numero1;
	let numero2;
	let resultado2;
	let mensaje2;

numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

resultado2 = numero1 - numero2;

mensaje2 = "La resta es " + resultado2;

alert(mensaje2);
}

function multiplicar()
{ 
	let numero1;
	let numero2;
	let resultado3;
	let mensaje3;

numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

resultado3 = numero1 * numero2;

mensaje3 = "La multiplicacion es " + resultado3;

alert(mensaje3);
}

function dividir()
{
	let numero1;
	let numero2;
	let resultado4;
	let mensaje4;

numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

resultado4 = numero1 / numero2;

mensaje4 = "La division es " + resultado4;

alert(mensaje4);
}

