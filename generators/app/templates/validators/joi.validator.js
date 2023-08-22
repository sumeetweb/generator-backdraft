import Joi from "joi";
export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().trim().email().trim(true).required(),
    password: Joi.string().trim().min(4).trim(true).required(),
    phoneNumber: Joi.string()
      .trim()
      .length(10)
      .pattern(/[6-9]{1}[0-9]{9}/)
      .required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

export const loginValidator = (req, res, next) => {
  const schema = Joi.object({
    password: Joi.string().trim().min(4).trim(true).required(),
    email: Joi.string().trim().email().trim(true).required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

