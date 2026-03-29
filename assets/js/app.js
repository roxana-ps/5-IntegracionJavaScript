console.log("JS cargado");

const btnTop = document.getElementById("btnTop");

console.log(btnTop);

if (btnTop) {
    btnTop.addEventListener("click", () => {
        console.log("entra?");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}