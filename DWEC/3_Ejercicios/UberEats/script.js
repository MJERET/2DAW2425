
window.onload=iniciar;
function iniciar() {
    document.getElementById("enviar").addEventListener('click', miPedido);
}

function miPedido() {
    //confirmar pedido
    var imprimir;
    console.log("Confirmando pedido...")
    const confirmarPedido = new Promise((resolve, reject) => {
        setTimeout(() => {
            //Hay una probabilidad del 80% de confirmar el pedido
            if(Math.random() < 0.8) {
                console.log("Pedido confirmado:✅");
                imprimir = resolve("Pedido confirmado:✅");   
            }else {
                imprimir = reject ("No se pudo confirmar:❌")
                console.log("No se pudo confirmar el pedido:❌")
            }
        }, 2000);
    })
    //Para cuando el resultado es correcto, tiene que seguir y cuando no, tiene que parar
    const prepararComida = new Promise((resolve) => {
        setTimeout(() => {
            console.log("Preparando:🍔");
            imprimir = resolve("Comida preparada:🍔");
        }, 4000);
    })
    const envio = new Promise((resolve) => {

    })

}