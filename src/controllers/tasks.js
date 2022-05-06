const {v4} = require("uuid")

const getTasks = (req,res)=>{
    res.status(200).json({
        message : 'Task fetched succesfully',
        tasks : []
    })
}

const postTasks = (req,res)=>{
    const {title,description} = req.body
    if(!title || !description) return res.sendStatus(400)
    res.status(200).json({id : v4(),title,description})
}

module.exports = {
    getTasks,
    postTasks
}