const Router = require('../framework/router');
const router = new Router();
const users = [
   {id: 1, name: 'Ulbi' },
   {id:2, name:'yacya'},
]
router.get('/users', (req, res) => {
   res.send(users);
});
router.post('/users', (req, res) => {
   const user = req.body;
   console.log(req.body);
   users.push(user);
   
   res.send(users);
});

module.exports = router