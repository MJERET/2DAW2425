/*
Imagina que trabajas en una aplicación de pedidos de comida a domicilio, similar a Uber Eats. Cuando un usuario realiza un pedido, el programa debe:

Confirmar el pedido (simular un tiempo de espera). Mediante un Math.random del 80%  2 seg. Confirmando… Confirmado
Preparar la comida (esperar un poco más). 4 sg preparando … preparado
Enviar el pedido al repartidor (esperar nuevamente). 6 seg Enviando… Entregado
Cada paso tarda un tiempo diferente y debe ejecutarse en orden. Usa promesas para simular este proceso y muestra mensajes en la consola indicando el estado del pedido.

Utiliza  ✅ ❌ 🍔  🏠 🚴‍♂️

En caso de error… para el catch: 🚨 Por favor, intenta hacer el pedido nuevamente
*/
window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener('click', miPedido)
}

function miPedido() {
//Confirmar pedido
const confirmarPedido = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
            console.log('Confirmando... ✅');
            resolve('Pedido confirmado');
        } else {
            reject('No se puede confirmar el pedido ❌');
        }
    }, 2000);
});
//Preparando comida
const prepararComida = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Preparando... 🍔');
        resolve('Comida preparada');
    }, 4000);
});
// enviando comida
const enviarPedido = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Enviando... 🚴‍♂️');
        resolve('Pedido entregado 🏠');
    }, 6000);
});
}
