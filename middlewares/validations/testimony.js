const Joi = require('joi')
const { findTestimony }=require('../../services/testimonyService')
const validationTestimony = Joi.object({
  name: Joi.string().required(),
  content: Joi.string().required(),
  image: Joi.optional()
})
const createError= require
const validatedTestimony = (req, res, next) => {
  const result = validationTestimony.validate(req.body)
  if (!result.error) {
    next()
  } else {
    console.log(`Creating testimony have errors: [${result.error.message}]`)
    res.status(422).json(result.error.message)
  }
}

const validateExistenceTestimony= async (req,res,next) =>{//Verifies the existence of the testimony by they id
  const {id}= req.params
  if(await findTestimony(id)!=null){
    next()
  }else{
    res.status(404).send({message:'The requested resource was not found.'})
  }
}

module.exports = { validatedTestimony, validateExistenceTestimony }
