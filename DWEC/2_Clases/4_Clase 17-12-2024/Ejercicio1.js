/* Ejercicio1.js
- Dentro de este archivo cambiaremos el color de fondo, los bordes y el texto
*/ 

function CambiarTexto() {
    //Tiene que recibir idSpanTexto
    let texto = document.getElementById("idTexto").value;
    document.getElementById("idSpanTexto").innerHTML =texto; 
}

function CambiarColorFondo() {
    //Tiene que recibir idColorFondo
    let colorfondo = document.getElementById("idColorFondo").value;
    document.getElementById('idDivTexto').style.background = colorfondo; 
}

function CambiarColorBorde() {
    //Tiene que recibir idColorBorde
    let colorborde = document.getElementById("idColorBorde").value;
    document.getElementById('idDivTexto').style.borderColor = colorborde; 
}

function CambiarColorTexto() {
    //Tiene que recibir idColorTexto
    let textocolor = document.getElementById("idColorTexto").value;
    document.getElementById("idSpanTexto").style.color =textocolor; 
}