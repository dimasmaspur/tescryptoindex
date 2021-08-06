const express = require('express');
const router = express.Router();
const userHandler = require('./handler/users')
const verifyToken =  require('../middlewares/verifyToken')

router.post('/register', userHandler.register)
router.post('/login', userHandler.login)
router.get('/', verifyToken, userHandler.getAll)
router.put('/:id', verifyToken, userHandler.edit)
router.delete('/:id', verifyToken, userHandler.destroy)

module.exports = router;