document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("miBoton").addEventListener("click", (event) {
        alert("Hola!");
        event.stopPropagation();
    });

    document.getElementById("mi-div").addEventListener("click", () {
        alert("Hola! Soy el div");
    });
});
