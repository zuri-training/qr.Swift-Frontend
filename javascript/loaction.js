"strict mode";


const toggleMenu = document.querySelector(".toggle_menu");
const img = document.createElement("img");
img.src

toggleMenu.addEventListener("click", function() {
    document.querySelector(".mobile-menu").classList.toggle("active");
    toggleMenu.children.item(0).classList.toggle("show")
    toggleMenu.children.item(1).classList.toggle("show")
});

document.getElementById("generate").addEventListener("click", generate);
document.getElementById("addPost").addEventListener("submit", addPost);

function generate() {
  fetch("http://127.0.0.1:8080")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2>Posts</h2>";
      data.forEach(function (post) {
        output += (
          <div>
            <p>${post.location}</p>
            <p>${post.code}</p>
          </div>
        );
      });
      document.getElementById("output").innerHTML = output;
    });
}
function addPost(e) {
  e.preventDefault();
  let url = document.getElementById("location").Value;
  let code = code.getElementById("code").value;

  fetch("http://127.0.0.1:8080", {
    method: "POST",
    headers: {
      Accept: "application/json, text/Plain, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ location: location, code: code }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
