/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let producto1;
    let producto2;
    let producto3;
    let resultadoSuma;
    let resultadoTexto;

        producto1 = parseInt(document.getElementById("txtIdPrecioUno").value);
        producto2 = parseInt(document.getElementById("txtIdPrecioDos").value);
        producto3 = parseInt(document.getElementById("txtIdPrecioTres").value);

        resultadoSuma = producto1 + producto2 + producto3;

        resultadoTexto = "El resultado es " + resultadoSuma;

        alert(resultadoTexto);
}
function Promedio () 
{
	
    let producto1;
    let producto2;
    let producto3;
    let resultadoSuma2;
    let resultadoTexto2;

    producto1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    producto2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    producto3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    resultadoSuma2 = (producto1 + producto2 + producto3) / 3;

    resultadoTexto2 = "El resultado es " + resultadoSuma2;

    alert(resultadoTexto2);
}
function PrecioFinal () 
{
	let producto1;
    let producto2;
    let producto3;
    let resultadoSuma;
    let calcIVA;
    let resultIVA;
    let resultxt;
    const IVA = 21; 
        
    producto1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    producto2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    producto3 = parseInt(document.getElementById("txtIdPrecioTres").value);

        resultadoSuma = (producto1 + producto2 + producto3);

        calcIVA = resultadoSuma * IVA / 100;

        resultIVA = calcIVA + resultadoSuma; 

        resultxt = "El precio final mas IVA es " + resultIVA;

    alert(resultxt);
}