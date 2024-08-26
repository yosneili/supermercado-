let contadorCarrito = 0;
document.addEventListener('DOMContentLoaded', function() {
    actualizarContadorVisual(console.log);
});

function añadirAlCarrito(productName) {
    contadorCarrito++;
    console.log(`Producto añadido al carrito: ${productName}`);
    console.log(`Total de productos en el carrito: ${contadorCarrito}`);
    actualizarContadorVisual(); 
}

function actualizarContadorVisual() {
    const contadorElemento = document.getElementById('contador-carrito');
    if (contadorElemento) {
        contadorElemento.textContent = contadorCarrito;
        console.log('Contador actualizado a:', contadorCarrito);
    } else {
        console.error('Elemento contador-carrito no encontrado');
    }
}