import jwt from "jsonwebtoken";
import UserToken from "../models/UserToken.js";

const generateTokens = async (user) => {
  try {
    //jwt token
    const payload = { _id: user._id, roles: user.roles };

    //access token
    const accessToken = jwt.sign(
      payload,
      process.env.ACCESS_TOKEN_PRIVATE_KEY,
      { expiresIn: "14m" }
    );

    //refresh token
    const refreshToken = jwt.sign(
      payload,
      process.env.REFRESH_TOKEN_PRIVATE_KEY,
      { expiresIn: "30d" }
    );

    //find userToken with user id
    const userToken = await UserToken.findOne({ userId: user._id });

    //if userToken exists  then delete  from db and create new one
    if (userToken) await userToken.remove();

    //create new userToken with userId and refreshToken
    await new UserToken({ userId: user._id, token: refreshToken }).save();

    //return both access and refresh token
    return Promise.resolve({ accessToken, refreshToken });
  } catch (err) {
    return Promise.reject(err);
  }
};

export default generateTokens;