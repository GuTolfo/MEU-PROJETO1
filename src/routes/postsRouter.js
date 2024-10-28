const router = require('express').Router();

const{salvarPost, listarPosts} = require("../controller/postsController")

router.post("/salvar/post",salvarPost);
router.get("/listar/post", listarPosts);


module.exports=router;