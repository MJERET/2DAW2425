/*Clase 28-01-2025
 - En este js vemos el funcionamiento de checkValidity y como puede validar varios casos*/
window.onload = iniciar;

//Función de inicio que verifica nuestro arranque
function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar);   //función que llama a validar
}

//function validar que llama a las otras 3 funciones de validación
function validar(e) {
    if (validarNombre() && validarEdad && validarTelefono && confirm("¿Estas seguro de que quieres enviar el formulario?")) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

function validarNombre() {
    var elemento = document.getElementById("nombre");
    //Miramos el elemento y si no pasa la validación devuelve false, sino true
    if (!elemento.checkValidity()) {
        if(elemento.validity.valueMissing) {
            // 
            error2(elemento, "Debe introducir un nombre. No vacio")
        }
        if(elemento.validity.patternMismatch) {
            error2(elemento, "El nombre debe tener entre 2 y 15 caracteres");
        }
        error(elemento);
        return false;
    }
    return true;
}

function validarTelefono(){
    var elemento = document.getElementById("telefono");
    //Miramos el elemento y si no pasa la validación devuelve false, sino true
    if (elemento.checkValidity()){
        if(elemento.validity.valueMissing) {
            error2 (elemento, "debe introducir un teléfono");
        }
        if(elemento.validity.patternMismatch) {
            error2 (elemento, "debe introducir 9 caracteres")
        }   
        error(elemento);
        return false;
    }
    return true
}

function validarEdad() {
    var elemento = document.getElementById("Edad");
    //Miramos el elemento y si no pasa la validación devuelve false, sino true
    if (elemento.checkValidity()){
        error(elemento);
        return false;
    }
    return true
}

function error(elemento) {
    document.getElementById("mensajeError").innerHTML=elemento.validationMessage;
    elemento.className = "error";
    elemento.focus();
}

//
function borrarError()  {
    var formulario = document.forms[0];
    for (var i = 0; i < formulario.elements.length; i++) {
        formulario.elements[i].className = "";
    }
}

function limpiarError(error) {
    elemento.className = "";
}

function error2(elemento, mensaje) {
    document.getElementById("mensajeError");
    elemento.className = "error";
    elemento.focus();
}
