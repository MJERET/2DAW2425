window.onload = inicio;

function inicio() {
    document.getElementById('enviar').addEventListener('click', validar, false);
    document.getElementById('mensaje').addEventListener('input', actualizarContador);
    document.getElementById('selectAll').addEventListener('change', seleccionarTodos);
    document.getElementById('preferente').value = 'Lunes'; // Set default preferente to Lunes
}

function validar(e) {
    if (validarNombre() && validarNIF() && validarMensaje() && validarDias()) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}

function validarNombre() {
    const elemento = document.getElementById('nombre');
    if (elemento.value.trim() === '') {
        alert('El nombre no puede estar vacío');
       // nombre.style.borderColor = 'red';
       error(elemento);
        return false;
    }
    limpiarError(elemento)
    return true;
}

function validarNIF() {
    const elemento = document.getElementById('nif');
    const valor = elemento.value.trim();
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    
    if (valor === "") {
        //El elemento no puede estar vacio
        error(elemento);
        return false;
    }
    //nif.style.borderColor = 'yellow';
    const numero = valor.substr(0, 8);
    const letra = valor.substr(8, 1);
    if (letras.charAt(numero % 23) !== letra) {
        //Hay que poner un nie de verdad, el ultimo numero es el correspondiente de la letra
        alert('Letra del NIF incorrecta');
        error(elemento);
        return false;
    }
    limpiarError(elemento);
    return true;
}

function validarMensaje() {
    const elemento = document.getElementById('mensaje').value.trim();
    if (elemento.length < 2 || mensaje.length > 500) {
        error(elemento);
        alert('El mensaje debe tener entre 2 y 500 caracteres');
        return false;
    }
    return true;
}

function validarDias() {
    const elemento = document.querySelectorAll('input[name="dias"]:checked');
    if (elemento.length < 2) {
        alert('Debe seleccionar al menos dos días');
        error(elemento)
        return false;
    }
    return true;
}

function actualizarContador() {
    const elemento = document.getElementById('mensaje');
    const contador = document.getElementById('contador');
    contador.textContent = 500 - elemento.value.length;
}

function seleccionarTodos() {
    const selectAll = document.getElementById('selectAll');
    const checkboxes = document.querySelectorAll('input[name="dias"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAll.checked;
    });
}

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

function error(elemento) {
    console.error("Algo ha fallado mirando el error");
    elemento.className ="error";
    elemento.focus();
}
function limpiarError(elemento){
    elemento.className = "";
}
