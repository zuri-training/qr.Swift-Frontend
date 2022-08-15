"strict mode";


const toggleMenu = document.querySelector(".toggle_menu");



let imageLink;
toggleMenu.addEventListener("click", function() {
    document.querySelector(".mobile-menu").classList.toggle("active");
    toggleMenu.children.item(0).classList.toggle("show")
    toggleMenu.children.item(1).classList.toggle("show")
});


document.getElementById('addPost').addEventListener('submit', addPost);

const downloadbtn = document.querySelector("#print")



function addPost(e){
    e.preventDefault();
    let ssid = document.getElementById('ssid').value;
    let authentication = document.getElementById('authentication').value;
    let password = document.getElementById('password').value; 
    let hidden = document.getElementById('hidden').value;


    fetch('https://qrswiftapp.herokuapp.com/api/create-qr/', {
        method: 'POST',
        headers:{
            'Accept': 'application/json, text/Plain, */*',
            'Content-type':'application/json'
        },
        body: JSON.stringify({ssid:ssid, authentication:authentication, password:password, hidden:false  ,userId : 12, qr_type: "WIFI"})

    })
    .then((res) => res.json())
    .then((data) => {
        document.querySelector(".code").src = "https://qrswiftapp.herokuapp.com"+ data.qr.qr_code
        imageLink = "https://qrswiftapp.herokuapp.com"+ data.qr.qr_code
        console.log(data, data.qr.qr_code)
    })
}







downloadbtn.addEventListener("click", ()=>{
    const element = document.createElement("a")
    element.setAttribute("href", imageLink)
    element.setAttribute("download", "image.png" )
    document.body.appendChild(element)
    element.click()
})


const shareData = {
    imageLink,
    title: "Images",
    text: "My Qr Image"
    
  }
  
  const btn = document.querySelector('.sharebtn');
 // const resultPara = document.querySelector('.result');
  
  // Share must be triggered by "user activation"
  btn.addEventListener('click', async () => {
    try {
      await navigator.share(shareData);
     // resultPara.textContent = 'MDN shared successfully';

    } catch (err) {
      //resultPara.textContent = `Error: ${err}`;
      console.log(err)
    }
  });
  