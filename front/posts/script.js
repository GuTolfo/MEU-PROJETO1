let button = document.getElementById("handleSubmit");
 
button.onclick = async function() {
    let title = document.getElementById("title").value;
    //let description = document.getElementById("description").value;
    let data = {title}
 
    const response = await fetch('http://localhost:3000/api/store/task', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });
 
    let content = await response.json();
 
    if(content.success) {
        alert("Sucesso")
    } else{
        alert('Não');
    }
}

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  
//lidar com o envio de formulario