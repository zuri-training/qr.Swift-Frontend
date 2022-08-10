"strict mode";

const toggleMenu = document.querySelector(".toggle_menu");
const img = document.createElement("img");
img.src;

toggleMenu.addEventListener("click", function () {
  document.querySelector(".mobile-menu").classList.toggle("active");
  toggleMenu.children.item(0).classList.toggle("show");
  toggleMenu.children.item(1).classList.toggle("show");
});


const HeaderLogo = document.querySelector(".header-logo");

HeaderLogo.addEventListener("click", ()=>{
  window.location.href = "index.html"
})



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