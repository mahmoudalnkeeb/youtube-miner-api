const router = require('express').Router();
const videosRouter = require('./videos');
const statsRouter = require('./stats');
router.get('/', (req, res) => res.send('Hello, World!'));
// -- api routes

router.use('/videos', videosRouter);
// router.use('/stats', statsRouter);

module.exports = router;
