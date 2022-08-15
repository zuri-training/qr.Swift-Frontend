



const toggleMenu = document.querySelector(".toggle_menu");


toggleMenu.addEventListener("click", function() {
    document.querySelector(".mobile-menu").classList.toggle("active");
    toggleMenu.children.item(0).classList.toggle("show")
    toggleMenu.children.item(1).classList.toggle("show")
});

const downloadbtn = document.querySelector("#print")

let imageLink;
document.getElementById('generate').addEventListener('click', addPost);




function addPost(e){
    e.preventDefault();
    let url = document.getElementById('url').value;
 

    fetch('https://qrswiftapp.herokuapp.com/api/create-qr/', {
        method: 'POST',
        headers:{
            'Accept': 'application/json, text/Plain, */*',
            'Content-type':'application/json'
        },
        body: JSON.stringify({qr_type: "URL", url:url,userId : 12})

    })
    .then((res) => res.json())
    .then((data) => {
        document.querySelector(".code").src = "https://qrswiftapp.herokuapp.com"+ data.qr.qr_code
        imageLink = "https://qrswiftapp.herokuapp.com"+ data.qr.qr_code
        console.log(data, data.qr.qr_code)})
}

downloadbtn.addEventListener("click", ()=>{
    const element = document.createElement("a")
    element.setAttribute("href", imageLink)
    element.setAttribute("download", "image.png" )
    document.body.appendChild(element)
    element.click()
})


const shareData = {
    title: 'QR',
    text: 'My Qr Image',
    url: imageLink
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
  