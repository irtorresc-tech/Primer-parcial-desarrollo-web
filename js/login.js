document.getElementById("loginForm").addEventListener("submit", function(e) {

    e.preventDefault(); // evita que se recargue la página

    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    if(usuario === "Lavilla" && password === "1234"){
        window.location.href = "index.html"; // redirige a otra página
    } else {
        alert("Usuario o contraseña incorrectos");
    }

});