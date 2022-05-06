const ping = (req,res)=>{

    const status = 200
 
    res.status(status).json({message:"Pong",status})
}

module.exports = {
    ping
}