const { Router } = require('express');

const router = Router();


const { storeTask, getTask } = require('../controller/taskController');


/**
 * @swagger
 * /store/task:
 *  post:
 *    summary: Cadastra uma task
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
router.post('/store/task', storeTask);

/**
 * @swagger
 * /get/Task:
 *  get:
 *    summary: Retorna a task
 *    responses:
 *      200:
 *        description: task
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */
router.get('/get/Task', getTask);

module. exports = router;