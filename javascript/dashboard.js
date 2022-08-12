"strict mode"
const genqr = document.querySelector(".genqr-btn")

genqr.addEventListener("click", ()=>{
    window.location.href = "create-qr1.html"
})


const userInfo = JSON.parse(localStorage.getItem("userData"))
console.log("userInfo", userInfo)

