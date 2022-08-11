"strict mode";

const toggleMenu = document.querySelector(".toggle_menu");
const img = document.createElement("img");
img.src;

toggleMenu.addEventListener("click", function () {
  document.querySelector(".mobile-menu").classList.toggle("active");
  toggleMenu.children.item(0).classList.toggle("show");
  toggleMenu.children.item(1).classList.toggle("show");
});


const registerBtn = document.querySelectorAll(".register_btn")
const loginBtn = document.querySelectorAll(".login_btn");
const demoBtn = document.querySelector(".demo_btn");
const staticBtn = document.querySelector(".static_btn")
const dynamicBtn = document.querySelector(".dynamic_btn")
const HeaderLogo = document.querySelector(".header-logo");



HeaderLogo.addEventListener("click", ()=>{
  window.location.href = "index.html"
})


registerBtn.forEach(btn => {
    btn.addEventListener("click", ()=>{
        window.location.href = "sign-up.html"
    })
})

loginBtn.forEach(btn => {
    btn.addEventListener("click", ()=>{
        window.location.href = "sign-in.html"
    })
})

demoBtn.addEventListener("click", ()=>{
    window.location.href = "demo.html"
})
staticBtn.addEventListener("click", ()=>{
    window.location.href = "staticqr.html"
})
dynamicBtn.addEventListener("click", ()=>{
    window.location.href = "dynamicqr.html"
})



