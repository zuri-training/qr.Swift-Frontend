"strict mode"

const loginForm = document.querySelector("#login_form")

let userData = {}

const api_endpoint = "http://127.0.0.1:8000/api/login/"

const loginDetails = new FormData()


const login= ()=>{

loginForm.addEventListener("submit", (e)=>{
e.preventDefault()
loginDetails.append("username", document.getElementById("login_username").value)
loginDetails.append("password", document.getElementById("login_password").value)

fetch(api_endpoint,{
    method: "POST",
    body: loginDetails,
})
.then(res => res.json())
.then(data => {

    userData = data
    console.log(userData)


   
                    if(data.token){
                        
                        
                        window.location.href="dashboard.html?data="+JSON.stringify(userData)
                        

                    }else{
                        alert("Login Failed")
                    }
}
    )
.catch(err => console.log(err))
})
}

login()
localStorage.setItem("userData", JSON.stringify(userData))

