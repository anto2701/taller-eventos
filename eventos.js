document.getElementById("miBoton").addEventListener("click", function(event) {
    alert("Hola!");
    event.stopPropagation();
});

document.getElementById("mi-div").addEventListener("click", function() {
    alert("Hola! Soy el div");
});
