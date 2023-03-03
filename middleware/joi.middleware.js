const Joi = require("joi");

const joiValidator = () => {
  const campgroundSchema = Joi.object({
    campground: Joi.object({
      title: Joi.string().required,
      price: Joi.number().required().min(0),
      image: Joi.string().required(),
      location: Joi.string().required(),
      description: Joi.string().required(),
    }).required(),
  });
  const { error } = campgroundSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new CustomError(msg, 400);
  } else {
    next();
  }
};

module.exports = {
  joiValidator,
};
