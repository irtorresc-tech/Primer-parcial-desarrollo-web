fetch("components/header/header.html")
.then(res => res.text())
.then(data => document.getElementById("header").innerHTML = data);

fetch("components/sidebar/sidebar.html")
.then(res => res.text())
.then(data => document.getElementById("sidebar").innerHTML = data);

fetch("components/footer/footer.html")
.then(res => res.text())
.then(data => document.getElementById("footer").innerHTML = data);

document.addEventListener("DOMContentLoaded", () => {

const productos = [
{
nombre: "Picada las Marias",
descripcion: "Tiene Carnes, mazorca, papas",
precio: "$80000",
imagen: "images/picada.jpeg"
},
{
nombre: "Chuleta Ahumada",
descripcion: "Acompañada de arroz, ensalada y papas",
precio: "$23000",
imagen: "images/chuleta.jpeg"
},
{
nombre: "Pechuga Ranchera",
descripcion: "Pechuga bañada en queso, jamón y maiz, acompañada de arroz y papas",
precio: "$30000",
imagen: "images/pechuga.jpeg"
}
];

const container = document.getElementById("productos-container");
const template = document.getElementById("producto-template");

productos.forEach(producto => {

const clon = template.content.cloneNode(true);

clon.querySelector(".nombre").textContent = producto.nombre;
clon.querySelector(".descripcion").textContent = producto.descripcion;
clon.querySelector(".precio").textContent = producto.precio;
clon.querySelector(".producto-img").src = producto.imagen;

container.appendChild(clon);

});

});