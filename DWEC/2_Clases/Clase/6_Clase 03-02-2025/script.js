/*
    script.js
*/

const paises = ['Francia', 'España', "Australia", 'Italia'];

function mostrarPaises() {
    setTimeout(()=> {
        paises.forEach(pais => {
            console.log(pais);
        },2000);
    })
}

function nuevoPais(pais, callback) {
    setTimeout (()=>{
        paises.push(pais);
        callback()
    }, 2000)
}
mostrarPaises();
nuevoPais('Alemania', mostrarPaises);

function iniciarCallbackHell() {
    setTimeout(() => {
        //Agregar un nuevo paies
        nuevoPais('Alemania', mostrarPaises);
        setTimeout(()=>{
            nuevoPais('Francia', mostrarPaises);
            setTimeout(()=>{
                nuevoPais('Inglaterra', mostrarPaises);
            })
        }, 3000) 
    }, 3000);
}
//iniciarCallbackHell();
//Promesa
const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true;
    //const descuento = false; 
    // Si no escribimos ninguna condición en consola saldra pending
    if (descuento) {
        resolve('descuento Aplicado');
    } else {
        reject('No se puede aplicar descuento');
    }
})
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));
console.log(aplicarDescuento);


function descuento() {
    console.log("Descuento aplicado... ")
}