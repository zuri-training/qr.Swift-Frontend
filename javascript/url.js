document.getElementById('generate').addEventListener('click', generate);
document.getElementById('addPost').addEventListener('submit', addPost);

function generate(){
     fetch('http://127.0.0.1:8080')
     .then((res) => res.json())
     .then((data) => {
        let output = '<h2>Posts</h2>';
        data.forEach(function(post){
            output +=
            <div> 
                <p>${post.url}</p>
                <p>${post.code}</p>
            </div>;
     });
     document.getElementById('output').innerHTML = output;
    })

}
function addPost(e){
    e.preventDefault();
    let url = document.getElementById('url').Value;
    let code = code.getElementById('code').value

    fetch('http://127.0.0.1:8080', {
        method: 'POST',
        headers:{
            'Accept': 'application/json, text/Plain, */*',
            'Content-type':'application/json'
        },
        body: JSON.stringify({url:url,code:code})

    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}