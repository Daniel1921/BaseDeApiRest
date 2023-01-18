const {Router} = require('express');
const { userGet, userPut, userPost, userDelete } = require('../controllers/userExample');

const router = Router();

router.get('/', userGet)

router.put('/:userId', userPut)

router.post('/', userPost)

router.delete('/', userDelete)


module.exports = router;