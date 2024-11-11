document.getElementById("btn").addEventListener("click", async function(event){
    

    event.preventDefault();


    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let data = {username, password};
    
    console.log(data)
    const response = await fetch('http://localhost:3003/api/login', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })

    const results = await response.json();
    console.log(results)

    
    sessionStorage.setItem("userId", results.data[0].id);
    sessionStorage.setItem("nome", results.data[0].name);
    sessionStorage.setItem("cidade", results.data[0].cidade);
    
   
    if(results.success) {
        window.location.href = "./posts/index.html"
    }

});


