const router = require('express').Router();

const{salvarPost, listarPosts, deletarPost} = require("../controller/postsController")

/**
 * @swagger
 * /salvar/post:
 *  post:
 *    summary: Cadastra um novo post
 *    responses:
 *      200:
 *        description: Sucesso!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
router.post("/salvar/post", salvarPost);

/**
 * @swagger
 * /listar/post:
 *  get:
 *    summary: Retorna todas as postagens
 *    responses:
 *      200:
 *        description: Uma lista de postagens
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
router.get("/listar/post", listarPosts);


router.delete("/deletar/post/:postId", deletarPost);

module.exports=router;