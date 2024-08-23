function crearTarjetaProducto(product) {
    return `
      <div class="col">
        <div class="card h-100">
          <img src="${product.image || 'placeholder.jpg'}" class="card-img-top" alt="${product.title || product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <a href="${product.link || '#'}" class="btn btn-primary">Ver producto</a>
            <button class="btn btn-success" onclick="añadirAlCarrito('${product.name}')">Añadir al carrito</button>
          </div>
        </div>
      </div>
    `;
}

function añadirAlCarrito(productName) {
    console.log(`Producto añadido al carrito: ${productName}`);
}

const productoContainer = document.querySelector('#producto-container');

const arrayProducto = [
{name: "Utiles Escolares", title: "Cuadernos y libretas", image: "", description:"De regreso a clases, acomoda tu cabro para que no le falte nada", link: ""},
{name: "linea blanca", title: "Lavadora, Secadora, Cocina y mas", image: "", description:"Linea blanca para que amuebles tu casa", link: ""},
{name: "Shampoo", title: "Dove", image: "", description:"producto para la higiene capilar", link: ""},
{name: "Shampoo", title: "Dove", image: "", description:"producto para la higiene capilar", link: ""},
{name: "Shampoo", title: "Dove", image: "", description:"producto para la higiene capilar", link: ""},
{name: "Shampoo", title: "Dove", image: "", description:"producto para la higiene capilar", link: ""},
{name: "Shampoo", title: "Dove", image: "", description:"producto para la higiene capilar", link: ""},
{name: "Shampoo", title: "Dove", image: "", description:"producto para la higiene capilar", link: ""},
{name: "Shampoo", title: "Dove", image: "", description:"producto para la higiene capilar", link: ""},

]
arrayProducto.forEach(product => {
    const tarjetaHTML = crearTarjetaProducto(product);
    if (productoContainer) {
        productoContainer.innerHTML += tarjetaHTML;
    }
});