"use strict"

const registerForm = document.querySelector("#register_form")

const api_endpoint = ""

const registerDetails = new FormData()



const register= ()=>{
    registerForm.addEventListener("submit", (e)=>{
        e.preventDefault()
      
        registerDetails.append("first_name", document.getElementById("reg_first_name").value)
        registerDetails.append("last_name", document.getElementById("reg_last_name").value)
        registerDetails.append("username", document.getElementById("reg_username").value)
        registerDetails.append("email", document.getElementById("reg_email").value)
        registerDetails.append("password", document.getElementById("reg_password").value)
            
   
            fetch(api_endpoint,{
                method: "POST",
                body: registerDetails,
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
            })
    }
  
    
    register()
    


    function validation(){
        var firstName=document.registration.first_name.value
        var lastName=document.registration.last_name.value
        var username=document.registration.username.value
        var email=document.registration.email.value
        var password=document.registration.password.value
        var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.
        var regName = /\d+$/g;
        if (firstName == "" || regName.test(name)) {
          window.alert("Please enter your first name properly- First name cannot be empty");
          firstName.focus();
          return false;
        }
        if (lastName == "" || regName.test(name)) {
          window.alert("Please enter your last name properly - Last name cannot be empty");
          lastName.focus();
          return false;
        }
        if(username== ""|| username.length<5){
            window.alert("Please select a valid username higer longer than 5 letters/word")
            username.focus()
            return false
        }
        if (email == "" || !regEmail.test(email)) {
          window.alert("Please enter a valid e-mail address.");
          email.focus();
          return false;
        }
        if (password == "") {
          alert("Please enter your password");
          password.focus();
          return false;
        }
        if (password.length < 6) {
          alert("Password should be atleast 6 character long");
          password.focus();
          return false;
        }
        return true
    }
    