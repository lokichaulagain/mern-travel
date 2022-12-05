import joi from "joi";
import passwordComplexity from "joi-password-complexity";

//signUp body validation method
const signUpBodyValidation = (body) => {
  const schema = joi.object({
    email: joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(body);
};

// Login body validation method
const logInBodyValidation = (body) => {
  const schema = joi.object({
    email: joi.string().email().required().label("Email"),
    password: joi.string().required().label("Password"),
  });
  return schema.validate(body);
};

//Refresh token body validation method
const refreshTokenBodyValidation = (body) => {
  const schema = joi.object({
    refreshToken: joi.string().required().label("Refresh Token"),
  });
  return schema.validate(body);
};

export {
  signUpBodyValidation,
  logInBodyValidation,
  refreshTokenBodyValidation,
};