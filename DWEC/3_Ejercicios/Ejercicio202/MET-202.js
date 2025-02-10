/* MET-202.JS
 - En este ejercicio tenemos que hacer todas las pruebas de validación con js y check validity
 - validaciones hechas en el html.
    1. minimo y maximo de caracteres posibles.
    2. caracteres permitidos
    3. algunas opciones ya marcadas
*/
console.log("Mariano José Eret Torres \n Ejercicio 202 \n En este ejercicio tenemos que hacer todas las pruebas de validación con js y check validity");
window.onload = inicio;

function inicio() {
    console.log("JavaScript está funcionando");
    document.getElementById("enviar").addEventListener('click', validar);
    document.getElementById('mensaje').addEventListener('input', actualizarContador);
    document.getElementById('selectAll').addEventListener('change', seleccionarTodos);
    document.getElementById('preferente').value = 'Lunes'; // Set default preferente to Lunes
}
//Está función se encarga de validar todos los campos que reciben texto.
function validar(e) {
    let valido = true;

    if (!validarNombre()) valido = false;
    if (!validarNif()) valido = false;
    if (!validarFecha()) valido = false;
    if (!validarMensaje()) valido = false;

    if (!valido) {
        e.preventDefault(); // Evita que el formulario se envíe si hay errores
        return false;
    }

    return confirm("¿Estás seguro de que quieres enviar el formulario?");
}


// ------------------- Validar Nombre -------------------
//Esta función valida el campo nombre de nuestro formulario
function validarNombre() {
    var elemento = document.getElementById("nombre"); // Guardamos el texto recibido por el usuario
    console.log("el valor introducido por el usuario es: " + elemento.value);
    if (!elemento.checkValidity()) {  
        if (elemento.validity.valueMissing) {
            // Si el campo está vacío
            error(elemento, "El campo nombre no puede estar vacío");
        } else if (elemento.validity.patternMismatch) {
            // Si el nombre no cumple con el patrón
            error2(elemento, "El nombre debe tener entre 2 y 15 caracteres");
        }
        return false;
    }
    limpiarError(elemento);
    return true;
}

// ------------------- Validar NIF -------------------
function validarNif() {
    var elemento = document.getElementById("nif");
    const valor = elemento.value.trim();
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';

    if (!elemento.checkValidity()) {  
        if (elemento.validity.valueMissing) {
            error2(elemento, "El campo NIF no puede estar vacío");
        } else if (elemento.validity.patternMismatch) {
            error2(elemento, "El NIF/NIE debe tener 8 números seguidos de una letra");
        }
        return false;
    } else {
        const numero = valor.substr(0, 8);
        const letra = valor.substr(8, 1).toUpperCase();
        if (letras.charAt(numero % 23) !== letra) {
            error2(elemento, "Letra del NIF/NIE incorrecta");
            return false;
        }
    }
    limpiarError(elemento);
    return true;
}


// ------------------- Validar fecha -------------------
function validarFecha() {
    const elemento = document.querySelectorAll('input[name="dias"]:checked');
    if (elemento.length < 2) {
        error2(document.getElementById("mensajeError"), "Debe seleccionar al menos dos días");
        return false;
    }
    limpiarError(elemento);
    return true;
}


// ------------------- Validar mensaje -------------------
function validarMensaje() {
    const elemento = document.getElementById('mensaje');
    const mensaje = elemento.value.trim();
    if (mensaje.length < 2 || mensaje.length > 500) {
        error(elemento);
        alert('El mensaje debe tener entre 2 y 500 caracteres');
        return false;
    }
    limpiarError(elemento);
    return true;
}

// ---------------- funciones de error: ----------------
//Cambia el color de nuestro campo del cual haya dado fallo
function error(elemento) {
    
    document.getElementById("mensajeError").innerHTML=elemento.validationMessage;
    elemento.className = "error";
    elemento.classList.add("error");
    elemento.focus();
} //error

// Si el error es eliminado y volvemos a enviar deberiamos borrar el error anterior
function borrarError()  {
    var formulario = document.forms[0];
    for (var i = 0; i < formulario.elements.length; i++) {
        formulario.elements[i].className = "";
    }
} //BorrarError

// Borra el campo de error(la clase .error)
function limpiarError(elemento) {
    elemento.className = "";
} //LimpiarError

// Nos imprime un mensaje que es correspondiente del fallo que  nos ha dado
function error2(elemento) {
    document.getElementById("mensajeError").innerHTML=elemento.validationMessage;
    elemento.className = "error";
    elemento.classList.add("error");
    elemento.focus();
} //Error2
// ---------------- funciones de error: ----------------

// ---------------- funcion del contador: ----------------
function actualizarContador() {
    const elemento = document.getElementById('mensaje');
    const contador = document.getElementById('contador');
    contador.textContent = 500 - elemento.value.length;
    //Segun el valor del contador, a 500 le restamos el valora actual que tenga elemento 
    //de ahi actualizamos contador y mostramos cuantos caracteres faltan.
}

//---------------- funciones de agregar curso: ----------------
function agregarCurso() {
    const nuevoCurso = document.getElementById('nuevoCurso').value.trim();
    if (nuevoCurso) {
        const cursoSelect = document.getElementById('curso');
        const option = document.createElement('option');
        option.text = nuevoCurso;
        cursoSelect.add(option);
        document.getElementById('nuevoCurso').value = '';
    }
}

//---------------- funciones de error: ----------------
function seleccionarTodos() {
    const selectAll = document.getElementById('selectAll');
    const checkboxes = document.querySelectorAll('input[name="dias"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAll.checked;
    });
}