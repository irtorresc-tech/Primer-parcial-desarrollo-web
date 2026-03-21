document.addEventListener("DOMContentLoaded", () => {

    fetch("components/header/header.html")
    .then(res => res.text())
    .then(data => document.getElementById("header").innerHTML = data);

    fetch("components/sidebar/sidebar.html")
    .then(res => res.text())
    .then(data => document.getElementById("sidebar").innerHTML = data);

    fetch("components/footer/footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer").innerHTML = data);


    // template y json
    const template = document.getElementById("producto-template");
    const container = document.getElementById("productos-container");

    fetch("data/productos.json")
    .then(res => res.json())
    .then(productos => {

        productos.forEach(producto => {

            const clon = template.content.cloneNode(true);

            clon.querySelector(".nombre").textContent = producto.nombre;
            clon.querySelector(".descripcion").textContent = producto.descripcion;
            clon.querySelector(".precio").textContent = producto.precio;
            clon.querySelector(".producto-img").src = producto.imagen;

            container.appendChild(clon);
        });

    })
    .catch(error => console.error("Error:", error));


    // menu
    document.addEventListener("click", (e) => {

        if(e.target.id === "menu-toggle-header"){
            document.getElementById("menu-header").classList.toggle("active");
        }

        if(e.target.id === "menu-toggle-sidebar"){
            document.getElementById("menu-sidebar").classList.toggle("active");
        }

    });

});