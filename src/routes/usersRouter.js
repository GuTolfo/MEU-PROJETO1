const router = require('express').Router();

const { cadastro } = require('../controller/usersController')

router.post('/cadastrar', cadastro);

module.exports = router;