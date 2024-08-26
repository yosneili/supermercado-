
$(document).ready(function () {
    document.getElementById("lacteosCateg").addEventListener("click", function() {
        mostrarCategoria("1");
    });

    document.getElementById("frutasCateg").addEventListener("click", function() {
        mostrarCategoria("2");
    });

    document.getElementById("botilleriaCateg").addEventListener("click", function() {
        mostrarCategoria("3");
    });

    document.getElementById("btnBuscar").addEventListener("click", function() {
    var inputElement = document.getElementById('inputBuscar');
    var inputValue = inputElement.value;
        buscar(inputValue);
    });
    

    function buscar (texto){
        if (productoContainer) {
            productoContainer.innerHTML = "";
        }

        productos.forEach(product => {
            if (product.name.toLowerCase() == texto.toLowerCase()){
                const tarjetaHTML = crearTarjetaProducto(product);
                if (productoContainer) {
                    productoContainer.innerHTML += tarjetaHTML;
                }  
            }
        });

    }



    function mostrarCategoria(id) {

        carruselSeccion.innerHTML="";
        
        if (productoContainer) {
            productoContainer.innerHTML = "";
        }

        var titulo = document.getElementById('tituloCategoria');

        if(id == "1"){
            titulo.innerText = "Lacteos"
        }else if (id == "2"){
            titulo.innerText = "Frutas y Verduras"
        }else if (id == "3"){
            titulo.innerText = "Botilleria"
        }else {
            titulo.innerText = "Productos"
        }
    
        // Agregar las nuevas tarjetas de productos
        productos.forEach(product => {
            console.log(product)
            if (id == product.categoryId) {
                const tarjetaHTML = crearTarjetaProducto(product);
                if (productoContainer) {
                    productoContainer.innerHTML += tarjetaHTML;
                }
            }            
        });
    }
    
    function crearTarjetaProducto(product) {
        return `
        <div class="col">
            <div class="card h-100">
                <img src="${product.image || 'placeholder.jpg'}" class="card-img-top" alt="${product.title || product.name}" style="object-fit: contain; width: 100%; height: auto; max-height: 200px;">
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

    const productoContainer = document.querySelector('#producto-container');
    const carruselSeccion = document.querySelector("#carruselSeccion");


    const productos = [
        { id: "1", name: "Leche", title: "Leche Entera", image: "https://jumbo.vtexassets.com/arquivos/ids/687146/Leche-entera-1-L.jpg?v=638240207835200000", description: "Leche entera rica en nutrientes, ideal para cualquier ocasión.", link: "www.google.com", categoryId: "1" },
        { id: "2", name: "Yogur", title: "Yogur Natural", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTdzCe1xjU7BbFRpk62896lWysoF-zS44w8up0Xe0i5EIpHkLqTzRUdPTbv0qvI6g5U3R952xMsYSOllCatyfBD3bvgxDxNvCUqnJwzOfU8r0XGaZDzQFP8Tg&usqp=CAE", description: "Yogur natural cremoso, perfecto para el desayuno o un snack saludable.", link: "", categoryId: "1" },
        { id: "3", name: "Queso", title: "Queso Manchego", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTLgUuTLjtYUKYlHGJWkAR8Ot4Ag-jKiPQpEIi7LRVmGcIvm0vbaUXO4iP1xz-w1vjs4xZA0ZoySKhO49CYjWNraAoVj1AexuLJTzP8UDJ6DVU_dZQOhyKX&usqp=CAE", description: "Queso Manchego curado con un sabor intenso y delicioso.", link: "", categoryId: "1" },
        { id: "4", name: "Mantequilla", title: "Mantequilla Sin Sal", image: "https://jumbo.vtexassets.com/arquivos/ids/792867/Mantequilla-Sin-Sal-250-g.jpg?v=638421312890630000", description: "Mantequilla sin sal, ideal para cocinar y hornear.", link: "", categoryId: "1" },
        { id: "5", name: "Crema", title: "Crema Ácida", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqBeSb-fypCETtAN1i9WzmVYVJpyw2JtxDew&s", description: "Crema ácida, perfecta para darle un toque especial a tus platillos.", link: "", categoryId: "1" },
        { id: "6", name: "Leche", title: "Leche Sin Lactosa", image: "https://www.quillayes.cl/wp-content/uploads/2020/07/leche-descremada-sl-1.png", description: "Leche deslactosada para personas con intolerancia a la lactosa.", link: "", categoryId: "1" },
        { id: "7", name: "Yogur", title: "Yogur Griego", image: "https://jumbo.vtexassets.com/arquivos/ids/346649/Yoghurt-griego-natural-pote-Quillayes-800-g-1-73116031.jpg?v=637299526396870000", description: "Yogur griego con alto contenido de proteínas y un sabor delicioso.", link: "", categoryId: "1" },
        { id: "8", name: "Queso", title: "Queso Cheddar", image: "https://santaisabel.vtexassets.com/arquivos/ids/159732/Queso-cheddar-160-g.jpg?v=637469368796030000", description: "Queso Cheddar madurado, ideal para sandwiches y botanas.", link: "", categoryId: "1" },
        { id: "9", name: "Mantequilla", title: "Mantequilla con Sal", image: "https://jumbo.vtexassets.com/arquivos/ids/396797/Mantequilla-con-sal-250-g.jpg?v=637469298713900000", description: "Mantequilla con sal para darle un sabor extra a tus comidas.", link: "", categoryId: "1" },
    
        { id: "10", name: "Manzana", title: "Manzana Roja", image: "https://5aldia.cl/wp-content/uploads/2018/03/manzana.jpg", description: "Manzanas frescas y crujientes, perfectas para un snack saludable.", link: "", categoryId: "2" },
        { id: "11", name: "Plátano", title: "Plátano", image: "https://jumbo.vtexassets.com/arquivos/ids/424556/Platano-granel.jpg?v=637521224867200000", description: "Plátanos maduros y dulces, ideales para postres y desayunos.", link: "", categoryId: "2" },
        { id: "12", name: "Zanahoria", title: "Zanahoria", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSLrK-xQ2koh6JHyPUTUBblSbH1YiDrb2m5A&s", description: "Zanahorias frescas y crujientes, perfectas para ensaladas.", link: "", categoryId: "2" },
        { id: "13", name: "Brócoli", title: "Brócoli", image: "https://cdnx.jumpseller.com/biofresco-empresas/image/21237573/Brocoli-unid.jpg?1645448273", description: "Brócoli fresco y nutritivo, ideal para acompañamientos.", link: "", categoryId: "2" },
        { id: "14", name: "Lechuga", title: "Lechuga", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjXoBuEF8OUHpRTor89ltF5_XBr4lLkH2bMg&s", description: "Lechuga fresca, ideal para ensaladas y sandwiches.", link: "", categoryId: "2" },
        { id: "15", name: "Cebolla", title: "Cebolla", image: "https://www.clarin.com/img/2016/12/27/Bym_3FWrg_1200x0.jpg", description: "Deliciosa cebolla. Perfecta para una rica y saludable ensalada en base a productos vegetales súper frescos.", link: "", categoryId: "2" },
    
        { id: "16", name: "Vino Tinto", title: "Vino Cabernet Sauvignon", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Wl3o3IcqsuCYYEJprGMjH1PyEoLxuN_cAw&s", description: "Vino tinto de calidad, ideal para acompañar carnes rojas.", link: "", categoryId: "3" },
        { id: "17", name: "Cerveza", title: "Cerveza Lager", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLqFFSo0Uz0gWVkIzzZdVisBGl_8rXBHXAEg&s, description:",description: "Cerveza rubia refrescante, perfecta para compartir con amigos.", link: "", categoryId: "3" },
        { id: "18", name: "Whisky", title: "Whisky Escocés", image: "https://desaonline.vtexassets.com/arquivos/ids/157202-800-auto?v=637437364118770000&width=800&height=auto&aspect=true", description: "Whisky escocés de alta calidad, ideal para celebraciones.", link: "", categoryId: "3" },
        { id: "19", name: "Ron", title: "Ron Blanco", image: "https://cdnx.jumpseller.com/dc-central-distribuidora-de-licores/image/23190928/8d6460cec99ee2cf99246f516568704e.jpg?1649190005", description: "Ron blanco suave, perfecto para cócteles tropicales.", link: "", categoryId: "3" },
        { id: "20", name: "Tequila", title: "Tequila Reposado", image: "https://santaisabel.vtexassets.com/arquivos/ids/399284/Tequila-Sombrero-Negro-40%C2%B0-750-cc.jpg?v=638556549678500000", description: "Tequila reposado, ideal para disfrutar solo o en margaritas.", link: "", categoryId: "3" },
        { id: "20", name: "Aperol", title: "Aperol spritz", image: "https://desaonline.vtexassets.com/arquivos/ids/156110-2000-2000?v=637306150605170000&width=2000&height=2000&aspect=true", description: "Aperol representa el estilo de vida Italiano: • Es un aperitvo de con 11°, que tiene un sabor agridulcce único proveniente de su receta secreta.", link: "", categoryId: "3" }
    ];

});