const router = require('express').Router();

const { cadastro, login } = require('../controller/usersController')

router.post('/cadastrar', cadastro);
router.post("/login", login)

module.exports = router;