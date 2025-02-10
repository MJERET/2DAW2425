const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', Obtenerdatos)
function Obtenerdatos() {
    const url='data/datos.txt'
    fetch(url)
        .then(respuesta => {
            console.log(respuesta);
            console.log(respuesta.status);
            console.log(respuesta.statusText);
            console.log(respuesta.text);
            console.log(respuesta.url);
            return respuesta.text();
        })
        .then (data => {
            console.log(data);
        })
}
const cargarJSON = document.querySelector('#cargarJSON');
cargarJSON.addEventListener('click', ObtenerJSON);
function ObtenerJSON() {
    const url='data/empleado.json'
    fetch(url)
    .then(respuesta => {
        console.log(respuesta);
        console.log(respuesta.status);
        console.log(respuesta.statusText);
        console.log(respuesta.text);
        console.log(respuesta.url); 
        return respuesta.json();
    })
    .then(respuesta => {
        mostrarHTML(respuesta);
    })

    .then(data => {
        console.log(data);
        imprimir(JSON.stringify(data, null, 2));
        localStorage.setItem('empleado', JSON.stringify(data));
    })
    .catch(error => {
        console.error(error);
    });
}

const cargarJSONArray = document.querySelector('#cargarJSONArray');
cargarJSONArray.addEventListener('click', ObtenerJSONArray);
function ObtenerJSONArray() {
    const url='data/empleados.json'
    fetch(url)
        .then(respuesta => {
            console.log(respuesta);
            console.log(respuesta.status);
            console.log(respuesta.statusText);
            console.log(respuesta.text);
            console.log(respuesta.url); 
            return respuesta.json();
        })
        .then(data => {
            data.forEach(element => {
                mostrarHTML(element);
            });
            localStorage.setItem('empleados', JSON.stringify(data));
        })
        .catch(error => {
            console.error(error);
        });
} //OBTENERJSONARRAY



function imprimir (respuesta) {
    var impresora = document.getElementById("texto").innerText=respuesta;
    
    return impresora;
}

function mostrarHTML ({empresa, id, nombre, trabajo}){
    const contenido = document.querySelector('#contenido');
    contenido.innerHTML += `
        <p>id: ${id}</p>
        <p>Nombre: ${nombre}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>`;

        document.getElementById("texto").innerHTML;
}
ObtenerJSONArray();