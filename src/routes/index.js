const {Router} = require("express")
//controllers
const {ping} = require('../controllers/index')
//routes
const TasksRoutes = require("./tasks")
//initialization of router
const router = Router()

//server response OK
router.get("/",ping)
//middleware routes
router.use("/tasks",TasksRoutes)

module.exports = router