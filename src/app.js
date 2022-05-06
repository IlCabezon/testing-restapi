//modules
const express = require("express")
const morgan = require("morgan")
//router
const router = require("./routes/index")

//initialization of express
const app = express()

//app configs
app.use(morgan("dev"))
app.use(express.json())
app.use("/api",router)

module.exports = app
