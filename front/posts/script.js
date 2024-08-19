async function enviar(e){
    console.log("entrou no botão")
    e.preventDefault();

    let description=document.getElementById("description").value;
    let id=83

    let data ={description, id}

    const response= await fetch("http://localhost:3000/api/salvar/post",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })

    
    const results = await response.json();
    console.log(results)
    if (results.success){
        alert("success")
    } else{
        alert("err")
    }

}

async function getPosts() {
    console.log("Entrou no getpost")
    //criar rota para pegar posts no banco
    const response = await fetch("http://localhost:3000/api/listar/post",{
        method: "GET",
        headers:{
            "Content-Type":"application/json"
        },    
    })

    const results = await response.json();
    if (results.success){
        let divPost = document.getElementById("posts");
        console.log(results)

        for (const post of results.data) {
            divPost.innerHTML += post.description+"</br>";
        }
        
            
        
        
    } else{
        alert("err")
    }
}

getPosts()