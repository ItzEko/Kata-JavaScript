
// 1. Crea una página web con un botón que, al hacer clic en él, cambie el 
//     color de fondo de la página a rojo.
// document.getElementById("cambiarColor").addEventListener("click", function() {
//     body.style.backgroundColor = "red";
// })

const body = document.getElementById("body");
const btn = document.getElementById("cambiarColor");

function cambio() {
    body.style.backgroundColor = "red";
    
}

btn.addEventListener("click", cambio());
