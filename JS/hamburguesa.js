//---------MENU HAMBURGUESA-------//

const nav = document.querySelector("#nav")
const abrir = document.querySelector("#nav-bar, #abrir")
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", function() {
    console.log("Open button clicked!");
    nav.classList.add("visible");
});

cerrar.addEventListener("click", function() {
    console.log("Close button clicked!");
    nav.classList.remove("visible");
});

/*abrir.addEventListener("click", () => {
    console.log("Open button clicked!")
    nav.classList.add("visible")
})

cerrar.addEventListener("click", () => {
    console.log("Close button clicked!")
    nav.classList.remove("visible")
})*/
