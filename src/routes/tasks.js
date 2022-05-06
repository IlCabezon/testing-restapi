const {Router} = require('express')

const {getTasks,postTasks} = require("../controllers/tasks")

const router = Router()

router.get("/",getTasks)
router.post("/",postTasks)

module.exports = router