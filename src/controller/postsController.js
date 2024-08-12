const connection = require('../config/db');

async function salvarPost(request,response){
    let parans=Array(
        request.body.description,
        request.body.id
    )

    let query ="insert into tasks(description, idUsuario) values(?, ?)"

    connection.query(query,parans,(err, results)=>{
        console.log(err, results)
        if (results){
            response
                .status(200)
                .json({
                    success:true,
                    massage:"sucesso",
                    data:results
                })
        } else{
            response
                .status(400)
                .json({
                    success:false,
                    massage:"sem sucesso",
                    data:results
                })
        }
    })
}

module.exports={
    salvarPost
}