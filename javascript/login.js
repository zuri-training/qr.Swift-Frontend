"strict mode"

const loginForm = document.querySelector("#login_form")


const api_endpoint = ""

const loginDetails = new FormData()


const login= ()=>{

loginForm.addEventListener("submit", (e)=>{
e.preventDefault()
loginDetails.append("email", document.getElementById("login_email").value)
loginDetails.append("password", document.getElementById("login_password").value)

fetch(api_endpoint,{
    method: "POST",
    body: loginDetails,
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))
})
}

login()




const Logout= ()=>{

}

const GetUser = ()=>{

}