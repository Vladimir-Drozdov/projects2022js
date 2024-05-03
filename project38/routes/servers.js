const Router = require('express');
const getAll=require('../controllers/servers.js')
const router = Router();
console.log(getAll.toString());
router.get('/api/server', getAll[0]);
router.post('/api/server', getAll[1])


module.exports = router;

