const router = require('express').Router();
// const authMiddleware = require('../middlewares/auth.middleware');
const TermController = require('../controllers/term.controller');

// router.post('/create', authMiddleware ,RoomController.createRoom);
// // router.get('/', authMiddleware ,RoomController.fetchRooms);
// // router.get('/:roomId', authMiddleware ,RoomController.getRoom);

router.post('/search', TermController.createTerm);

module.exports = router;