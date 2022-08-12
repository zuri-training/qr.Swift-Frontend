"strict mode";


const wifi = document.querySelector(".wifi");
const url = document.querySelector(".url");
const text = document.querySelector(".text");
const locations = document.querySelector(".location")

wifi.addEventListener("click", ()=>{
 window.location.href = "wifi.html"
})

url.addEventListener("click", ()=>{
 window.location.href = "url.html"   
})

locations.addEventListener("click", ()=>{
    window.location.href = "location.html"
})



text.addEventListener("click", ()=>{
    window.location.href = "text.html"
})
