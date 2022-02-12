/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

let largoTerreno;
let anchoTerreno;
let perimetro;
let alambre;
let mensajeAMostrar;

largoTerreno=parseFloat(document.getElementById("txtIdLargo").value);
anchoTerreno=parseFloat(document.getElementById("txtIdAncho").value);

perimetro = (largoTerreno + anchoTerreno) * 2;

alambre = perimetro * 3

mensajeAMostrar = "Es necesario comprar " + alambre + " metros de alambre";

alert(mensajeAMostrar);

}

function Circulo () 
{

let radio;
let totalAlambre;
let mensaje;

radio=parseFloat(document.getElementById("txtIdRadio").value);

totalAlambre = (radio * 2 * 3,14);

mensaje = ("Total de alambre a comprar " + totalAlambre + " metros");

alert(mensaje);

}

function Materiales () 
{

let ancho;
let largo;
let sup;
let totalBolsasCem;
let totalBolsasCal;
let mensaje;

largo = parseFloat(document.getElementById("txtIdLargo").value);

ancho = parseFloat(document.getElementById("txtIdAncho").value);

sup = largo * ancho;

totalBolsasCem = sup * 2;

totalBolsasCal = sup * 3;

mensaje = "Total materiales construcción - Bolsas de cemento: " + totalBolsasCem + " y " + totalBolsasCal + " bolsas de cal";

alert(mensaje);

}