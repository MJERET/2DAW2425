//Como seleccionar dentro del formulario.
/* var formulario1 = document.getElementById("miFormulario");
var formulario2 = document.forms[" miFormulario"];
var formulario3 = document.getElementById("form"); */
//var formulario4 = DocumentTimeline.forms[0];
//Como Seleciconar elementps dentro del formulario
//miFormulario.elements[];
//document.getElementsByTagName(InputDeviceInfo, Selection.apply);

//1º Creamos la función inicial
window.onload = iniciar;

function iniciar() {
    document.getElementById('enviar').addEventListener('click', validar, false);
}

function validar(e) {
    if(validarNombre() && validarTelefono() && validarFecha() && validarCheck() && confirm("estas seguro de querer enviar?")){
        return true;
    } else {
        e.preventDefault();
        return true;
    }
}

function error(elemento) {
    elemento.className = "error";
    elemento.focus();
}

function validarNombre() {
        //Miramos la etiqueta del atributo nombre. 
        var elemento = document.getElementById("nombre");
        LimpiarError(elemento);
        if (elemento.value == "") {                     //Verificamos que no este vacio. 
            alert("Este campo no puede estar vacío");
            error(elemento);
            return false
        }
}

function validarTelefono() {
    //Miramos la etiqueta del atributo nombre. 
    var elemento = document.getElementById("telefono");
    if (isNaN(elemento.value)) {                     //Verificamos que no este vacio. 
        alert("Este campo no puede estar vacío");
        error(elemento);
        return false
    }
}
//Tenemos que hacer que el día este entre el 1 y el 31 y el mes entre 1 y 12
function validarFecha() {
    //Miramos la etiqueta del atributo nombre. 
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;   
    var anio = document.getElementById("anio").value;
    const fecha = new Date(anio, mes, dia); 
    console .log(fecha);
    if (isNaN(fecha)) {                     //Verificamos que no este vacio. 
        alert("Fecha no válida");
        error(elemento);
        return false;
    }
}

function validarCheck() {
    var campoCheck = document.getElementById("mayor");
    if (!campoCheck.checked) {
        alert("Este campo no puede estar vacio");
        error(elemento);
        return false;
    }
    return true;
}
function LimpiarError(elemento) {
    elemento.className = ""
}