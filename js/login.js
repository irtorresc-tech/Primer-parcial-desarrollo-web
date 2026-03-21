document.getElementById("loginForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let usuario = document.getElementById("usuario").value.trim();
    let password = document.getElementById("password").value.trim();

    if(usuario === "Lavilla" && password === "1234"){

        localStorage.setItem("auth", "true"); 
        window.location.href = "index.html";

    } else {
        alert("Usuario o contraseña incorrectos");
    }

});