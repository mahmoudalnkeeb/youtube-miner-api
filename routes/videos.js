const { info, download } = require('../controllers/videosController');

const router = require('express').Router();

router.get('/', info);
router.post('/download' , download);

module.exports = router;
