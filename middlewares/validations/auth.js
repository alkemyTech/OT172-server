const Joi = require('joi');

const authValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

const validateLogin = (req,res,next) => {
    const result = authValidation.validate(req.body);
    if(!result.error){
        next();
    } else {
        console.log(`Authentication have errors: [${result.error.message}]`);
        res.status(422).json(result.error.message);
    }
}


module.exports = { validateLogin }