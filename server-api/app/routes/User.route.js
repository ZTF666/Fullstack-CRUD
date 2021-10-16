const Users = require('../controllers/User.controller')
const router = require("express").Router()

router.post('/add',Users.create)
router.get('/get',Users.findAll)
router.get('/get/:id',Users.findOne)
router.put('/edit/:id',Users.update)
router.delete('/delete/:id',Users.delete)

module.exports = router