const router = require('express').Router();

const { cadastro, login } = require('../controller/usersController')

/**
 * @swagger
 * /cadastrar:
 *  post:
 *    summary: Cadastra um novo usuário
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
router.post('/cadastrar', cadastro);

/**
 * @swagger
 * /login:
 *  post:
 *    summary: Login do usuário
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
router.post("/login", login);

module.exports = router;