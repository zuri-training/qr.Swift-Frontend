"strict mode";


const toggleMenu = document.querySelector(".toggle_menu");
const img = document.createElement("img");
img.src

toggleMenu.addEventListener("click", function () {
    document.querySelector(".mobile-menu").classList.toggle("active");
    toggleMenu.children.item(0).classList.toggle("show")
    toggleMenu.children.item(1).classList.toggle("show")
});