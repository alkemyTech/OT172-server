const { Entries } = require("../models")

//This Method is used for update entries regardless of their type
const updateEntrie = async(req,res)=>{
    const reqId = req.params.id
    try{
        const entry = await Entries.update(req.body, {where: { id: reqId}})
        res.status(200).send({id: entry, message:"updated"})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

module.exports={
    updateEntrie
}