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

    // Clonar template 
    const clon = template.content.cloneNode(true);

    clon.querySelector(".nombre").textContent = producto.nombre;
    clon.querySelector(".descripcion").textContent = producto.descripcion;
    clon.querySelector(".precio").textContent = producto.precio;
    clon.querySelector(".producto-img").src = producto.imagen;

    //  Crear el componente web
    const card = document.createElement("producto-card");

    // Pasar los datos como atributos
    card.setAttribute("nombre", producto.nombre);
    card.setAttribute("descripcion", producto.descripcion);
    card.setAttribute("precio", producto.precio);
    card.setAttribute("imagen", producto.imagen);

    // Insertar el componente 
    container.appendChild(card);

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

    class ProductoCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ["nombre", "descripcion", "precio", "imagen"];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const template = document.getElementById("producto-template");

        
        const clon = template.content.cloneNode(true);

        
        clon.querySelector(".nombre").textContent = this.getAttribute("nombre");
        clon.querySelector(".descripcion").textContent = this.getAttribute("descripcion");
        clon.querySelector(".precio").textContent = this.getAttribute("precio");
        clon.querySelector(".producto-img").src = this.getAttribute("imagen");

     
        this.shadowRoot.innerHTML = "";

       
        const style = document.createElement("style");
        style.textContent = `
            .producto {
                border: 1px solid #ddd;
                border-radius: 10px;
                padding: 15px;
                text-align: center;
                background: white;
                box-shadow: 0 2px 6px rgba(0,0,0,0.1);
                transition: transform 0.2s;
            }

            .producto:hover {
                transform: scale(1.03);
            }

            .producto-img {
                width:100%;
    height:200px;
    object-fit:cover;
    border-radius:10px;
    margin-bottom:10px;
            }

            .nombre {
                margin: 10px 0;
            }

            .descripcion {
                font-size: 14px;
                color: #555;
            }

            .precio {
                display: block;
                margin-top: 10px;
                font-weight: bold;
                color: green;
            }
        `;

        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(clon);
    }
}

customElements.define("producto-card", ProductoCard);
});