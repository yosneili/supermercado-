
$(document).ready(function () {


    $( "#reg" ).click(
        function() {
            $("#modal").css("visibility", "visible");
        }
    );



    $( "#contactForm" ).on( "submit", function( event ) {

        event.preventDefault();
        
        

            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',
                text: '¡Gracias por preferirnos!',
                timer: 2000
              }).then(function() {
                $("#modal").css("visibility", "hidden");
            });
            
        }
    );
    

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
{name: "Utiles Escolares", title: "Cuadernos y libretas", image: "https://schoolsupplyboxes.com/cdn/shop/files/JGP_6237-Edit-Edit_1.jpg?v=1715174738&width=480", description:"De regreso a clases, acomoda tu cabro para que no le falte nada", link: ""},
{name: "linea blanca", title: "Lavadora, Secadora, Cocina y mas", image: "https://especialistaenetiquetas.com/wp-content/uploads/2022/06/linea_1.jpg", description:"Linea blanca para que amuebles tu casa", link: ""},
{name: "Shampoo", title: "Dove", image: "https://i5.walmartimages.com/seo/Dove-Nutritive-Solutions-Shampoo-and-Conditioner-Anti-Frizz-Oil-Therapy-12-oz-2-count_ce01eb5e-8e88-4a02-8e2d-15141ff36cb7_1.2da25c2de9dbf93efd88659d66e59991.jpeg", description:"producto para la higiene capilar", link: ""},
{name: "Conford", title: "Papel higienico", image: "https://images.cdn3.buscalibre.com/fit-in/360x360/e0/7b/e07b90373b769db9687acf7f4e944a0a.jpg", description:"Para limpiarse la raja", link: ""},
{name: "Porotos", title: "porotos", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcMdc2jmglC4xJkJM0heDvUi618M5oOmZSpA&s", description:"Producto Alimenticio", link: ""},
{name: "Arroz", title: "Arroz parbolizado", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm9iWepMXWTU-eitdH6uUG5aTyztfdbllklg&s", description:"Producto de clase A", link: ""},
{name: "Aceite", title: "Maizete", image: "https://familybox.store/cdn/shop/products/aceite-de-maiz-mazeite-1-lt-enviar-a-venezuela-ship-to-venezuela-supermercado-online-venezuela-online-supermarket-439089_grande.jpg?v=1697811459", description:"Producto para cocinar", link: ""},
{name: "harina de trigo", title: "RobinHood", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbK60C-EfUVm2DfeEKAqb1OR1kBb1muBF03g&s", description:"Producto para alimentar, libre de gluten", link: ""},
{name: "jabon", title: "dove", image: "https://pasteurio.vtexassets.com/arquivos/ids/187223/Cuidado-Personal-Jabones_Dove_Pasteur_092905_caja_01.jpg?v=638503196185870000", description:"producto para la higiene piel", link: ""},

]
arrayProducto.forEach(product => {
    const tarjetaHTML = crearTarjetaProducto(product);
    if (productoContainer) {
        productoContainer.innerHTML += tarjetaHTML;
    }
});

});