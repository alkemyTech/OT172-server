const Joi = require("joi")

const validateNew = schema=> {(req, res, next) =>{
        const result = schema.validate(req.body)
        result.error
        ? (console.log(`New have errors: [${result.error.message}]`),
        res.status(422).json(result.error.message))
        : (console.log(`Success validation of new`), next())
    }
}

module.exports = { validateNew }
