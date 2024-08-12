const router = require('express').Router();

const{salvarPost}=require("../controller/postsController")

router.post("/salvar/post",salvarPost);
router.get("/posts", );

module.exports=router;