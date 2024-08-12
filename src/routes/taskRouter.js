const { Router } = require('express');

const router = Router();


const { storeTask, getTask } = require('../controller/taskController');


router.post('/store/task', storeTask);
router.get('/get/Task', getTask);

module. exports = router;