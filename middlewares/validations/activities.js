const Joi = require("joi");

const createActivityValidation = Joi.object({
  name: Joi.string().required(),
  image: Joi.optional(),
  content: Joi.string().required(),
});

const validateActivity = (req, res, next) => {
  const result = createActivityValidation.validate(req.body);
  if (!result.error) {
    next();
  } else {
    console.log(`Activity have errors: [${result.error.message}]`);
    res.status(422).json(result.error.message);
  }
};

module.exports = { validateActivity };
