//modules
const app = require('./app')
const config = require("../config")

//mongo database connect
const dbConnect = require("./utils/dbConnect")



app.listen(config.PORT || 3000,()=>{
    dbConnect()
    console.log(`Server on port ${config.PORT}`)
})

