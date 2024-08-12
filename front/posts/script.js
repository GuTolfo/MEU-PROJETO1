async function enviar(e){
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
    if (results.success){
        alert("success")
    } else{
        alert("err")
    }


}

async function getPosts() {
    //criar rota para pegar posts no banco
    const response= await fetch("http://localhost:3000/api/posts",{
        method: "GET",
        headers:{
            "Content-Type":"application/json"
        },    
    })

    const results = await response.json();
    if (results.success){
        alert("success")
        console.log(results.data);

        div.append.innerHTML = results.data.decription;
    } else{
        alert("err")
    }
}