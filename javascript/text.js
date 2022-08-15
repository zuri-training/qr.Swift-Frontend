"strict mode";

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
        console.log(userData.id)
    
    
       
                        if(data.token){
                            
                            
                            window.location.href="dashboard.html?data="+JSON.stringify(userData.id)
                            
    
                        }else{
                            alert("Login Failed")
                        }
    }
        )
    .catch(err => console.log(err))
    })
    }
    
    login()