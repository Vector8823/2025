document.addEventListener("DOMContentLoaded", () => {
    const productos = {
        herramientas: [
            { 
                nombre: "Martillo", 
                descripcion: ["Cabeza de acero resistente", "Mango ergonómico", "Ideal para carpintería"],
                imagen: "marttillos.jpeg"
            },
            { 
                nombre: "Destornillador", 
                descripcion: ["Punta magnética", "Mango antideslizante", "Tamaño estándar"],
                imagen: "tornillos.jpeg"
            },
            { 
                nombre: "Llave inglesa", 
                descripcion: ["Ajustable para diferentes tamaños", "Material de acero inoxidable", "Durabilidad garantizada"],
                 imagen: "llave inglesa.jpg"
            }
        ],
        materiales: [
            { 
                nombre: "Cemento", 
                descripcion: ["Bolsa de 50kg", "Alta resistencia", "Fácil aplicación"],
                imagen: "cemento.jpeg"
            },
            { 
                nombre: "Madera", 
                descripcion: ["Madera tratada", "Alta calidad", "Ideal para interiores"],
                 imagen: "madera.jpeg"
            },
            { 
                nombre: "Acero", 
                descripcion: ["Barras de refuerzo", "Resistencia a la corrosión", "Usos estructurales"],
                imagen: "acero.jpeg"
            }
        ],
        accesorios: [
            { 
                nombre: "Clavos", 
                descripcion: ["Paquete de 500 unidades", "Material galvanizado", "Resistente a la oxidación"],
                 imagen: "clavos.jpeg"
            },
            { 
                nombre: "Tornillos", 
                descripcion: ["Set de 200 piezas", "Diferentes tamaños", "Ideal para madera y metal"],
                 imagen: "tornillos.jpeg"
            },
            { 
                nombre: "Abrazaderas", 
                descripcion: ["Fabricadas en acero inoxidable", "Fáciles de instalar", "Alta durabilidad"],
                 imagen: "abrazadera.jpeg"
            }
        ]
    };

    const featureElements = document.querySelectorAll(".feature");
    const productosLista = document.getElementById("productos-lista");
    const productoDetalle = document.getElementById("producto-detalle");

    featureElements.forEach(feature => {
        feature.addEventListener("click", () => {
            const category = feature.getAttribute("data-category");
            mostrarProductos(productos[category]);
        });
    });

    function mostrarProductos(listaProductos) {
        productosLista.innerHTML = "<ul>" + listaProductos.map(producto => `
            <li data-nombre="${producto.nombre}">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                ${producto.nombre}
            </li>`).join("") + "</ul>";
        productosLista.classList.remove("hidden");
        productoDetalle.classList.add("hidden");

        const productItems = productosLista.querySelectorAll("li");
        productItems.forEach(item => {
            item.addEventListener("click", () => {
                const nombreProducto = item.getAttribute("data-nombre");
                const producto = listaProductos.find(p => p.nombre === nombreProducto);
                mostrarDetalleProducto(producto);
            });
        });
    }

    function mostrarDetalleProducto(producto) {
        productoDetalle.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <ul>${producto.descripcion.map(detalle => `<li>${detalle}</li>`).join("")}</ul>`;
        productoDetalle.classList.remove("hidden");
    }
});
