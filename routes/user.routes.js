const router = require('express').Router();
const AuthController = require('../controllers/auth.controller');
const authMiddleware = require("../middlewares/auth.middleware")

router.post('/login', AuthController.login);
router.post('/get-user', authMiddleware,AuthController.getUser)


module.exports = router;